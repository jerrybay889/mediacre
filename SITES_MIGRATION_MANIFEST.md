# MEDIACRE Sites Migration Manifest

`@Sites` 연결이 가능해지는 즉시 아래 정본을 사용합니다.

## Pages
- Home
- Work listing
- Work detail template
- Services
- About
- Contact

## Global components
- Fixed Header
- Urban Frame Logo
- Primary CTA
- Project Card
- Service Card
- Footer
- Contact Brief Form

## Design tokens
- Urban Black `#0A0A0A`
- Signal White `#F5F5F2`
- Electric Cobalt `#2457FF`
- Signal Orange `#FF4D1F`
- Concrete Gray `#A5A5A0`
- Max content width `1320px`

## Responsive contract
- Desktop project grid: 2 columns
- Mobile project grid: 1 column
- Service grid: 3 → 1 columns
- Process grid: 5 → 2 → 1 columns
- Mobile CTA stack
- Mobile navigation drawer

## Content source
- `content/site-copy.json`
- `content/projects.json`

## Integrity rules
- 생성형 이미지는 실제 캠페인 증거처럼 표시하지 않습니다.
- 검증되지 않은 회사 정보는 Placeholder로 유지합니다.
- 프로젝트 성과 수치는 출처 확인 후 공개합니다.

## v0.5 migration additions
- Work filtering interaction
- Privacy page and form consent
- Analytics events
- Structured data
- Error / 404 states
- Accessibility skip link and visible focus states
