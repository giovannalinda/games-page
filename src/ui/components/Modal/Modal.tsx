import * as S from './Modal.styled'
import { ReactNode } from 'react'
import logo from '../../../assets/logo-battle.svg'

import { FiX } from 'react-icons/fi'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: Props) => {
  return (
    <S.Modal>
      <S.Container>
        <button onClick={onClose} style={{ background: 'none' }}><FiX size={20} /></button>
        <img src={logo} alt='logo' />
        <h1>Teste</h1>
        {children}
      </S.Container>
    </S.Modal>
  )
}

export default Modal
