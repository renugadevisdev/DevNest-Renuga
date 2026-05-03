import { CIcon } from '@coreui/icons-react'
import { cilArrowThickToTop } from '@coreui/icons'

export function ScrollToTopButton() {
  return (
    <button
      type="button"
      className="rd-scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <CIcon icon={cilArrowThickToTop} size="lg" />
    </button>
  )
}
