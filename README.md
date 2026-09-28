# Finca Torre Bosch · web

Next.js 15 (App Router) + CSS puro + Framer Motion. Formularios vía Resend.

```bash
npm install
npm run dev          # http://localhost:3000
npm run photos       # recorta/optimiza photos-src/ -> public/photos/ y genera og-image.jpg
npm run build
```

- Contenido editable: `content/data.ts`
- Leads: `app/api/lead/route.ts` (sin `RESEND_API_KEY` solo se registran en consola). Ver `.env.local.example`.
- En este PC (Norton intercepta TLS) usar `NODE_OPTIONS=--use-system-ca` para que next/font descargue Google Fonts.
- Los testimonios son provisionales, sustituir por reales antes de publicar (también alimentan el JSON-LD).
