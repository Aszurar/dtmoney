import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getTheme } from '../../storage/theme/getTheme'
import { THEME } from '../../dto/theme'
import { updateTheme } from '../../storage/theme/updateTheme'

interface ThemeContextProps {
  isDarkMode: boolean
  handleToggleTheme: () => void
}

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as ThemeContextProps)

function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
  const isTheSystemThemeDarkMode = systemTheme.matches // return true if the system theme is dark mode
  const isTheLocalStorageThemeDarkMode = getTheme() === THEME.dark
  const isDefaultThemeDarkMode =
    isTheSystemThemeDarkMode || isTheLocalStorageThemeDarkMode

  const [isDarkMode, setIsDarkMode] = useState(isDefaultThemeDarkMode)

  const handleToggleTheme = useCallback(() => {
    setIsDarkMode((prevState) => !prevState)
  }, [])

  useEffect(() => {
    const rootElement = window.document.documentElement

    if (isDarkMode) {
      rootElement.classList.add(THEME.dark)
      updateTheme(THEME.dark)
    } else {
      rootElement.classList.remove(THEME.dark)
      updateTheme(THEME.light)
    }
  }, [isDarkMode])

  const contextValue = useMemo(
    () => ({ isDarkMode, handleToggleTheme }),
    [isDarkMode, handleToggleTheme],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
