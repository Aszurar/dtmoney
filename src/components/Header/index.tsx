import { FiDollarSign } from "react-icons/fi"


export function Header() {
  return (
    <header className="h-header pt-8 bg-purple-500 px-6">
      <div className="flex justify-between max-w-app mx-auto">
        <div className="flex gap-4 items-center">
          <div className=" flex h-10 w-10 bg-green-400 rounded-full items-center justify-center">
            <FiDollarSign className="text-7 text-white" />
          </div>
          <h1 className="font-bold text-white text-2xl">dt money</h1>
        </div>
        <button className=" text-white rounded-md font-semibold py-3 px-8 drop-shadow-md shadow-md bg-purple-400  transition-all duration-[400ms] hover:cursor-pointer hover:bg-purple-300 hover:drop-shadow-2xl hover:shadow-lg"
        >Nova transação</button>
      </div>
    </header>
  )
}