# Cognito + Redis를 사용한 fe-be 웹서비스 인증에 대해서 알아보기 위한 프로젝트

# What is AWS Cognito??

It’s a user directory, an authentication server, and an authorization service for OAuth 2.0 access tokens and AWS credentials. With Amazon Cognito, you can authenticate and authorize users from the built-in user directory,

- `user directory`: Cognito는 사용자 디렉토리 = 유저 DB 역할을 해요
- `an authentication server`: Cognito는 로그인 요청을 받아서 사용자가 누구인지 확인(인증) 해줘요
- and `an authorization service for OAuth 2.0 access tokens and AWS credentials`: Cognito는 인증된 사용자에게 토큰(권한)을 부여하는 서비스에요
  - 로그인 완료된 사용자에게 권한/토큰을 부여해서 다른 API 또는 AWS리소스를 사용할 수 있도록 한다.
- `you can authenticate and authorize users from the built-in user directory`: 자체적으로 가지고 있는 user db(= user pool)로 인증과 권한부여(OAuth 토큰 발급)을 모두 처리

Cognito가 사용자 정보를 저장/관리하고 인증 요청에 대해서 유저의 권한정보와 인증 정보 등을 응답하는 역할을 수행
-> Cognito에 사용자 등록하고
-> Cognito한테 `얘 인증 유저 맞아`라고 물어보면 됨.
-> 별도 DB를 만들 필요도 없고, 인증하는 로직을 구현할 필요도 없다!(물론 필요하면 따로 만들어서 쓰는 것도 당연히 가능하다.)

## Cognito에서 사용되는 개념

**user pool**

user directory라고 하는데, 사용자 계정과 그 속성들을 중앙 집중적으로 관리하는 시스템을 의미
