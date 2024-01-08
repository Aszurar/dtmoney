import { FiGithub, FiLinkedin } from 'react-icons/fi'

import * as NavItem from '../NavItem'
import ShootingStarSVG from '../../assets/shooting-star.svg'

export function Footer() {
  return (
    <footer
      className={`flex items-center justify-center gap-6 bg-purple-400 px-8 
        py-4`}
    >
      <strong className="inline-block space-x-2 text-gray-200">
        Desenvolvido por
        <span className="ml-2 inline-block font-normal text-white">
          Lucas de Lima Martins de Souza.
        </span>
        <img src={ShootingStarSVG} alt="" className="inline-block h-5 w-5" />
      </strong>
      <nav className="flex items-center justify-center gap-2">
        <NavItem.Root asChild variant="outline" label="Acessar Github">
          <a
            href="https://github.com/Aszurar/to.do"
            target="_blank"
            className={`flex items-center justify-center text-xl transition-all`}
            aria-label="Acessar Github"
            rel="noreferrer"
          >
            <NavItem.Icon
              icon={FiGithub}
              className="text-gray-300 hover:text-white focus:text-white"
            />
          </a>
        </NavItem.Root>

        <NavItem.Root asChild variant="outline" label="Acessar Linkedin">
          <a
            href="https://www.linkedin.com/in/lucas-de-lima-azsura/"
            target="_blank"
            className={`flex items-center justify-center text-xl transition-all`}
            aria-label="Acessar Linkedin"
            rel="noreferrer"
          >
            <NavItem.Icon
              icon={FiLinkedin}
              className="text-gray-300 hover:text-white focus:text-white"
            />
          </a>
        </NavItem.Root>
      </nav>
    </footer>
  )
}
