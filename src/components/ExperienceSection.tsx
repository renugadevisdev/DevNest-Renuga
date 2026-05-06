import { CCol, CContainer, CRow } from '@coreui/react'

const items = [
  {
    title: 'Senior Frontend Developer',
    company: 'Clanizon LLP & Kasove Labs',
    range: '2026 - Present',
    bullets: [
      'Build and maintain design systems and reusable UI in React and TypeScript.',
      'Partner with design and API teams to deliver accessible, performant features.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Clanizon LLP',
    range: '2022 - 2025',
    bullets: [
      'Shipped marketing sites and product hubs with mobile-first CSS and build tooling.',
      'Improved Core Web Vitals through code splitting, lazy loading, and asset optimization.',
    ],
  },
  {
    title: 'Junior Web Developer',
    company: 'Clanizon LLP',
    range: '2021 - 2022',
    bullets: [
      'Developed and tested HTML/CSS components from Figma and maintained legacy pages.',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-5">
      <CContainer>
        <h2 className="h2 rd-section-title">Experience</h2>
        <CRow>
          <CCol lg={8}>
            <div className="rd-timeline">
              {items.map((job) => (
                <div key={job.title + job.range} className="rd-timeline-item">
                  <div className="rd-timeline-dot" aria-hidden />
                  <CRow className="align-items-start g-2">
                    <CCol>
                      <h3
                        className="h5 fw-bold mb-1"
                        style={{ color: 'var(--rd-text)' }}
                      >
                        {job.title}
                      </h3>
                      <p
                        className="small mb-2"
                        style={{ color: 'var(--rd-muted)' }}
                      >
                        {job.company}
                      </p>
                      <ul
                        className="ps-3 mb-0 small"
                        style={{ color: 'var(--rd-muted)' }}
                      >
                        {job.bullets.map((b) => (
                          <li key={b} className="mb-1">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </CCol>
                    <CCol xs={12} lg="auto" className="text-lg-end">
                      <span
                        className="small fw-semibold d-inline-block px-2 py-1 rounded"
                        style={{
                          background: 'var(--rd-elevated)',
                          color: 'var(--rd-muted)',
                          border: '1px solid var(--rd-border)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {job.range}
                      </span>
                    </CCol>
                  </CRow>
                </div>
              ))}
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  )
}
