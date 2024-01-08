import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FiDollarSign,
  FiArrowUpCircle,
  FiArrowDownCircle,
} from 'react-icons/fi'

import { Select } from '../../Select'
import * as Input from '../../Input'
import { DatePicker } from '../../DatePicker'
import { SelectItem } from '../../Select/SelectItem'
import * as TransactionTypeButton from '../TransactionTypeButton'

import { CATEGORIES, CategoriesType } from '../../../dto/categories'
import {
  TransactionType,
  TRANSACTION_TYPE,
  SELECT_DATE_DEFAULT,
  TRANSACTION_DEFAULT_FIELDS_VALUES,
  ITransactions,
} from '../../../dto/transactions'
import { Button } from '../../Button'
import { useTransactions } from '../../../hook/useTransactions'

const newTransactionFormValidation = zod.object({
  description: zod.string().min(3, 'É necessário uma descrição válida!'),
  price: zod.number().positive('É necessário um valor monetário válido!'),
  type: zod.enum(['income', 'outcome'], {
    required_error: 'É necessário selecionar o tipo da transação!',
  }),
  category: zod.enum(CATEGORIES, {
    required_error: 'É necessário selecionar uma categoria!',
  }),
  date: zod.date({
    required_error: 'É necessário selecionar uma data!',
  }),
})

type FormDataProps = zod.infer<typeof newTransactionFormValidation>

const FIELDS_VARIANTS = {
  filled: `filled`,
  empty: `empty`,
} as const

type NewTransactionFormProps = {
  onCloseModal: () => void
}

// TODO
// Criar tópico sobre o bug no período das datas e sobre a forma de capturar a largura da tela para mudar o design
// Aplicar melhoria de acessibilidade
// Criar Readme
// Criar branch que usa o localStorage para armazenar as transações e realizar as operações: branch prod
// json server ficará somente na branch de dev
// Anotar sobre o uso do .reducer que fiz para calcular o total de entradas e saídas.
// Anotar toda lógica do useReducer feito aqui
// Anotar a validação feita aqui e sobre como mandar mensagem de erro de select e botões de selecionar
// Anotar sobre esse formulário
// anotar sobre forma de saber a largura da tela em responsividade e como criar novas classes de responsividade

export function NewTransactionForm({
  onCloseModal,
}: Readonly<NewTransactionFormProps>) {
  const { handleAddNewTransaction } = useTransactions()

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<FormDataProps>({
    defaultValues: TRANSACTION_DEFAULT_FIELDS_VALUES,
    resolver: zodResolver(newTransactionFormValidation),
  })

  const type = watch('type')
  const price = watch('price')
  const date = watch('date')
  const category = watch('category')
  const description = watch('description')

  const selectOptions = CATEGORIES.map((category) => (
    <SelectItem key={category} text={category} value={category} />
  ))

  const incomeTransactionTypeVariant =
    type === TRANSACTION_TYPE.income ? 'incomeActive' : TRANSACTION_TYPE.income

  const outcomeTransactionTypeVariant =
    type === TRANSACTION_TYPE.outcome
      ? 'outcomeActive'
      : TRANSACTION_TYPE.outcome

  const inputDescriptionVariant =
    description.trim().length > 0
      ? FIELDS_VARIANTS.filled
      : FIELDS_VARIANTS.empty

  const inputPriceVariant =
    price > 0 ? FIELDS_VARIANTS.filled : FIELDS_VARIANTS.empty

  const selectCategoryVariant = category
    ? FIELDS_VARIANTS.filled
    : FIELDS_VARIANTS.empty

  const datePickerVariant = date !== SELECT_DATE_DEFAULT

  function handleSelectType(type: TransactionType) {
    setValue('type', type)
  }

  function handleChangeCategory(value: CategoriesType) {
    setValue('category', value)
  }

  function handleAddNewDate(date: Date) {
    setValue('date', date)
  }

  function handleCreateNewTransaction(data: FormDataProps) {
    console.log(data)

    const newTransaction: ITransactions = {
      ...data,
      id: crypto.randomUUID(),
    }

    handleAddNewTransaction(newTransaction)
    reset()
    onCloseModal()
  }

  return (
    <form
      className="flex flex-col gap-3 sm:gap-4"
      onSubmit={handleSubmit(handleCreateNewTransaction)}
    >
      <div>
        <Input.Root variant={inputDescriptionVariant}>
          <Input.Control
            autoComplete="on"
            placeholder="Nome"
            {...register('description')}
          />
        </Input.Root>
        <Input.ErrorMessage message={errors.description?.message} />
      </div>
      <div>
        <Input.Root variant={inputPriceVariant}>
          <Input.Icon variant={inputPriceVariant} icon={FiDollarSign} />
          <Input.Control
            type="number"
            placeholder="0,00"
            {...register('price', { valueAsNumber: true })}
          />
        </Input.Root>
        <Input.ErrorMessage message={errors.price?.message} />
      </div>
      <div>
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
        <Input.ErrorMessage message={errors.type?.message} />
      </div>

      <div>
        <Select
          variant={selectCategoryVariant}
          placeholder="Categoria"
          value={category}
          onValueChange={handleChangeCategory}
        >
          {selectOptions}
        </Select>

        <Input.ErrorMessage message={errors.category?.message} />
      </div>
      <div>
        <DatePicker
          selectedDate={date}
          onDateChange={handleAddNewDate}
          variant={datePickerVariant}
        />

        <Input.ErrorMessage message={errors.date?.message} />
      </div>

      <Button type="submit" variant="secondary" className="w-full">
        Cadastrar
      </Button>
    </form>
  )
}
