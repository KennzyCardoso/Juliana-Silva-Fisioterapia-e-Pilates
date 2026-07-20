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

- `data/studio.js` — dados do studio (endereço, telefone, horários, serviços, textos das seções).
- A seção "Sobre" (`components/About.jsx`) tem um espaço reservado (proporção 4/5) esperando uma foto real da Juliana ou do studio — hoje mostra só o selo da marca. Assim que houver a foto, trocar o conteúdo desse bloco por um `next/image` apontando para o arquivo em `public/`.
