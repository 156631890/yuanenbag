'use client';

import { useEffect, useRef } from 'react';
import content from './page-data.json';
import { enableBuyerQuestions } from './enable';
import './buyer-questions.css';

export default function BuyerQuestions({basePath = ''}: {basePath?: string}) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const page = container.current?.querySelector<HTMLElement>('[data-buyer-qa]');
    if (page) return enableBuyerQuestions(page);
  }, []);
  const html = basePath ? content.html.replaceAll('href="/', 'href="' + basePath + '/') : content.html;
  return <div ref={container} dangerouslySetInnerHTML={{__html: html}} />;
}
