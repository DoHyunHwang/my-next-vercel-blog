import React, { memo } from 'react';

function Utterances() {
  return (
    <section
      ref={(el) => {
        if (!el) {
          return;
        }
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://utteranc.es/client.js';
        scriptElement.async = true;
        scriptElement.setAttribute('repo', 'DoHyunHwang/my-next-vercel-blog');
        scriptElement.setAttribute('issue-term', 'pathname');
        scriptElement.setAttribute('theme', 'github-dark');
        scriptElement.crossOrigin = 'anonymous';
        el.appendChild(scriptElement);
      }}
    ></section>
  );
}

export default memo(Utterances);
