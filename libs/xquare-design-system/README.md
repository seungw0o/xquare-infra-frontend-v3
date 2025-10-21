# @xquare/design-system

Xquare 디자인 시스템의 라이브러리입니다.

## 디렉터리 구조

- `src/tokens/global/`  
- `src/tokens/semantic/`  
  `color.bg.primary`처럼 의미 기반 별칭을 선언합니다. 글로벌 토큰의 변경을 여기에서 흡수하면 다크 모드나 테마 전환이 쉬워집니다.
- `src/theme/`  
  Emotion 등의 런타임 테마 객체를 구성합니다. 앱에서는 `ThemeProvider`에 이 값을 넘겨 사용합니다.