import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const supabaseInstance = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function GET(request: NextRequest) { 
  return NextResponse.json({ text: "hello world" });
}

export async function POST(request: NextRequest) {
  const body: KakaoBody = await request.json();
  const kakaoKey = request.headers.get("kakao-api-key");
  if (kakaoKey !== process.env.KAKAO_API_KEY) {
    return new Response("Unauthorized (3)", { status: 403 });
  }
  // console.dir(body, { depth: 5 });
  const userInput = body.userRequest.utterance;
  const kakaoUserId = body?.userRequest?.user?.id;
  const userKey = body?.userRequest?.user?.properties?.plusfriendUserKey ?? kakaoUserId;
  // console.log(userEmail, kakaoUserId, userKey);
  // console.log(res);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmail = emailRegex.test(userInput);
  if (isEmail) {
    const name = userInput.split("@")[0];
    const res = await supabaseInstance.from("kakao-user").insert({
      kakao_id: userKey,
      email: userInput,
      name,
    });
    if (res.error) {
      return NextResponse.json(getResponse("이메일 등록에 실패했어요."));
    }

    return NextResponse.json(getResponse(`${name}님, 안녕하세요`));
  }

  // 대화기록
  const chatType = defineChatType(body?.flow?.lastBlock?.name);
  await supabaseInstance.from("kakao-chat").insert({
    kakao_id: userKey,
    text: userInput,
    type: "user",
    rawdata: body,
    chat_type: chatType,
  });

  if (body?.flow?.lastBlock?.name === "조각의 이유") {
    return NextResponse.json(getResponse("오늘의 조각을 기억할게요."));
  }

  if (chatType) {
    const response = await generateChat([{ role: "user", content: userInput }], chatType, userKey);
    return NextResponse.json(getResponse(response));
  }

  if (userInput.includes("대화 종료")) {
    return NextResponse.json(getResponse("대화 너무 즐거웠어요! 다음에 또 대화해요."));
  }

  const { data: messages } = await supabaseInstance
    .from("kakao-chat")
    .select("*")
    .eq("kakao_id", userKey)
    .order("created_at", { ascending: false })
    .limit(3);
  // console.log(messages);
  const lasMessage = messages?.[1];
  // 가장 최근 메시지(사용자 메시지가 인서트 되므로 2번째 메시지)
  if (lasMessage?.type === "assistant") {
    const response = await generateChat(
      messages.reverse().map(m => ({ role: m.type, content: m.text })),
      lasMessage.chat_type,
      userKey
    );

    return NextResponse.json(getResponse(response));
  }

  return NextResponse.json(getResponse("이해하기 어려워요."));
}

function getResponse(text: string) {
  // console.log(text);
  const texts = text.split("\n\n");
  // console.log(texts);
  return {
    version: "2.0",
    template: {
      outputs: texts.map(t => ({ simpleText: { text: t } })),
    },
  }
}

async function generateChat(_messages: { role: "user" | "assistant"; content: string }[], chatType: string, kakaoId?: string) {
  // console.log(_messages)
  const systemMap = {
    emotion_chat: "너는 감정을 따뜻하게 받아주는 AI야.\n사용자는 감정을 털어놓고 싶어서 너와 대화해.\n\n말투는 부드럽고 다정하며, 감정을 판단하지 않고 받아줘.\n먼저 공감하고, 필요할 땐 조심스럽게 질문해줘.\n\n해결보단 공감, 설명보단 들어주는 게 먼저야.\n\n이 공간이 사용자에게 안전하게 느껴지도록 해줘.\n“그럴 수 있어요”, “함께 들여다볼까요” 같은 말로 감정을 잘 다독여줘.",
    throw_emotion_chat: `너는 사용자의 감정을 받아주는 친한 친구 같은 역할이야.\n\n사용자가 뭐라고 하든 판단하지 않고, 조언도 분석도 하지 않아.\n그냥 옆에 앉아 들어주는 느낌으로 가볍고 편하게 반응해줘.\n위로나 해결보다는 “그래서? 와 미쳤네? 진짜 힘들었겠다”처럼\n친구끼리 수다 떨듯 공감만 해주는 게 좋아.\n\n말투는 말 놓는 편한 친구 톤, 적당히 장난스럽거나 털털해도 괜찮아.\n단, 감정을 가볍게 넘기진 말고 진심으로 들어주는 태도는 유지할 것.`,
  }
  const response = await client.chat.completions.create({
    messages: [
      { role: "system", content: systemMap[chatType] },
      ..._messages,
    ],
    model: "gpt-4.1",
    max_tokens: 150,
    temperature: 0.9,
  });

  await supabaseInstance.from("kakao-chat").insert({
    kakao_id: kakaoId,
    text: response.choices[0].message.content,
    type: "assistant",
    rawdata: response,
    chat_type: chatType,
  });

  return response.choices[0].message.content;
}

function defineChatType(name?: string) {
  if (name === "대화하기") { 
    return "emotion_chat";
  } else if (name === "감정버리기") {
    return "throw_emotion_chat";
  }

  return null;
}

interface KakaoBody {
  intent: { id: string; name: string };
  userRequest: {
    timezone: string;
    params: { ignoreMe: string };
    block: { id: string; name: string };
    utterance: string;
    lang: string | null;
    user: { id: string; type: string; properties: Record<string, any> };
  };
  bot: { id: string; name: string };
  action: {
    name: string;
    clientExtra: Record<string, string> | null;
    params: {};
    id: string;
    detailParams: {};
  };
  flow?: {
    lastBlock?: { id: string; name: string };
    trigger?: { type: string };
  }
}
