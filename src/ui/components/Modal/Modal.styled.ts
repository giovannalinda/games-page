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
