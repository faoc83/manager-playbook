import { marked } from 'marked';

async function loadMarkdown() {
  const response = await fetch('/playbook.md');
  const markdown = await response.text();
  const html = marked(markdown);
  document.getElementById('app').innerHTML = html;
}

loadMarkdown();