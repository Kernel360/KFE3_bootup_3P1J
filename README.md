# 맛집 식사권 경매 사이트

**모노 레포 구조**
1. 크게 **apps**와 **packages**로 분류
    - **apps:** 실제 서비스할 프레임워크 및 라이브러리 배치 (nextjs, storybook)
    - **pacakages:** apps 실행에 필요한 라이브러리, 설정, 컴포넌트 등을 배치 (typescript, eslint, tailwind, 컴포넌트)
2. **apps - web**과 **docs** 배치
    - **web**: 우리가 서비스할 nextjs 프레임워크 배치
    - **docs**: 개발에 필요한 문서인 storybook 라이브러리 배치
3. **packages** - **eslint-config**, **tailwind-config**, **typescript-config**, **ui** 배치
    - **eslint-config**: apps의 코드 스타일 및 컨벤션을 관리
    - **tailwind-config**: apps의 코드 중 테일윈드에 해당하는 코드들을 컴파일하는 설정 파일
    - **typescript-config**: apps의 코드 중 타입스크립트 코드들을 컴파일하는 설정 파일
    - **ui**: apps에서 사용할 컴포넌트들 배치

**변경 커밋 컨벤션**
- feat        : 기능 (새로운 기능)  
- fix         : 코드 수정
- bugfix      : 버그 수정  
- refactor    : 리팩토링  
- design      : CSS 등 사용자 UI 디자인 변경     
- docs        : 문서 수정 (문서 추가, 수정, 삭제, README)  
- test        : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)  
- settings    : 프로젝트 세팅 관련, 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
- init        : 초기 생성  
- rename      : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우  
- remove      : 파일을 삭제하는 작업만 수행한 경우
