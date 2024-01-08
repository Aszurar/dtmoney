import { FiCheck } from 'react-icons/fi'
import * as Select from '@radix-ui/react-select'

type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...rest }: SelectItemProps) {
  return (
    <Select.Item
      className={`flex items-center justify-between px-5 py-4 font-semibold 
      text-gray-700 focus:ring-2 focus:ring-purple-200 
      data-[highlighted]:bg-purple-50
      dark:text-white dark:data-[highlighted]:bg-zinc-800`}
      {...rest}
    >
      <Select.ItemText>{text}</Select.ItemText>
      <Select.ItemIndicator>
        <FiCheck className="text-base text-purple-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
