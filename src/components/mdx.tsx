import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import type { MDXComponents } from 'mdx/types';
import { Diagram } from '@/components/diagram';
import { LearningPath } from '@/components/learning-path';
import { ModuleNav } from '@/components/module-nav';
import { ServiceMindmap } from '@/components/service-mindmap';
import { InlineQuiz } from '@/components/inline-quiz';
import { Layers } from '@/components/layers';
import { GlossaryList, Term } from '@/components/glossary';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Accordion,
    Accordions,
    Diagram,
    LearningPath,
    ModuleNav,
    ServiceMindmap,
    InlineQuiz,
    Layers,
    Term,
    GlossaryList,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
