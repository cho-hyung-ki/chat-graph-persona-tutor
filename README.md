> This is not an App, This is a Plugin for your Life.
> 인프라는 끝났다. 이제는 수용/거부만 하면 된다.
> Mail Locker는 첫 번째 서랍이다.

# Chat Graph & Persona Gap Tutor

**Origin:** 2026-05-13 | Author: cho-hyung-ki (Hyung-ki Cho)  
**Idea:** Reverse Prompt Tutor - User learns to ask, not just AI learns to answer.

> 대화창에서 페르소나를 추출하고, 전문가 페르소나와의 갭을 시각화하여 사용자가 최적의 질문을 학습하도록 돕는 플러그인

## 💡 Core Concept

일반적인 AI 플러그인은 "AI가 더 잘 대답하게" 만든다.
이 프로젝트는 반대다. **"내가 어떻게 질문해야 AI가 최적의 답을 주는지"를 사용자가 배우게** 한다.

- **내 페르소나** (현재 질문 방식) vs **전문가 페르소나** (목표 질문 방식) 추출
- 두 페르소나의 차이를 레이더 차트로 시각화
- 특정 항목(구체성, 맥락, 목표 명확성 등)의 강도를 조정하면, AI가 최적 질문 예시를 역으로 제공

## 🚀 Features

1.  **Summary & Index** - 대화 자동 목차 생성
2.  **Similar Chat Link** - 유사 대화끼리 연결
3.  **Complex Chat Splitter** - 한 창에 섞인 여러 주제 분리
4.  **Timeline Visualization** - 시간 흐름에 따른 사고 흐름 지도
5.  **Persona Extraction** - 대화에서 내 페르소나 자동 추출 (구체성, 맥락, 목표, 전문용어 등)
6.  **Persona Editor** - 추출된 페르소나를 직접 편집 / 저장 / 전환 (예: 개발자 모드, 기획자 모드)
7.  **Persona Gap Visualization** - 내 페르소나 vs 전문가 페르소나 레이더 차트
8.  **Persona Gap Tutor** - 갭 차이를 기반으로 강도 조절 슬라이더 제공, 최적 질문 역생성
9.  **Learning Log** - 내가 어떻게 질문이 성장했는지 학습 로그로 기록

## 🛡️ Why This Is Different

- 핵심 로직(페르소나 점수화, 최적 질문 생성)은 서버(MCP)에서만 동작 → 리버싱 방지
- 프론트(브라우저 확장)는 결과만 표시
- 사용자 학습 중심 → 한번 배우면 어떤 AI에서도 활용 가능

## 📅 Origin Proof

- First conceptualized: 2026-05-13 14:00 KST in Meta AI chat
- Evidence Doc: `ChatGraph_PersonaGap_Origin_Doc.pdf` (private timestamp)
- This repo creation date is the public proof of originality.

## 📜 License

Proprietary - All rights reserved by cho-hyung-ki.
Idea sharing welcome, commercial copying requires permission.

Contact: github.com/cho-hyung-ki

---
*This README itself is the timestamp. Whoever searches this idea in the future will find this repo first.*
