import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import type { MDXComponents } from 'mdx/types';
import { Mermaid } from '@/components/mermaid';
import { LearningPath } from '@/components/learning-path';
import { ModuleNav } from '@/components/module-nav';
import { ServiceMindmap } from '@/components/service-mindmap';
import { InlineQuiz } from '@/components/inline-quiz';
import { Layers } from '@/components/layers';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    Mermaid,
    LearningPath,
    ModuleNav,
    ServiceMindmap,
    InlineQuiz,
    Layers,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
