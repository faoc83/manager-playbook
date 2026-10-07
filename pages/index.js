import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Managers Playbook</title>
        <meta name="description" content="Um guia prático para Engineering Managers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.title}>📘 Managers Playbook</h1>
          <p style={styles.description}>
            Um guia prático para Engineering Managers sobre performance management, 
            one-on-ones, MBTI, e matrizes de competência.
          </p>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>📚 Core Topics</h2>
            <ul style={styles.list}>
              <li><Link href="/docs/performance-management">Performance Management</Link></li>
              <li><Link href="/docs/mbti-guide">MBTI Guide</Link></li>
              <li><Link href="/docs/one-on-one">One-on-One</Link></li>
              <li><Link href="/docs/maturity-matrix">Maturity Matrix</Link></li>
              <li><Link href="/docs/skill-matrix">Skill Matrix</Link></li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>📝 Templates</h2>
            <ul style={styles.list}>
              <li><Link href="/templates/1on1-template">1:1 Meeting Template</Link></li>
              <li><Link href="/templates/performance-review-template">Performance Review</Link></li>
              <li><Link href="/templates/pip-template">PIP Template</Link></li>
              <li><Link href="/templates/feedback-template">Feedback Template</Link></li>
              <li><Link href="/templates/career-development-template">Career Development</Link></li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>📊 Matrices</h2>
            <ul style={styles.list}>
              <li><Link href="/matrices/engineering-maturity-matrix">Engineering Maturity Matrix</Link></li>
              <li><Link href="/matrices/skill-matrix-template">Skill Matrix Template</Link></li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>📖 Resources</h2>
            <ul style={styles.list}>
              <li><Link href="/resources/recommended-reading">Recommended Reading</Link></li>
            </ul>
          </section>

          <footer style={styles.footer}>
            <p>Feito com ❤️ para a comunidade de Engineering Management</p>
          </footer>
        </div>
      </main>
    </>
  )
}

const styles = {
  main: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #fafafa 0%, #eaeaea 100%)',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#0070f3',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  section: {
    marginBottom: '30px',
    background: 'white',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footer: {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #eaeaea',
    textAlign: 'center',
    color: '#666',
  },
}
