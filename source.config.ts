import { defineConfig } from 'fumadocs-mdx/config';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import remarkObsidian from './remark-obsidian.mjs';

export default defineConfig({
  mdxOptions: {
    // 기본 플러그인은 유지하고 뒤에 덧붙인다
    remarkPlugins: (v) => [...v, remarkObsidian],

    // ```quiz / ```exam / ```layers 는 remarkObsidian 이 <InlineQuiz> 로 바꿔서 사라진다.
    // 문법 오류로 변환이 안 됐을 때 Shiki 가 "Language not found" 로 페이지 전체를
    // 죽이지 않도록, 하이라이터에는 마크다운으로 보이게 해 둔다.
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      langAlias: {
        ...rehypeCodeDefaultOptions.langAlias,
        quiz: 'markdown',
        exam: 'markdown',
        layers: 'markdown',
      },
    },
  },
});
