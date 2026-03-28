"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

import type { CodeExample } from "@/types/technology";

type CodePreviewPanelProps = {
  code: CodeExample;
};

/** iframe用の完全なHTMLドキュメントを構築 */
function buildSrcdoc(html: string, css?: string): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
body { font-family: sans-serif; padding: 12px; margin: 0; font-size: 14px; line-height: 1.6; color: #262626; }
${css ?? ""}
</style>
</head>
<body>${html}</body>
</html>`;
}

export function CodePreviewPanel({ code }: CodePreviewPanelProps) {
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const copyText = code.css ? `${code.html}\n\n/* CSS */\n${code.css}` : code.html;

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [copyText]);

  // iframe高さ自動調整
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const adjustHeight = () => {
      try {
        const body = iframe.contentDocument?.body;
        if (body) {
          iframe.style.height = `${body.scrollHeight + 24}px`;
        }
      } catch {
        // cross-origin の場合はデフォルト高さのまま
      }
    };

    iframe.addEventListener("load", adjustHeight);
    return () => iframe.removeEventListener("load", adjustHeight);
  }, [code]);

  const srcdoc = buildSrcdoc(code.html, code.css);

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-border md:grid-cols-2">
      {/* コードパネル */}
      <div className="relative border-b border-border bg-muted/30 md:border-b-0 md:border-r">
        <div className="flex items-center justify-between border-b border-border px-phi-2xs py-phi-3xs sm:px-phi-sm">
          <span className="text-[length:var(--font-size-caption)] font-medium leading-[var(--leading-phi-half)] text-muted-foreground">
            コード
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-muted-foreground transition-colors duration-[var(--duration-phi-md)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="コードをコピー"
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
        <pre className="overflow-x-auto p-phi-2xs sm:p-phi-sm">
          <code className="text-[11px] leading-[1.5] font-mono text-foreground sm:text-[length:var(--font-size-caption)] sm:leading-[var(--leading-phi)]">
            {code.html}
          </code>
          {code.css ? (
            <>
              <div className="my-phi-2xs border-t border-border" />
              <code className="text-[11px] leading-[1.5] font-mono text-primary/80 sm:text-[length:var(--font-size-caption)] sm:leading-[var(--leading-phi)]">
                {code.css}
              </code>
            </>
          ) : null}
        </pre>
      </div>

      {/* プレビューパネル */}
      <div>
        <div className="border-b border-border px-phi-2xs py-phi-3xs sm:px-phi-sm">
          <span className="text-[length:var(--font-size-caption)] font-medium leading-[var(--leading-phi-half)] text-muted-foreground">
            表示結果
          </span>
        </div>
        <iframe
          ref={iframeRef}
          srcDoc={srcdoc}
          sandbox="allow-same-origin"
          title="プレビュー"
          className="w-full min-h-[100px] border-0 sm:min-h-[120px]"
        />
      </div>
    </div>
  );
}
