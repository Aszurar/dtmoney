import 'react-day-picker/dist/style.css'
import { useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DayPicker, Styles } from 'react-day-picker'
import { FiCalendar } from 'react-icons/fi'
import { VariantProps, tv } from 'tailwind-variants'
import { SELECT_DATE_DEFAULT } from '../../dto/transactions'
import { useTheme } from '../../hook/useTheme'

const datePicker = tv({
  slots: {
    button: `group w-full px-6 py-5 cursor-pointer border 
      border-background-tertiary bg-background-secondary text-left text-gray-700 
      font-medium flex rounded-md items-center justify-between transition-all 
      duration-400 focus-within:border-purple-300 focus-within:ring-2
      focus-within:ring-purple-300 hover:bg-white 
      dark:bg-zinc-800 dark:border-zinc-500 dark:text-white dark:hover:bg-zinc-950
      dark:focus-within:border-purple-200 focus-within:ring-purple-200
    `,
    icon: `ml-auto text-xl text-gray-500 group-hover:text-purple-300
      dark:text-gray-400 dark:group-hover:text-gray-400`,
  },
  variants: {
    variant: {
      true: {
        button: 'bg-white dark:bg-zinc-950',
        icon: 'text-purple-300 dark:text-purple-200',
      },
      false: {
        button: '',
        icon: '',
      },
    },
  },
  defaultVariants: {
    variant: false,
  },
})

type DateProps = VariantProps<typeof datePicker> & {
  selectedDate: Date
  onDateChange: (date: Date) => void
  isCloseCalendar?: boolean
}

const WHITE = '#FFFFFF'
const PURPLE = {
  300: '#885AFF',
  200: '#E9D5FF',
}
const GRAY = {
  700: '#363F5F',
}
const ZINC = {
  700: '#3F3F46',
  200: '#E4E4E7',
}

const CSSThemeStyles = {
  light: {
    daySelected: {
      borderColor: PURPLE[300],
      color: PURPLE[300],
      hover: {
        backgroundColor: ZINC[200],
        color: GRAY[700],
      },
    },
    today: {
      backgroundColor: PURPLE[300],
      color: WHITE,
      hover: {
        color: GRAY[700],
        borderColor: PURPLE[300],
      },
    },
  },

  dark: {
    daySelected: {
      borderColor: PURPLE[200],
      color: PURPLE[200],
      hover: {
        backgroundColor: ZINC[700],
        color: WHITE,
      },
    },
    today: {
      backgroundColor: PURPLE[200],
      color: GRAY[700],
      hover: {
        color: WHITE,
        borderColor: PURPLE[200],
      },
    },
  },
}

const datePickerThemeStyles = {
  light: {
    caption_label: {
      color: PURPLE[300],
      textTransform: 'capitalize',
    },
    months: {
      justifyContent: 'end',
    },
    nav_icon: {
      color: PURPLE[300],
    },
    day: {
      color: GRAY[700],
    },
  },
  dark: {
    caption_label: {
      color: PURPLE[200],
      textTransform: 'capitalize',
    },
    months: {
      justifyContent: 'end',
    },
    nav_icon: {
      color: PURPLE[200],
    },
    day: {
      color: WHITE,
    },
  },
}

export function DatePicker({
  variant,
  selectedDate,
  onDateChange,
}: Readonly<DateProps>) {
  const { isDarkMode } = useTheme()
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const { icon, button } = datePicker({ variant: variant ?? isShowCalendar })

  const theme = isDarkMode ? 'dark' : 'light'

  const dateFormattedToCalendarPreview = format(
    selectedDate,
    "dd 'de' MMMM 'de' yyyy",
    { locale: ptBR },
  )

  const datePickerTheme = datePickerThemeStyles[theme] as Styles
  const CSSTheme = CSSThemeStyles[theme]

  const css = `
  .day-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid ${CSSTheme.daySelected.borderColor};
    color: ${CSSTheme.daySelected.color};
    font-weight: 600;
  }
  .today {
    color: ${CSSTheme.today.color} !important;
    background-color: ${CSSTheme.today.backgroundColor};
    font-weight: 600;
  }
  .today:hover {
    color: ${CSSTheme.today.hover.color} !important;
    border: 2px solid ${CSSTheme.today.hover.borderColor};
  }

  .rdp-button:hover:not([disabled]):not(.rdp-day_selected):hover {
    background-color: ${CSSTheme.daySelected.hover.backgroundColor};
    color: ${CSSTheme.daySelected.hover.color};
    font-weight: 600;
  }

  .rdp-button:focus-visible:not([disabled]):not(.rdp-day_selected):focus-visible {
    background-color: ${CSSTheme.daySelected.hover.backgroundColor};
    color: ${CSSTheme.daySelected.hover.color};
    font-weight: 600;
    border: 0;
  }
  .today:focus-visible {
    background-color: ${CSSTheme.today.hover.borderColor} !important;
  }
  .today:focus-visible:hover {
    color: ${CSSTheme.daySelected.hover.backgroundColor} !important;
    opacity: 0.8;
  }
  `

  let footer = (
    <p className="text-gray-500 dark:text-gray-400">
      Por favor, selecione uma data.
    </p>
  )

  if (dateFormattedToCalendarPreview) {
    footer = (
      <p className="text-gray-700 dark:text-white">
        Você selecionou{' '}
        <span className="font-medium text-purple-500 dark:text-purple-200">
          {dateFormattedToCalendarPreview}
        </span>
        .
      </p>
    )
  }

  const dateFormattedToInput = format(selectedDate, 'dd/MM/yyyy', {
    locale: ptBR,
  })

  function handleToggleCalendar() {
    setIsShowCalendar(!isShowCalendar)
  }

  return (
    <div className="relative">
      <button
        id="calendar-button"
        type="button"
        className={button()}
        onClick={handleToggleCalendar}
      >
        {dateFormattedToInput}
        <FiCalendar id="calendar-button-icon" className={icon()} />
      </button>

      {isShowCalendar && (
        <div
          className={`absolute bottom-18 right-0 z-10 rounded-md border-2 
        border-purple-300 bg-white shadow-md drop-shadow-md 
        dark:border-purple-200 dark:bg-zinc-950`}
        >
          <style>{css}</style>
          <DayPicker
            mode="single"
            locale={ptBR}
            selected={selectedDate}
            onSelect={(date: Date | undefined) =>
              onDateChange(date ?? SELECT_DATE_DEFAULT)
            }
            footer={footer}
            modifiersClassNames={{
              today: 'today',
              selected: 'day-selected',
            }}
            styles={datePickerTheme}
          />
        </div>
      )}
    </div>
  )
}
