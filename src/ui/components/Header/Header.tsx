import image from '../../../assets/logo-blizzard.svg'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as S from './Header.styled'

export function Header () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Nav>
      <header>
        <img src={image} alt='logo' />
        <ul>
          <li><Link to=''>Jogos</Link></li>
          <li><Link to=''>Esportes</Link></li>
          <li><Link to=''>Loja</Link></li>
          <li><Link to=''>Notícias</Link></li>
          <li><Link to=''>Suporte</Link></li>
          <button onClick={() => setIsOpen(true)}>Logar</button>
          {isOpen ? <Modal onClose={() => setIsOpen(false)} /> : null}
        </ul>
      </header>
    </S.Nav>
  )
}
