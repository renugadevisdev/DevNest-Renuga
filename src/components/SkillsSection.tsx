import { CIcon } from '@coreui/icons-react'
import {
  cibCss3,
  cibGit,
  cibHtml5,
  cibJavascript,
  cibNodeJs,
  cibReact,
  cibTypescript,
} from '@coreui/icons'
import { cilCode } from '@coreui/icons'
import { CCol, CContainer, CCard, CCardBody, CRow } from '@coreui/react'

const skills = [
  { name: 'React', icon: cibReact },
  { name: 'JavaScript', icon: cibJavascript },
  { name: 'TypeScript', icon: cibTypescript },
  { name: 'HTML5', icon: cibHtml5 },
  { name: 'CSS3', icon: cibCss3 },
  { name: 'Tailwind', icon: cilCode },
  { name: 'Node.js', icon: cibNodeJs },
  { name: 'Git', icon: cibGit },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-5">
      <CContainer>
        <h2 className="h2 rd-section-title">Skills</h2>
        <CRow className="g-3 g-md-4">
          {skills.map((s) => (
            <CCol key={s.name} xs={6} sm={4} md={3} lg={2}>
              <CCard
                className="text-center h-100 rd-surface-card shadow-sm border-0"
              >
                <CCardBody className="py-4 d-flex flex-column align-items-center">
                  <div className="mb-2">
                    <CIcon
                      icon={s.icon}
                      size="3xl"
                      className="text-primary"
                      style={{ color: 'var(--rd-accent) !important' }}
                    />
                  </div>
                  <div
                    className="small fw-semibold"
                    style={{ color: 'var(--rd-text)' }}
                  >
                    {s.name}
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </section>
  )
}
