"use client";
import ReactHtmlParser from "react-html-parser";
import "highlight.js/styles/monokai-sublime.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { useEffect } from "react";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

function ArticleContent({ content }: { content: string }) {
  useEffect(() => {
    hljs.highlightAll();
  }, [content]);
  return <>{ReactHtmlParser(content)}</>;
}

export default ArticleContent;
