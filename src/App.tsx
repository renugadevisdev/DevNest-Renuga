import { ThemeProvider } from './ThemeContext'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { PortfolioFooter } from './components/PortfolioFooter'
import { PortfolioHeader } from './components/PortfolioHeader'
import { ProjectsSection } from './components/ProjectsSection'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { SkillsSection } from './components/SkillsSection'

function App() {
  return (
    <ThemeProvider>
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
      <ScrollToTopButton />
    </ThemeProvider>
  )
}

export default App
