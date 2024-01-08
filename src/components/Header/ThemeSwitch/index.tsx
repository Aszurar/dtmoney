import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../../hook/useTheme'

const SPRING_ANIMATION = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

export function ThemeSwitch() {
  const { isDarkMode, handleToggleTheme } = useTheme()

  const lightModeIcon = {
    icon: FiSun,
    label: 'Troca para tema Escuro',
  }

  const darkModeIcon = {
    icon: FiMoon,
    label: 'Trocar para tema Claro',
  }

  const { icon: Icon, label } = isDarkMode ? darkModeIcon : lightModeIcon

  return (
    <button aria-label={label} onClick={handleToggleTheme} className="self-end">
      <div
        data-theme={isDarkMode}
        className={`rounded-switch phone-lg:h-10 phone-lg:w-20 phone-lg:p-2 flex 
          h-8 w-16 items-center bg-gray-25 p-1 shadow drop-shadow-sm 
          focus:shadow-purple-200 data-[theme=true]:justify-end`}
      >
        <motion.div
          className={`phone-lg:h-8 phone-lg:w-8 flex h-7 w-7 cursor-pointer 
            items-center justify-center rounded-full bg-white
            text-purple-300 dark:bg-zinc-900 `}
          layout
          transition={SPRING_ANIMATION}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
      </div>
    </button>
  )
}
