import { CIcon } from '@coreui/icons-react'
import { cibGithub } from '@coreui/icons'
import { cilExternalLink } from '@coreui/icons'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import { useState } from 'react'

type Project = {
  title: string
  desc: string
  image: string
  tags: string[]
  live?: string
  repo?: string
}

const featuredProjects: Project[] = [
  {
    title: 'E-Commerce Storefront',
    desc: 'Fast storefront with cart, checkout flows, and responsive product grid.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['TypeScript', 'Next.js', 'Stripe'],
    live: 'https://dashboard.redpepperdigital.net/',
    repo: 'https://github.com/renugadevisdev',
  },
  {
    title: 'Radical',
    desc: 'Lighting contract workflows and order management — end-to-end handling for contracts and fulfilment.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    tags: ['React', 'Operations', 'Orders'],
  },
]

const moreProjects: Project[] = [
  {
    title: 'Quality Global',
    desc: 'Quality check forms and structured inspections for consistent standards across teams and sites.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    tags: ['Forms', 'QA', 'Compliance'],
  },
  {
    title: 'Project Tracking System',
    desc: 'Task management system centred on KPI tracking, prioritisation, and team delivery visibility.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Tasks', 'KPIs', 'Dashboard'],
  },
  {
    title: 'Tools management',
    desc: 'Equipment fault logging and tooling lifecycle visibility for maintenance and field operations.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
    tags: ['Equipment', 'Maintenance', 'Faults'],
  },
]

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? [...featuredProjects, ...moreProjects] : featuredProjects

  return (
    <section id="projects" className="py-5">
      <CContainer>
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-2">
          <h2 className="h2 rd-section-title mb-0">Projects</h2>
          <CButton
            color="primary"
            variant="outline"
            size="sm"
            className="mb-2"
            style={{ borderColor: 'var(--rd-accent)', color: 'var(--rd-accent)' }}
            type="button"
            onClick={() => setShowAll((v: boolean) => !v)}
          >
            {showAll ? 'Show fewer projects' : 'View All Projects'}
          </CButton>
        </div>
        <CRow className="g-4">
          {visible.map((p) => (
            <CCol key={p.title} md={4}>
              <CCard className="h-100 overflow-hidden rd-surface-card shadow-none">
                <div
                  className="w-100 overflow-hidden"
                  style={{ aspectRatio: '16/10' }}
                >
                  <img
                    src={p.image}
                    alt=""
                    className="w-100 h-100 object-fit-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <CCardBody>
                  <h3
                    className="h5 fw-bold mb-2"
                    style={{ color: 'var(--rd-text)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="small mb-3" style={{ color: 'var(--rd-muted)' }}>
                    {p.desc}
                  </p>
                  <div className="mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="rd-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.live || p.repo ? (
                    <div className="d-flex flex-wrap gap-2">
                      {p.live ? (
                        <CButton
                          size="sm"
                          variant="ghost"
                          color="primary"
                          className="d-inline-flex align-items-center gap-1 px-0"
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CIcon icon={cilExternalLink} className="text-primary" />
                          Live Demo
                        </CButton>
                      ) : null}
                      {p.repo ? (
                        <CButton
                          size="sm"
                          variant="ghost"
                          className="d-inline-flex align-items-center gap-1 px-0"
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CIcon icon={cibGithub} style={{ color: 'var(--rd-text)' }} />
                          GitHub
                        </CButton>
                      ) : null}
                    </div>
                  ) : null}
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </section>
  )
}
