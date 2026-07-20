# Juliana Silva — Fisioterapia e Pilates

Site em Next.js (App Router) + Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Importe este repositório na Vercel (New Project → seleciona o repo).
2. A Vercel detecta o Next.js automaticamente — não é necessária nenhuma configuração extra.
3. Cada push na branch principal gera um novo deploy.

## Conteúdo a atualizar

- `data/studio.js` — dados do studio (endereço, telefone, horários, serviços, textos das seções). O JSON-LD (`app/layout.js`) usa os mesmos dados — se o endereço/telefone mudar, atualizar os dois.
- `public/video-fisioterapia-geriatrica.mp4` e `public/video-desafio-copo.mp4` — clipes reais do Instagram já estão em `public/`, mas ainda não usados em nenhuma seção. Bons candidatos para uma futura seção de "bastidores"/galeria.
