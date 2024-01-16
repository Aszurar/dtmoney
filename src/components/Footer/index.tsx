import { FiGithub, FiLinkedin } from 'react-icons/fi'

import * as NavItem from '../NavItem'
import ShootingStarSVG from '../../assets/shooting-star.svg'
import { useResponsiveness } from '../../hook/useResponsiveness'

export function Footer() {
  const { isMobile } = useResponsiveness()

  const author = isMobile ? 'Lucas de Lima' : 'Lucas de Lima Martins de Souza'

  return (
    <footer
      className={`flex items-center justify-center gap-2 bg-purple-400 px-8 
        py-4 phone-lg:gap-4`}
    >
      <strong className="inline-block space-x-2  text-gray-200">
        Desenvolvido por
        <span className="ml-2 inline-block font-normal  text-white">
          {author}
        </span>
        <img src={ShootingStarSVG} alt="" className="inline-block h-5 w-5" />
      </strong>
      <nav className="flex items-center justify-center gap-2">
        <NavItem.Root asChild variant="outline" label="Acessar Github">
          <a
            href="https://github.com/Aszurar/dtmoney"
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
