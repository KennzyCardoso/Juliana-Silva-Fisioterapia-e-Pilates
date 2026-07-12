# Juliana Silva — Fisioterapia e Pilates

Landing page em React + Vite + Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run start   # serve a pasta dist/ na porta $PORT (padrão 3000)
```

## Deploy no Railway

O repositório já tem um `Dockerfile` pronto. No Railway:

1. Crie um novo projeto e aponte para este repositório (ou use `railway up` via CLI a partir desta pasta).
2. O Railway detecta o `Dockerfile` automaticamente e faz o build/deploy.
3. Não é necessária nenhuma variável de ambiente — a porta é injetada automaticamente pelo Railway via `$PORT`.

## Conteúdo a atualizar

- `src/data/studio.js` — dados do studio (endereço, telefone, horários, serviços).
- Fotos reais do espaço e da Juliana ainda precisam substituir os placeholders em `Hero.jsx` e `About.jsx`.
