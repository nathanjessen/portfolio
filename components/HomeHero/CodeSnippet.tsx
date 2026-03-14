export const CodeSnippet = () => {
  // GitHub Dark palette
  const kw = 'text-blue-400';        // keywords: import, const, async, new, await, return
  const str = 'text-orange-300';     // strings
  const fn = 'text-purple-400';      // function names, method calls
  const param = 'text-blue-300';     // parameters, types, property keys
  const num = 'text-sky-300';        // numbers
  const punct = 'text-white/50';     // punctuation, brackets
  const ident = 'text-white/80';     // identifiers, plain text

  return (
    <div className='rounded-lg overflow-hidden border border-white/10 text-sm font-mono w-full max-w-lg'>
      {/* Title bar */}
      <div className='flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10'>
        <span className='h-3 w-3 rounded-full bg-red-500/70' />
        <span className='h-3 w-3 rounded-full bg-yellow-500/70' />
        <span className='h-3 w-3 rounded-full bg-green-500/70' />
        <span className='ml-2 text-white/40 text-xs'>generate-story.ts</span>
      </div>

      {/* Code */}
      <div className='px-5 py-4 bg-white/[0.03] leading-relaxed space-y-0.5'>
        <div>
          <span className={kw}>import</span>
          <span className={ident}> Anthropic </span>
          <span className={kw}>from</span>
          <span className={str}> &apos;@anthropic-ai/sdk&apos;</span>
          <span className={punct}>;</span>
        </div>

        <div className='h-3' />

        <div>
          <span className={kw}>const</span>
          <span className={ident}> client </span>
          <span className={punct}>=</span>
          <span className={kw}> new</span>
          <span className={ident}> Anthropic</span>
          <span className={punct}>();</span>
        </div>

        <div className='h-3' />

        <div>
          <span className={kw}>async function</span>
          <span className={fn}> generateStory</span>
          <span className={punct}>(</span>
          <span className={param}>componentSrc</span>
          <span className={punct}>: </span>
          <span className={param}>string</span>
          <span className={punct}>) {'{'}</span>
        </div>

        <div className='pl-6'>
          <span className={kw}>const</span>
          <span className={ident}> {'{ content }'} </span>
          <span className={punct}>=</span>
          <span className={kw}> await</span>
          <span className={ident}> client.messages.</span>
          <span className={fn}>create</span>
          <span className={punct}>{'({'}</span>
        </div>

        <div className='pl-12'>
          <span className={param}>model</span>
          <span className={punct}>: </span>
          <span className={str}>&apos;claude-opus-4-6&apos;</span>
          <span className={punct}>,</span>
        </div>

        <div className='pl-12'>
          <span className={param}>max_tokens</span>
          <span className={punct}>: </span>
          <span className={num}>1024</span>
          <span className={punct}>,</span>
        </div>

        <div className='pl-12'>
          <span className={param}>messages</span>
          <span className={punct}>: </span>
          <span className={punct}>{'[{ '}</span>
          <span className={param}>role</span>
          <span className={punct}>: </span>
          <span className={str}>&apos;user&apos;</span>
          <span className={punct}>,</span>
        </div>

        <div className='pl-16'>
          <span className={param}>content</span>
          <span className={punct}>: </span>
          <span className={str}>`Generate a Storybook story</span>
        </div>

        <div className='pl-18'>
          <span className={str}>{'  '}for: ${'{'}</span>
          <span className={param}>componentSrc</span>
          <span className={str}>{'}'}`</span>
          <span className={punct}> {'}],'}</span>
        </div>

        <div className='pl-6'>
          <span className={punct}>{'})'}</span>
          <span className={punct}>;</span>
        </div>

        <div className='h-3' />

        <div className='pl-6'>
          <span className={kw}>return</span>
          <span className={ident}> content</span>
          <span className={punct}>[</span>
          <span className={num}>0</span>
          <span className={punct}>]</span>
          <span className={ident}>.text</span>
          <span className={punct}>;</span>
        </div>

        <div>
          <span className={punct}>{'}'}</span>
        </div>
      </div>
    </div>
  );
};
