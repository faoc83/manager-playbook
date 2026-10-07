# Setup & Deploy Guide

## 🚀 Quick Start

### 1. Clone o Repositório

```bash
git clone https://github.com/your-org/managers-playbook.git
cd managers-playbook
```

### 2. Instalar Dependências (opcional)

Se quiseres usar Next.js para navegação:

```bash
npm install
```

### 3. Testar Localmente

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deploy no Vercel

### Option 1: Via Vercel UI (Recomendado)

1. **Cria conta em** [vercel.com](https://vercel.com)
2. **Importa o repositório** do GitHub
3. **Configurações:**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. **Deploy!**

### Option 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### Option 3: Static Site (Simples)

Se não quiseres Next.js, podes usar GitHub Pages:

1. **Enable GitHub Pages** nas settings do repo
2. **Branch:** `main` ou `gh-pages`
3. **Folder:** `/docs` ou root
4. **Site live em:** `https://your-org.github.io/managers-playbook/`

---

## 📁 Estrutura de Ficheiros

```
managers-playbook/
├── README.md                 # Landing page
├── package.json              # Dependencies (Next.js)
├── vercel.json               # Vercel config
├── docs/                     # Documentation
│   ├── index.md
│   ├── performance-management.md
│   ├── mbti-guide.md
│   ├── one-on-one.md
│   ├── maturity-matrix.md
│   └── skill-matrix.md
├── templates/                # Templates prontos
│   ├── 1on1-template.md
│   ├── performance-review-template.md
│   ├── pip-template.md
│   ├── feedback-template.md
│   └── career-development-template.md
├── matrices/                 # Matrizes detalhadas
│   ├── engineering-maturity-matrix.md
│   └── skill-matrix-template.md
├── resources/                # Recursos adicionais
│   └── recommended-reading.md
└── .github/
    └── CONTRIBUTING.md       # Guia de contribuição
```

---

## 🎨 Customização

### Adicionar Logo

1. Cria pasta `public/`
2. Adiciona `logo.png`
3. Referencia no README: `![Logo](/public/logo.png)`

### Mudar Cores (Next.js)

Edita `styles/globals.css`:

```css
:root {
  --primary: #0070f3;
  --background: #ffffff;
  --text: #000000;
}
```

### Adicionar Navegação

Cria `pages/index.js`:

```jsx
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Managers Playbook</h1>
      <nav>
        <Link href="/docs/performance-management">Performance</Link>
        <Link href="/docs/mbti-guide">MBTI</Link>
        <Link href="/docs/one-on-one">1:1s</Link>
      </nav>
    </div>
  )
}
```

---

## 📊 Analytics (Opcional)

### Vercel Analytics

1. Vai a [vercel.com](https://vercel.com)
2. Seleciona o projeto
3. Analytics → Enable

### Google Analytics

Adiciona ao `pages/_app.js`:

```jsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // GA tracking code
  }, [router])

  return <Component {...pageProps} />
}
```

---

## 🔒 Security

### Environment Variables

Se precisares de env vars:

1. **Vercel Dashboard** → Settings → Environment Variables
2. **Add:** `NEXT_PUBLIC_*` para client-side

### Access Control

Para restringir acesso:

- **Vercel Protection:** Settings → Deployments → Protection
- **Basic Auth:** Usa middleware ou Vercel functions

---

## 📱 Mobile Optimization

O site é responsive por defeito (Markdown + Next.js). Para melhorar:

1. **Meta tags** no `pages/_document.js`:
```jsx
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

2. **CSS responsive:**
```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next
npm run build
```

### Links Não Funcionam

- Verifica paths relative vs absolute
- Usa `.md` extension nos links
- Testa localmente antes de deploy

### Markdown Não Renderiza

- Instala `react-markdown`
- Configura Next.js para processar MDX

---

## 📞 Support

- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions
- **Email:** [your-email@company.com](mailto:your-email@company.com)

---

**Happy deploying!** 🚀
