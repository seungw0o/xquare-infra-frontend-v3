# Xquare Libs

이 디렉터리는 앱에서 재사용되는 모든 라이브러리를 모아 두는 공간입니다. 각 폴더는 Nx 프로젝트 하나와 1:1로 연결되며, `nx show project` 명령으로 상세 구성을 확인할 수 있습니다.

- `xquare-design-system/` – XQUARE DESIGN TOKEN.
- `xquare-user-interface/` – XQUARE APPLICATION USER INTERFACE.
- `xquare-core/` – XQUARE APPLICATION CORE.
- `xquare-utils/` – XQUARE UTILITIES.
- `xquare-test/` – XQAURE TEST UTILITIES.

새 라이브러리를 추가할 때는 `nx g @nx/js:lib libs/<name>` 또는 `nx g @nx/react:lib libs/<name>` 형식으로 생성하면 동일한 구조가 유지됩니다. 생성 후에는 필요에 맞게 `tags`를 부여하고 `@nx/enforce-module-boundaries` 규칙으로 계층 간 의존 관계를 관리하세요.
