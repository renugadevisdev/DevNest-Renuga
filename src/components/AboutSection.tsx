import { CIcon } from '@coreui/icons-react'
import {
  cilBriefcase,
  cilEnvelopeOpen,
  cilLocationPin,
  cilUser,
} from '@coreui/icons'
import { CAvatar, CCol, CContainer, CRow } from '@coreui/react'

const details = [
  { icon: cilUser, label: 'Name', value: 'Renugadevi S' },
  { icon: cilBriefcase, label: 'Experience', value: '4+ Years' },
  { icon: cilEnvelopeOpen, label: 'Email', value: 'renugadevis.dev@gmail.com' },
  { icon: cilLocationPin, label: 'Location', value: 'Bangalore, India' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-5">
      <CContainer>
        <h2 className="h2 rd-section-title">About Me</h2>
        <CRow className="align-items-center g-4 g-lg-5">
          <CCol md={4} className="text-center">
            <CAvatar
              shape="rounded-circle"
              className="border border-2"
              style={{
                width: 220,
                height: 220,
                maxWidth: '100%',
                borderColor: 'var(--rd-border) !important',
                background: 'linear-gradient(145deg, var(--rd-accent) 0%, #1e3a5f 100%)',
                fontSize: '3.5rem',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              RD
            </CAvatar>
          </CCol>
          <CCol md={8}>
            <p
              className="mb-4"
              style={{ color: 'var(--rd-muted)', lineHeight: 1.7 }}
            >
              I&apos;m a passionate frontend developer with a focus on building
              clean interfaces and performant user experiences. I enjoy turning
              complex problems into simple, beautiful solutions and collaborating
              with teams to ship products users love.
            </p>
            <CRow className="g-3">
              {details.map(({ icon, label, value }) => (
                <CCol sm={6} key={label}>
                  <div
                    className="d-flex align-items-start gap-3 p-3 rounded"
                    style={{
                      background: 'var(--rd-elevated)',
                      border: '1px solid var(--rd-border)',
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0 rounded"
                      style={{
                        width: 40,
                        height: 40,
                        background: 'rgba(59, 130, 246, 0.15)',
                      }}
                    >
                      <CIcon icon={icon} size="lg" style={{ color: 'var(--rd-accent)' }} />
                    </div>
                    <div>
                      <div className="small" style={{ color: 'var(--rd-muted)' }}>
                        {label}
                      </div>
                      <div className="fw-semibold" style={{ color: 'var(--rd-text)' }}>
                        {value}
                      </div>
                    </div>
                  </div>
                </CCol>
              ))}
            </CRow>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  )
}
