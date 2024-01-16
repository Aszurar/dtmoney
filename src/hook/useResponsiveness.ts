import { useContext } from 'react'
import { ResponsivenessContext } from '../context/responsiveness'

export function useResponsiveness() {
  const context = useContext(ResponsivenessContext)

  if (!context) {
    throw new Error(
      'useResponsiveness must be used within a ResponsivenessProvider',
    )
  }
  return context
}
