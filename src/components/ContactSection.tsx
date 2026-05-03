import { CIcon } from '@coreui/icons-react'
import { cibLinkedin } from '@coreui/icons'
import { cilEnvelopeOpen } from '@coreui/icons'
import { cilLocationPin } from '@coreui/icons'
import { cilPhone } from '@coreui/icons'
import { CButton, CCol, CContainer, CRow } from '@coreui/react'

const cards = [
  {
    label: 'Email',
    value: 'renugadevis.dev@gmail.com',
    href: 'mailto:renugadevis.dev@gmail.com',
    icon: cilEnvelopeOpen,
  },
  {
    label: 'Phone',
    value: '+91 6382880319',
    href: 'tel:+916382880319',
    icon: cilPhone,
  },
  {
    label: 'Location',
    value: 'Bangalore, India',
    href: 'https://maps.app.goo.gl',
    icon: cilLocationPin,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/renugadevis',
    href: 'https://www.linkedin.com/in/renuga-devi-631998227',
    icon: cibLinkedin,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-5 pb-0">
      <CContainer>
        <h2 className="h2 rd-section-title">Contact Me</h2>
        <CRow className="g-3 g-md-4">
          {cards.map((c) => (
            <CCol key={c.label} sm={6} lg={3}>
              <a
                href={c.href}
                className="text-decoration-none d-block h-100"
                target={c.label === 'Location' || c.label === 'LinkedIn' ? '_blank' : undefined}
                rel="noreferrer"
              >
                <div
                  className="h-100 p-4 rounded text-center rd-surface-card"
                  style={{ minHeight: 160 }}
                >
                  <div className="mb-3 d-flex justify-content-center">
                    <span
                      className="d-inline-flex align-items-center justify-content-center rounded"
                      style={{
                        width: 48,
                        height: 48,
                        background: 'rgba(59, 130, 246, 0.15)',
                      }}
                    >
                      <CIcon icon={c.icon} size="xl" style={{ color: 'var(--rd-accent)' }} />
                    </span>
                  </div>
                  <div className="small text-uppercase mb-1" style={{ color: 'var(--rd-muted)' }}>
                    {c.label}
                  </div>
                  <div className="fw-semibold small" style={{ color: 'var(--rd-text)' }}>
                    {c.value}
                  </div>
                </div>
              </a>
            </CCol>
          ))}
        </CRow>
        <div className="rd-cta-strip">
          <p className="mb-0 me-auto fw-medium" style={{ color: 'var(--rd-text)' }}>
            Let&apos;s work together on your next project
          </p>
          <CButton
            color="primary"
            className="text-white px-4"
            href="mailto:renugadevis.dev@gmail.com"
          >
            Get In Touch
          </CButton>
        </div>
      </CContainer>
    </section>
  )
}
