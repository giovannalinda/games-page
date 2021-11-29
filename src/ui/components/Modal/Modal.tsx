import * as S from './Modal.styled'
import { ReactNode, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { FiEye, FiX } from 'react-icons/fi'

type FormData = {
  email: string;
  password: string;
}

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: Props) => {
  const navigate = useNavigate()

  const [textPass, setTextPass] = useState(true)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({ email, password }: FormData) {
    const submit = {
      email,
      password,
    }
    reset()

    navigate('/', { replace: true })

    console.log(submit)
  }

  return (
    <S.Modal>
      <S.Container>
        <S.Content>
          <button onClick={onClose} style={{ background: 'none' }}><FiX size={20} /></button>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <label htmlFor='headline'>E-mail</label>
              <S.Input
                id='headline'
                placeholder='Seu melhor email'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email é obrigatório',
                  },
                })}
              />
              <span>{errors.email?.message}</span>
            </fieldset>
            <fieldset>
              <label htmlFor='text'>Senha</label>
              <S.Password>
                <S.Input
                  id='text'
                  placeholder='Sua melhor senha'
                  type={textPass ? 'password' : 'text'}
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Senha é obrigatória',
                    },
                  })}
                />
                <span>
                  {errors.password?.message}
                </span>
                <button onClick={() => setTextPass(!textPass)} type='button'><FiEye /></button>
              </S.Password>
            </fieldset>
            <button type='submit'>Conectar-se</button>
          </S.Form>
          {children}
        </S.Content>
      </S.Container>
    </S.Modal>
  )
}

export default Modal
