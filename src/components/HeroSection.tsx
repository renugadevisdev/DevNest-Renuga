import { CIcon } from '@coreui/icons-react'
import { cibGithub, cibLinkedinIn } from '@coreui/icons'
import { cilEnvelopeClosed } from '@coreui/icons'
import { CBadge, CButton, CCol, CContainer, CRow } from '@coreui/react'

export function HeroSection() {
  return (
    <section id="home" className="py-5" style={{ paddingTop: '3rem' }}>
      <CContainer>
        <CRow className="align-items-center g-4 g-lg-5">
          <CCol lg={6}>
            <CBadge
              color="primary"
              className="px-3 py-2 mb-3"
              textColor="white"
            >
              Hi, I&apos;m
            </CBadge>
            <h1 className="display-4 fw-bold mb-2" style={{ color: 'var(--rd-text)' }}>
              Renugadevi S
            </h1>
            <p
              className="h4 mb-4"
              style={{ color: 'var(--rd-accent)' }}
            >
              Frontend Developer
            </p>
            <p
              className="lead mb-4"
              style={{ color: 'var(--rd-muted)', maxWidth: '32rem' }}
            >
              I build responsive, user-friendly web applications with modern
              technologies.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <CButton
                color="primary"
                className="text-white px-4"
                href="#projects"
              >
                View Projects
              </CButton>
              <CButton
                color="primary"
                variant="outline"
                className="px-4"
                style={{ borderColor: 'var(--rd-accent)', color: 'var(--rd-accent)' }}
                href="#contact"
              >
                Contact Me
              </CButton>
            </div>
            <div className="d-flex gap-2">
              <CButton
                size="sm"
                variant="ghost"
                className="p-0 rounded-circle"
                href="https://github.com/renugadevisdev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <span
                  className="d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: 40,
                    height: 40,
                    background: 'var(--rd-elevated)',
                    border: '1px solid var(--rd-border)',
                  }}
                >
                  <CIcon icon={cibGithub} size="lg" style={{ color: 'var(--rd-accent)' }} />
                </span>
              </CButton>
              <CButton
                size="sm"
                variant="ghost"
                className="p-0 rounded-circle"
                href="https://www.linkedin.com/in/renuga-devi-631998227"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span
                  className="d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: 40,
                    height: 40,
                    background: 'var(--rd-elevated)',
                    border: '1px solid var(--rd-border)',
                  }}
                >
                  <CIcon icon={cibLinkedinIn} size="lg" style={{ color: 'var(--rd-accent)' }} />
                </span>
              </CButton>
              <CButton
                size="sm"
                variant="ghost"
                className="p-0 rounded-circle"
                href="mailto:renugadevis.dev@gmail.com"
                aria-label="Email"
              >
                <span
                  className="d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: 40,
                    height: 40,
                    background: 'var(--rd-elevated)',
                    border: '1px solid var(--rd-border)',
                  }}
                >
                  <CIcon icon={cilEnvelopeClosed} size="lg" style={{ color: 'var(--rd-accent)' }} />
                </span>
              </CButton>
            </div>
          </CCol>
          <CCol lg={6} className="text-center mt-4 mt-lg-0">
            <div className="rd-hero-glow">
              <img
                src="/hero-json-graphic.png"
                alt="JSON as a central hub connecting APIs, data, and global systems"
                className="img-fluid"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement?.classList.add('rd-hero-fallback')
                }}
              />
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  )
}
