import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  FiX,
  FiDollarSign,
  FiArrowUpCircle,
  FiArrowDownCircle,
} from 'react-icons/fi'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { Select } from '../Select'
import { SelectItem } from '../Select/SelectItem'
import { CATEGORIES } from '../../dto/categories'
import { DatePicker } from '../DatePicker'

import * as Input from '../Input'
import * as TransactionTypeButton from './TransactionTypeButton'
import { ThemeSwitch } from './ThemeSwitch'

type TransactionType = 'income' | 'outcome' | ''

export const SELECT_DATE_DEFAULT = new Date()

const FIELDS_VARIANTS = {
  filled: `filled`,
  empty: `empty`,
} as const

export function Header() {
  const [name, setName] = useState<string>('')
  const [value, setValue] = useState<number>(0)
  const [category, setCategory] = useState<string>('')
  const [type, setType] = useState<TransactionType>('')
  const [selected, setSelected] = useState<Date>(SELECT_DATE_DEFAULT)

  const selectOptions = CATEGORIES.map((category) => (
    <SelectItem key={category} text={category} value={category} />
  ))

  const inputValuePlaceholder = value > 0 ? value : '0,00'

  const incomeTransactionTypeVariant =
    type === 'income' ? 'incomeActive' : 'income'

  const outcomeTransactionTypeVariant =
    type === 'outcome' ? 'outcomeActive' : 'outcome'

  const inputNameVariant =
    name.trim().length > 0 ? FIELDS_VARIANTS.filled : FIELDS_VARIANTS.empty

  const inputValueVariant =
    value > 0 ? FIELDS_VARIANTS.filled : FIELDS_VARIANTS.empty

  const selectCategoryVariant =
    category.trim().length > 0 ? FIELDS_VARIANTS.filled : FIELDS_VARIANTS.empty

  const datePickerVariant = selected !== SELECT_DATE_DEFAULT

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }
  function handleChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(event.target.value))
  }

  function handleSelectType(type: TransactionType) {
    setType(type)
  }

  function handleChangeCategory(value: string) {
    setCategory(value)
  }

  return (
    <header className="h-header bg-purple-400 px-6 pt-8">
      <div className="mx-auto flex max-w-app items-start justify-between">
        <Logo />
        <div className="flex flex-col gap-8">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>Nova transação</Button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-gray-50">
                <Dialog.Content
                  className={`fixed left-1/2 top-1/2 mx-auto my-0 flex max-w-xl 
                 -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg
                 border-0.5 border-purple-300 bg-background-primary px-12 
                 py-16 dark:bg-zinc-900 `}
                >
                  <Dialog.Close asChild className={`absolute right-2 top-2`}>
                    <Button variant="ghost" className="group">
                      <FiX
                        className={`transition-all duration-400 
                      group-hover:text-purple-400 
                      dark:group-hover:text-purple-300`}
                      />
                    </Button>
                  </Dialog.Close>
                  <Dialog.Title
                    className={`text-2xl font-semibold text-gray-700
                    dark:text-white`}
                  >
                    Cadastrar transação
                  </Dialog.Title>
                  <Dialog.Description
                    className={`text-lg text-gray-500 
                    dark:text-gray-400`}
                  >
                    Preencha as informações abaixo para cadastrar uma nova
                    transação
                  </Dialog.Description>
                  <form className="flex flex-col gap-4">
                    <Input.Root variant={inputNameVariant}>
                      <Input.Control
                        autoComplete="on"
                        placeholder="Nome"
                        value={name}
                        onChange={handleChangeName}
                      />
                    </Input.Root>
                    <Input.Root variant={inputValueVariant}>
                      <Input.Icon
                        variant={inputValueVariant}
                        icon={FiDollarSign}
                      />
                      <Input.Control
                        type="number"
                        placeholder="0,00"
                        value={inputValuePlaceholder}
                        onChange={handleChangeNumber}
                      />
                    </Input.Root>

                    <div className="flex items-center justify-between gap-2">
                      <TransactionTypeButton.Root
                        type="button"
                        variant={incomeTransactionTypeVariant}
                        onClick={() => handleSelectType('income')}
                      >
                        <TransactionTypeButton.Icon
                          icon={FiArrowUpCircle}
                          variant={incomeTransactionTypeVariant}
                        />
                        Entrada
                      </TransactionTypeButton.Root>
                      <TransactionTypeButton.Root
                        type="button"
                        variant={outcomeTransactionTypeVariant}
                        onClick={() => handleSelectType('outcome')}
                      >
                        <TransactionTypeButton.Icon
                          icon={FiArrowDownCircle}
                          variant={outcomeTransactionTypeVariant}
                        />
                        Saída
                      </TransactionTypeButton.Root>
                    </div>
                    <Select
                      variant={selectCategoryVariant}
                      placeholder="Categoria"
                      value={category}
                      onValueChange={handleChangeCategory}
                    >
                      {selectOptions}
                    </Select>

                    <DatePicker
                      selectedDate={selected}
                      onDateChange={setSelected}
                      variant={datePickerVariant}
                    />

                    <Dialog.Close asChild className="mt-2">
                      <Button
                        type="submit"
                        variant="secondary"
                        className="w-full "
                      >
                        Cadastrar
                      </Button>
                    </Dialog.Close>
                  </form>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
