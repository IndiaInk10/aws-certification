/**
 * Fumadocs UI 문구 한국어.
 *
 * 키는 `fumadocs-ui/dist/.translations/keys.js` 의 문자열 그대로다
 * ("원문(쓰이는 곳)(aria-label)" 형식). 여기 없는 키는 영어 원문이 그대로 나온다.
 */
export const uiKo: Record<string, string> = {
  'Search(search dialog)': '검색',
  'Search(search trigger)': '검색',
  'Open Search(search trigger)(aria-label)': '검색 열기',
  'Close Search(search dialog)(aria-label)': '검색 닫기',
  'No results found(search dialog)': '결과가 없습니다',

  'On this page(table of contents)': '이 문서의 목차',
  'No Headings(table of contents)': '목차가 없습니다',
  'Table of Contents(inline table of contents)': '목차',

  'Next Page(pagination)': '다음 문서',
  'Previous Page(pagination)': '이전 문서',
  'Last updated on(page footer)': '마지막 수정',
  'Edit on GitHub(edit page)': 'GitHub에서 편집',

  'Copy Markdown(page actions)': '마크다운 복사',
  'View as Markdown(page actions)': '마크다운으로 보기',
  'Open(page actions)': '다른 곳에서 열기',
  'Open in GitHub(page actions)': 'GitHub에서 열기',
  'Open in ChatGPT(page actions)': 'ChatGPT에서 열기',
  'Open in Claude(page actions)': 'Claude에서 열기',
  'Open in Cursor(page actions)': 'Cursor에서 열기',
  'Open in Scira AI(page actions)': 'Scira AI에서 열기',
  'Read {url}, I want to ask questions about it.(page actions)':
    '{url} 을(를) 읽고, 이 내용에 대해 질문하고 싶습니다.',

  // 언어 스위처 — 이 사이트에서는 **문제 언어**만 바꾼다 (문서는 한국어 하나)
  'Choose a language(language switcher)': '문제 언어',
  'Choose a language(language switcher)(aria-label)': '문제 언어 선택',

  'Toggle Theme(theme switcher)(aria-label)': '테마 전환',
  'Light(theme switcher)(aria-label)': '밝게',
  'Dark(theme switcher)(aria-label)': '어둡게',
  'System(theme switcher)(aria-label)': '시스템 설정',

  'Open Sidebar(aria-label)': '사이드바 열기',
  'Close Sidebar(aria-label)': '사이드바 닫기',
  'Open Sidebar(sidebar)(aria-label)': '사이드바 열기',
  'Close Sidebar(sidebar)(aria-label)': '사이드바 닫기',
  'Collapse Sidebar(sidebar)(aria-label)': '사이드바 접기',
  'Show Sidebar(sidebar)': '사이드바 보이기',
  'Hide Sidebar(sidebar)': '사이드바 숨기기',
  'Toggle Menu(home layout header)(aria-label)': '메뉴 열기',
  'Layout Tab(layout tab trigger)': '자격증 선택',

  'Copy Text(code block)(aria-label)': '복사',
  'Copied Text(code block)(aria-label)': '복사했습니다',
  'Copy Anchor Link(heading anchor)(aria-label)': '이 위치 링크 복사',
  'Copy Link(accordion)(aria-label)': '링크 복사',

  'Page Not Found(404 not found page)': '페이지를 찾을 수 없습니다',
  'Back to Home(404 not found page)': '처음으로',
  'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 not found page)':
    '주소가 바뀌었거나 삭제된 문서일 수 있습니다.',

  'Type(type table)': '타입',
  'Prop(type table)': '항목',
  'Default(type table)': '기본값',
  'Parameters(type table)': '매개변수',
  'Returns(type table)': '반환값',
};
