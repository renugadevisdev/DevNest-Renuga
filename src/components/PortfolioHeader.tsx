import { CIcon } from '@coreui/icons-react'
import {
  cilList,
  cilMoon,
  cilSun,
} from '@coreui/icons'
import {
  CButton,
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import { useState } from 'react'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'
import { useTheme } from '../ThemeContext'

const links: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function PortfolioHeader() {
  const [visible, setVisible] = useState(false)
  const { isLight, toggleTheme } = useTheme()
  const { active } = useActiveSection()

  return (
    <CNavbar
      expand="lg"
      placement="sticky-top"
      className="rd-navbar shadow-sm"
    >
      <CContainer fluid className="px-3 px-lg-4">
        <CNavbarBrand href="#home" className="d-flex align-items-center gap-2">
          <span
            className="fw-bold text-white rounded px-2 py-1"
            style={{ background: 'var(--rd-accent)', fontSize: '0.85rem' }}
          >
            RD
          </span>
          <span className="text-body fw-semibold" style={{ color: 'var(--rd-text)' }}>
            Renuga Dinesh
          </span>
        </CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          onClick={() => setVisible((v) => !v)}
        >
          <CIcon icon={cilList} size="lg" />
        </CNavbarToggler>
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="mx-auto my-2 my-lg-0 flex-wrap justify-content-center gap-lg-1">
            {links.map(({ id, label }) => (
              <CNavItem key={id}>
                <CNavLink
                  href={`#${id}`}
                  className={`rd-nav-link px-3 ${active === id ? 'active' : ''}`}
                  onClick={() => setVisible(false)}
                >
                  {label}
                </CNavLink>
              </CNavItem>
            ))}
          </CNavbarNav>
          <div className="d-flex flex-row align-items-center gap-2 ms-lg-2">
            <CButton
              type="button"
              variant="ghost"
              size="sm"
              className="p-2 border-0"
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              onClick={toggleTheme}
            >
              <CIcon icon={isLight ? cilMoon : cilSun} size="lg" style={{ color: 'var(--rd-accent)' }} />
            </CButton>
            <CButton
              color="primary"
              className="text-white fw-semibold"
              size="sm"
              href="/Renuga_Devi_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              title="Renuga_Devi_Resume.pdf"
            >
              Download CV
            </CButton>
          </div>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}
