import { Link } from 'react-router-dom'

import image from '../../assets/logo-blizzard.svg'
import bannerhome from '../../assets/header.png'

import * as S from './Home.styled'

export function Home () {
  return (
    <S.Container>
      <header>
        <S.Nav>
          <img src={image} alt='logo' />
          <ul>
            <li><Link to=''>Jogos</Link></li>
            <li><Link to=''>Esportes</Link></li>
            <li><Link to=''>Loja</Link></li>
            <li><Link to=''>Notícias</Link></li>
            <li><Link to=''>Suporte</Link></li>
            <button>Logar</button>
          </ul>
        </S.Nav>
      </header>
      <S.ContentHeader>
        <img src={bannerhome} alt='banner' />
        <h1>Retorne à escuridão com o game Diablo IV</h1>
        <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
        <Link to=''>Jogue agora</Link>
      </S.ContentHeader>
    </S.Container>
  )
}
