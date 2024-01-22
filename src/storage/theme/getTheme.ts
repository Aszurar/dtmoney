import { ITheme, THEME } from '../../dto/theme'
import { APP_THEME } from '../storageConfig'

export function getTheme() {
  const response = localStorage.getItem(APP_THEME)

  const theme = response ? JSON.parse(response) : THEME.dark

  return theme as ITheme
}
