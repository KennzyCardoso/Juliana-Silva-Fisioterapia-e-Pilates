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

- `data/studio.js` — dados do studio (endereço, telefone, horários, serviços, textos das seções, itens da galeria "Momentos"). O JSON-LD (`app/layout.js`) usa os mesmos dados de endereço/telefone — se mudarem, atualizar os dois.
- A seção "Sobre" (`components/About.jsx`) tem um espaço reservado (selo com opacidade sobre fundo sand) esperando uma foto real da Juliana em ação — ainda não temos uma confirmada. Ao adicionar, confirmar com a Juliana quem aparece antes de publicar (já aconteceu de uma foto/vídeo de aluna ser usado por engano).
