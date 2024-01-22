import React, { createContext, useEffect, useMemo, useState } from 'react'

interface ResponsivenessContextProps {
  isMobile: boolean
}

interface ResponsivenessProviderProps {
  children: React.ReactNode
}

const ResponsivenessContext = createContext({} as ResponsivenessContextProps)

function ResponsivenessProvider({
  children,
}: Readonly<ResponsivenessProviderProps>) {
  const [currentBrowserWidth, setCurrentBrowserWidth] = useState(
    window.innerWidth,
  )
  const isMobile = currentBrowserWidth < 640

  function onUpdateCurrentBrowserWidth() {
    setCurrentBrowserWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onUpdateCurrentBrowserWidth)
    return () => {
      window.removeEventListener('resize', onUpdateCurrentBrowserWidth)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const contextValue = useMemo(() => ({ isMobile }), [isMobile])

  return (
    <ResponsivenessContext.Provider value={contextValue}>
      {children}
    </ResponsivenessContext.Provider>
  )
}

export { ResponsivenessProvider, ResponsivenessContext }
