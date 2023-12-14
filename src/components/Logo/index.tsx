import { FiDollarSign } from "react-icons/fi"

export function Logo(){
  return(
  <div className="flex gap-4 items-center">
      <div className={`flex h-10 w-10 bg-green-400 rounded-full items-center 
      justify-center`}>
        <FiDollarSign className="text-7 text-white" />
      </div>
      <h1 className="font-bold text-white text-2xl">dt money</h1>
  </div>
  )
}