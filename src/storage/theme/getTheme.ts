import { ITheme, THEME } from '../../dto/theme'
import { DT_MONEY_THEME } from '../storageConfig'

export function getTheme() {
  const response = localStorage.getItem(DT_MONEY_THEME)

  const theme = response ? JSON.parse(response) : THEME.dark

  return theme as ITheme
}
