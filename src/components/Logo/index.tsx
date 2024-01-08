import { FiDollarSign } from 'react-icons/fi'

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full 
      bg-green-400`}
      >
        <FiDollarSign className="text-7 text-white" />
      </div>
      <h1 className="text-2xl font-bold text-white">dt money</h1>
    </div>
  )
}
