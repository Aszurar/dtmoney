import { FiX } from 'react-icons/fi'
import * as Dialog from '@radix-ui/react-dialog'

import { Logo } from '../Logo'
import { Button } from '../Button'
import { ThemeSwitch } from './ThemeSwitch'
import { NewTransactionForm } from './NewTransactionForm'
import { useState } from 'react'

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleCloseModal() {
    setIsNewTransactionModalOpen(false)
  }

  function handleOpenModal() {
    setIsNewTransactionModalOpen(true)
  }

  return (
    <header className="h-header bg-purple-400 px-6 pt-8">
      <div className="mx-auto flex max-w-app items-start justify-between">
        <Logo />
        <div className="phone-lg:gap-8 flex flex-col gap-3">
          <Dialog.Root open={isNewTransactionModalOpen}>
            <Dialog.Trigger asChild>
              <Button onClick={handleOpenModal}>Nova transação</Button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-gray-50">
                <Dialog.Content
                  className={`fixed bottom-0 flex w-full flex-col gap-2 
                    rounded-t-2xl bg-background-primary px-6 py-8
                    dark:bg-zinc-900 sm:bottom-auto sm:left-1/2 sm:top-1/2 
                    sm:mx-auto sm:my-0 sm:w-auto sm:max-w-xl sm:-translate-x-1/2 
                    sm:-translate-y-1/2 sm:gap-4 sm:rounded-lg sm:border-0.5 
                    sm:border-purple-300 sm:px-12 sm:py-16`}
                >
                  <Dialog.Close asChild className={`absolute right-2 top-2`}>
                    <Button
                      variant="ghost"
                      className="group"
                      onClick={handleCloseModal}
                    >
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

                  <NewTransactionForm onCloseModal={handleCloseModal} />
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
