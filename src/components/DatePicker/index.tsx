import 'react-day-picker/dist/style.css'
import { useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import { FiCalendar } from 'react-icons/fi'
import { VariantProps, tv } from 'tailwind-variants'

import { SELECT_DATE_DEFAULT } from '../Header'

const datePicker = tv({
  slots: {
    button: `group w-full cursor-pointer border border-background-tertiary px-6 py-5
    bg-background-secondary text-left text-gray-700 font-medium flex rounded-md 
    items-center justify-between transition-all duration-400 
    focus-within:border-purple-300 focus-within:ring-2
    focus-within:ring-purple-300 hover:bg-white 
    `,
    icon: `ml-auto text-xl text-gray-500 group-hover:text-purple-300`,
  },
  variants: {
    variant: {
      true: {
        button: 'bg-white',
        icon: 'text-purple-300',
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

const css = `
.day-selected:not([disabled]) { 
  font-weight: bold; 
  border: 2px solid #885AFF;
  color: #885AFF;
  font-weight: 600;
}
.today {
  color: #ffffff !important;
  background-color: #885AFF;
  font-weight: 600;
}
`

export function DatePicker({
  variant,
  selectedDate,
  onDateChange,
}: Readonly<DateProps>) {
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const { icon, button } = datePicker({ variant: variant ?? isShowCalendar })

  const dateFormattedToCalendarPreview = format(
    selectedDate,
    "dd 'de' MMMM 'de' yyyy",
    { locale: ptBR },
  )

  let footer = <p className="text-gray-500">Por favor, selecione uma data.</p>

  if (dateFormattedToCalendarPreview) {
    footer = (
      <p className="text-gray-700">
        Você selecionou{' '}
        <span className="font-medium text-purple-500">
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
          className={`bottom-18 absolute right-0 z-10 rounded-md border-2 
        border-purple-300 bg-white shadow-md drop-shadow-md`}
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
            styles={{
              caption_label: {
                color: '#885AFF',
                textTransform: 'capitalize',
              },
              months: {
                justifyContent: 'end',
              },
              nav_icon: {
                color: '#885AFF',
              },
              day: {
                color: '#363F5F',
              },
            }}
          />
        </div>
      )}
    </div>
  )
}
