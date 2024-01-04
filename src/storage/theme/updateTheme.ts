import { ITheme } from '../../dto/theme'
import { DT_MONEY_THEME } from '../storageConfig'

export function updateTheme(theme: ITheme) {
  localStorage.setItem(DT_MONEY_THEME, JSON.stringify(theme))
}
