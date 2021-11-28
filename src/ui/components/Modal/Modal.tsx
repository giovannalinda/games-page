import * as S from './Modal.styled'
import { ReactNode } from 'react'

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
        <h1>Teste</h1>
        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Modal>
  )
}

export default Modal
