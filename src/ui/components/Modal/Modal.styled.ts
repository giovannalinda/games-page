import styled from 'styled-components/macro'
import { theme } from '../../../ui'
import banner from '../../../assets/modal.png'

export const Modal = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: 999;
background: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
`

export const Container = styled.div`
background: ${theme.colors.black};
background-image: url(${banner});
background-size: 100%;
background-repeat: no-repeat;
width: 60%;
height: 60%;
color: ${theme.colors.white};
border-radius: 4px;

button {
  color: ${theme.colors.blue[100]};
  display: flex;
  position: relative;
  align-items: center;
  top: 15px;
  right: calc(-100% + 352px);
}

img {
  height: 30px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

export const Content = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;

  fieldset {
    border: 0;
    margin: 5px 1px 5px 14px;
  }
  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }
`

export const Form = styled.form`
  button {
    font-size: 15px;
    color: ${theme.colors.white};
    background: ${theme.colors.blue};
    border-radius: 5px;
    height: 50px;
    width: 444px;
    border: 0;
    margin: 30px 1px 2px 14px;
    transition: 1s;
    :hover {
      opacity: 85%;
    }
  }
  a {
    color: ${theme.colors.white};
    margin: 30px 1px 2px 14px;
  }
`

export const Input = styled.input`
  width: 426px;
  height: 48px;
  background: ${theme.colors.white};
  border-radius: 4px;
  border: none;
  padding: 0 0 0 15px;
  outline: none;
  margin: 10px 0 9px 0;
  color: ${theme.colors.black};

  :focus {
    border: 1px solid ${theme.colors.blue}
  }
`

export const Password = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  input {
    height: 40px;
    width: 444px;
  }

  button {
    position: relative;
    right: 80px;
    bottom: 10px;
    height: 40px;
    width: 30px;
    background: none !important ;
    border: 0;
    transition: 1s;
    top: -15px;

    svg {
      color: ${theme.colors.blue};

      :hover {
        opacity: 85%;
      }
    }
  }
`
