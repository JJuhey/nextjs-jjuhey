---
title: '스터디 기록 3번째, BackEnd'
date: '2022-02-25'
---

**한 달에 한 번씩 기록하는 스터디 기록[3/12]**
- API 설계 및 개념 공부
- ~~백엔드 구축 & 회원가입/로그인/로그아웃 기능 구현~~
- ~~도커로 백엔드 구동~~

***로그인 기능구현***
1. SIGN UP: `/POST`
  - 회원가입 요청 -> 비밀번호 암호화(brcypt) -> INSERT -> 토큰생성(jwt) 및 쿠키에 저장
2. LOG IN: `/POST`
3. LOG OUT: `/GET`

***API 설계***
1. Status Code
  - 2xx: Successful
  - 3xx: Redirection
  - 4xx: Client Error
  - 5xx: Server Error (가능하면 이 상태까지 오지 않는게 좋음)
2. Request Methods
  - GET, POST, PUT, DELETE, PATH, HEAD, OPTIONS, TRACE
  - GET: 200(ok), 401(Unauthorized), 403(Forbidden), 404(Not Found), 405(Method not allowed)
  - POST: 201(created), 401(Unauthorized), 403(Forbidden), 404(Not Found), 409(Conflict)
  - PUT/DELETE: 200(ok), 204(No Content), 403(Forbidden), 404(Not Found), 405(Method not allowed)

***중요한 개념***
> 멱등성, Idempotent
- 동일한 요청을 한 번 보내는 것과 여러번 연속적으로 보내는 것이 같은 효과를 지님
- 서버의 상태도 동일하게 남음(서버의 백엔드 상태를 보면 됨)
- 멱등성 메소드에는 통계 기록(조회수 등) 등을 제외하면 어떠한 부수 효과(side effect)도 존재해서는 안됨
- 요청의 종류별 멱등성:
  - 올바르게 구현한 겨우 `GET`, `HEAD`, `PUT`, `DELETE` 메서드는 멱등성을 가짐
  - `POST` 메서드는 멱등성을 가지지 않음
    - EX) 첫번째 `DELETE`요청이 200을 반환하면, 그 이후는 아마 404를 반환한다.
    - 서버의 상태만 보면 되기 때문에, 반환값이 달라져도 `DELETE`는 멱등성을 갖는다.
    - 즉, REST API에서 개발자는 `DELETE` 메서드를 사용해 '목록의 마지막 항목 제거' 기능을 구현해서는 안된다.
