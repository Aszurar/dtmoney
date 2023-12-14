import { FiGithub, FiLinkedin } from 'react-icons/fi'

import ShootingStarSVG from '../../assets/shooting-star.svg'
import * as NavItem from '../NavItem'

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 bg-purple-400 px-8 py-4">
      <strong className="inline-block space-x-2 text-gray-200">
        Desenvolvido por
        <span className=" ml-2 inline-block font-normal text-white ">
          Lucas de Lima Martins de Souza.
        </span>
        <img src={ShootingStarSVG} alt="" className=" inline-block h-5 w-5" />
      </strong>
      <nav className=" flex items-center justify-center gap-2">
        <NavItem.Root label="Acessar Github">
          <a
            href="https://github.com/Aszurar/to.do"
            target="_blank"
            className="flex items-center justify-center text-xl text-gray-300 transition-all  hover:text-white focus:text-white"
            aria-label="Acessar Github"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </NavItem.Root>

        <NavItem.Root label="Acessar Linkedin">
          <a
            href="https://www.linkedin.com/in/lucas-de-lima-azsura/"
            target="_blank"
            className="flex items-center justify-center text-xl text-gray-300 transition-all  hover:text-white focus:text-white"
            aria-label="Acessar Linkedin"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </NavItem.Root>
      </nav>
    </footer>
  )
}
