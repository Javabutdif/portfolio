const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const directories = [
  'docs/ai',
  'docs/ai/tasks',
  'docs/ai/subagents',
  'docs/specs',
  'docs/plans'
];

const files = [
  { path: 'docs/ai/commands.md', content: '# AI Commands\n\nList of commands useful for AI validation and workflow.' },
  { path: 'docs/ai/standards.md', content: '# Coding Standards\n\nRules and formatting guidelines for the AI.' },
  { path: 'docs/ai/project-context.md', content: '# Project Context\n\nProduct and business context for the AI.' },
  { path: 'docs/ai/architecture.md', content: '# Architecture\n\nSystem shape and module boundaries.' },
  { path: 'docs/ai/future-work.md', content: '# Future Work\n\nKnown gaps and deferred improvements.' },
  { path: 'docs/ai/decisions.md', content: '# Architecture Decision Records\n\nRecord meaningful tradeoffs and decisions here.' },
  { path: 'docs/ai/subagents/README.md', content: '# Subagents\n\nRole definitions for splitting work.' },
  { path: 'docs/ai/subagents/handoff-contract.md', content: '# Handoff Contract\n\nUsed for task handoffs between agents.' }
];

console.log('Initializing AI Workflow structure...');

directories.forEach(dir => {
  const fullPath = path.join(rootDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

files.forEach(file => {
  const fullPath = path.join(rootDir, file.path);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, file.content);
    console.log(`Created file: ${file.path}`);
  }
});

console.log('AI Workflow structure initialized successfully!');
