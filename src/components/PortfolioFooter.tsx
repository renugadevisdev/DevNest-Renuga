import { CFooter, CContainer } from '@coreui/react'

export function PortfolioFooter() {
  return (
    <CFooter className="border-top mt-5 py-4 position-relative" style={{ background: 'var(--rd-bg)', borderColor: 'var(--rd-border) !important' }}>
      <CContainer fluid className="px-3 px-lg-4 text-center">
        <p className="mb-0 small" style={{ color: 'var(--rd-muted)' }}>
          © 2026 Renuga Dinesh. All rights reserved.
        </p>
      </CContainer>
    </CFooter>
  )
}
