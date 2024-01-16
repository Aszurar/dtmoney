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
        className={` flex h-10 w-20 items-center rounded-switch bg-gray-25 p-1.5 
          shadow drop-shadow-sm data-[theme=true]:justify-end 
          focus:shadow-purple-200`}
      >
        <motion.div
          className={`flex h-8 w-8 cursor-pointer items-center justify-center 
            rounded-full bg-white text-purple-300 dark:bg-zinc-950`}
          layout
          transition={SPRING_ANIMATION}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
      </div>
    </button>
  )
}
