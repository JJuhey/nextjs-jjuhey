import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) { 
  return NextResponse.json({ text: "hello world" });
}

export async function POST(request: NextRequest) {
  const body: KakaoBody = await request.json();
  const kakaoKey = request.headers.get("kakao-api-key");
  if (kakaoKey !== "dsa4fdbods1kz3aqhbz4") {
    return new Response("Unauthorized (3)", { status: 403 });
  }
  // console.dir(body, { depth: 5 });
  const userEmail = body.userRequest.utterance;
  const kakaoUserId = body?.userRequest?.user?.id;
  const userKey = body?.userRequest?.user?.properties?.userKey;
  console.log(userEmail, kakaoUserId, userKey);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmail = emailRegex.test(userEmail);
  if (!isEmail) {
    return NextResponse.json({
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text: "안녕하세요. 이해하기 어려워요.",
            },
          },
        ],
      },
    });
  }

  const name = userEmail.split("@")[0];
  return NextResponse.json({
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `${name}님, 안녕하세요`,
          },
        },
      ],
    },
  });
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
}
