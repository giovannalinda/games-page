import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Game } from '../../types'
import { FaApple } from 'react-icons/fa'
import { FiArrowUpCircle } from 'react-icons/fi'
import { theme } from '../../ui'

import image from '../../assets/logo-blizzard.svg'
import bannerhome from '../../assets/header.png'
import platforms from '../../assets/platforms.svg'
import footer from '../../assets/footer.png'

import * as S from './Home.styled'

export function Home () {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    api
      .get<Game[]>('/games')
      .then((response) => {
        const previewGames = response.data.slice(0, 11)
        setGames(previewGames)
      })
      .catch((err) => {
        console.error('deu erro!' + err)
      })
  }, [])

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

      <S.ContainerMain>
        <p>GAMES</p>
        <h2>Jogos exclusivos</h2>
        <img src={platforms} alt='platforms' />
        <S.ContentMain>
          <ul>
            {games.map((game) => (
              <li key={game.id}>
                <img src={game.thumbnail} alt={game.title} />
                <span>{game.title}</span>
                <p>{game.genre}</p>
              </li>
            ))}
          </ul>
          <button><img src={image} alt='logo' />Ver todos jogos</button>
        </S.ContentMain>
      </S.ContainerMain>

      <S.Footer>
        <img src={footer} alt='footer' />
        <ul>
          <h2>Baixe agora</h2>
          <li><FiArrowUpCircle style={{ color: `${theme.colors.blue[100]}` }} />Seus jogos em um só lugar</li>
          <li><FiArrowUpCircle style={{ color: `${theme.colors.blue[100]}` }} />Conecte-se aos seus amigos</li>
          <li><FiArrowUpCircle style={{ color: `${theme.colors.blue[100]}` }} />Compre jogos e itens digitais</li>
          <button><FaApple size={20} />Baixar para o MacOS</button>
        </ul>
      </S.Footer>
    </S.Container>

  )
}
