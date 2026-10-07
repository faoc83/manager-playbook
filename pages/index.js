import Link from 'next/link'

export default function Home() {
  return (
    <div style={{maxWidth:'800px',margin:'0 auto',padding:'20px'}}>
      <h1>📘 Managers Playbook</h1>
      <p>Um guia prático para Engineering Managers</p>

      <section style={{background:'white',padding:'20px',margin:'20px 0',borderRadius:'8px'}}>
        <h2>📚 Docs</h2>
        <ul>
          <li><Link href="/docs/performance-management">Performance Management</Link></li>
          <li><Link href="/docs/mbti-guide">MBTI Guide</Link></li>
          <li><Link href="/docs/one-on-one">One-on-One</Link></li>
          <li><Link href="/docs/maturity-matrix">Maturity Matrix</Link></li>
          <li><Link href="/docs/skill-matrix">Skill Matrix</Link></li>
        </ul>
      </section>

      <section style={{background:'white',padding:'20px',margin:'20px 0',borderRadius:'8px'}}>
        <h2>📝 Templates</h2>
        <ul>
          <li><Link href="/templates/1on1-template">1:1</Link></li>
          <li><Link href="/templates/performance-review-template">Review</Link></li>
          <li><Link href="/templates/pip-template">PIP</Link></li>
          <li><Link href="/templates/feedback-template">Feedback</Link></li>
        </ul>
      </section>

      <section style={{background:'white',padding:'20px',margin:'20px 0',borderRadius:'8px'}}>
        <h2>📊 Matrices</h2>
        <ul>
          <li><Link href="/matrices/engineering-maturity-matrix">Maturity</Link></li>
          <li><Link href="/matrices/skill-matrix-template">Skills</Link></li>
        </ul>
      </section>

      <section style={{background:'white',padding:'20px',margin:'20px 0',borderRadius:'8px'}}>
        <h2>📖 Resources</h2>
        <ul>
          <li><Link href="/resources/recommended-reading">Reading</Link></li>
        </ul>
      </section>
    </div>
  )
}
