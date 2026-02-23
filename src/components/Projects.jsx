import { data } from '../data'
import { useReveal } from '../hooks/useReveal'
import s from './Projects.module.css'

export default function Projects() {
  const hRef = useReveal('reveal', 0)
  const gRef = useReveal('reveal', 150)
  return (
    <section id="projects" className="section-wrapper alt-bg">
      <div ref={hRef} className="reveal">
        <div className="sec-header">
          <div className="sec-num">04</div>
          <div className="sec-label">Selected Work</div>
          <h2 className="sec-title">Projects</h2>
          <div className="sec-rule" />
        </div>
      </div>
      <div ref={gRef} className={`reveal ${s.grid}`}>
        {data.projects.map((proj, i) => (
          <div key={i} className={s.card}>
            <div className={s.num}>{proj.num}</div>
            <div className={s.name}>{proj.name}</div>
            <p className={s.desc}>{proj.desc}</p>
            <div className={s.tech}>{proj.tech.map((t, j) => <span key={j} className={s.chip}>{t}</span>)}</div>
            <a href={proj.link} className={s.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
