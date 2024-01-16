import CurrencyFormat from 'react-currency-format'

type ControlProps = {
  value: number
  onChange: (value: number) => void
}

export function Monetary({ value, onChange }: ControlProps) {
  return (
    <CurrencyFormat
      className="w-full  bg-transparent font-medium text-gray-700 
          outline-none placeholder:font-normal placeholder:text-gray-500 
          focus-visible:ring-0 dark:text-white 
          dark:placeholder:text-gray-400"
      decimalScale={2}
      fixedDecimalScale
      thousandSeparator="."
      decimalSeparator=","
      placeholder="0,00"
      value={value}
      onValueChange={({ floatValue }) => onChange(floatValue)}
    />
  )
}
