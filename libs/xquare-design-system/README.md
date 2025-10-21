# @xquare/design-system

Xquare 디자인 시스템의 라이브러리입니다.

## 디렉터리 구조

- `src/tokens/global/`  
  브랜드 공통 값(컬러, 타이포그래피, 여백 등)을 정의합니다. 가장 원자적인 토큰이며 플랫폼 무관하게 사용합니다.
- `src/tokens/semantic/`  
  `color.bg.primary`처럼 의미 기반 별칭을 선언합니다. 글로벌 토큰의 변경을 여기에서 흡수하면 다크 모드나 테마 전환이 쉬워집니다.
- `src/tokens/component/`  
  버튼·배너 등 컴포넌트 전용 토큰입니다. 컴포넌트 외부에서 직접 참조하지 말고 관련 UI 모듈이 import 하도록 유지하세요.
- `src/theme/`  
  Emotion 등의 런타임 테마 객체를 구성합니다. 앱에서는 `ThemeProvider`에 이 값을 넘겨 사용합니다.
- `src/components/`  
  토큰을 활용한 실제 UI 컴포넌트를 제공합니다. 외부에서는 이 레이어를 주로 사용하면 됩니다.