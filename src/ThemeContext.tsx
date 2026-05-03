import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type ThemeContextValue = {
  isLight: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('theme-light', isLight)
    document.documentElement.setAttribute('data-coreui-theme', isLight ? 'light' : 'dark')
  }, [isLight])

  const toggleTheme = useCallback(() => {
    setIsLight((v) => !v)
  }, [])

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
