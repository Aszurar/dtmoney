import * as Dialog from '@radix-ui/react-dialog'
import { FiX } from 'react-icons/fi'

import * as Input from '../Input'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { Select } from '../Select'
import { SelectItem } from '../Select/SelectItem'
import { CATEGORIES } from '../../dto/categories'

export function Header() {
  const selectOptions = CATEGORIES.map((category) => (
    <SelectItem key={category} text={category} value={category} />
  ))

  return (
    <header className="h-header bg-purple-400 px-6 pt-8">
      <div className="mx-auto  flex max-w-app justify-between">
        <Logo />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Nova transação</Button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-gray-50">
              <Dialog.Content
                className={`fixed left-1/2 top-1/2 mx-auto my-0 flex max-w-xl 
                 -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg
                 border-0.5 border-purple-500 bg-white px-12 py-16 `}
              >
                <Dialog.Close asChild className={`absolute right-2 top-2`}>
                  <Button variant="ghost" className="group">
                    <FiX
                      className={`transition-all duration-400 
                      group-hover:text-purple-400`}
                    />
                  </Button>
                </Dialog.Close>
                <Dialog.Title className="text-2xl font-semibold text-gray-700">
                  Cadastrar transação
                </Dialog.Title>
                <Dialog.Description className="text-lg text-gray-500">
                  Preencha as informações abaixo para cadastrar uma nova
                  transação
                </Dialog.Description>
                <form className="flex flex-col gap-4">
                  <Input.Root>
                    <Input.Control placeholder="Nome" />
                  </Input.Root>
                  <Input.Root>
                    <Input.Control placeholder="Preço" />
                  </Input.Root>

                  <Select placeholder="Categoria">{selectOptions}</Select>

                  <Input.Root>
                    <Input.Control type="date" placeholder="Data" />
                  </Input.Root>

                  <Dialog.Close asChild className="mt-2">
                    <Button
                      type="submit"
                      variant="secondary"
                      className="w-full"
                    >
                      Cadastrar
                    </Button>
                  </Dialog.Close>
                </form>
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}
