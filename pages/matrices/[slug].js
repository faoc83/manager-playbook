import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('matrices'))
  const paths = files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      params: { slug: file.replace('.md', '') }
    }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const fullPath = path.join('matrices', `${params.slug}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  return { props: { content: fileContent } }
}

export default function MatrixPage({ content }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link href="/">← Home</Link>
      </nav>
      <article style={styles.article}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
      <nav style={styles.nav}>
        <Link href="/">← Back to Home</Link>
      </nav>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    minHeight: '100vh',
    background: 'white',
  },
  nav: {
    marginBottom: '20px',
    paddingTop: '20px',
  },
  article: {
    lineHeight: '1.7',
    color: '#333',
  },
}
