import { ITheme } from '../../dto/theme'
import { APP_THEME } from '../storageConfig'

export function updateTheme(theme: ITheme) {
  localStorage.setItem(APP_THEME, JSON.stringify(theme))
}
