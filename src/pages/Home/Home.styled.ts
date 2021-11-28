import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const Container = styled.div`
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background: ${theme.colors.black};
    width: 100%;
  }
`

export const Nav = styled.nav`
  ul {
    margin: -70px 0 38px 290px;
  }

  li {
    display: inline-block;
    text-align: left;
    margin: 0 0 0 70px;
  }

  a {
    color: ${theme.colors.white};
    transition: 1s;


    :hover {
      color: ${theme.colors.blue[100]};
    }
  }

  img {
    display: flex;
    width: 100px;
    height: 100px;
    margin-left: 190px;
  }

  button {
    background: ${theme.colors.blue[100]};
    border: 0;
    color: ${theme.colors.white};
    width: 115px;
    height: 41px;
    border-radius: 4px;
    transition: 1s;
    margin-left: 300px;

    :hover {
      opacity: 85%;
    }
  }
`

export const ContentHeader = styled.div`
  img {
    width: 100%;
    height: 700px;
    margin-top: 30px;
  }

  h1 {
    margin-top: -450px;
    padding: 0 190px;
    font-size: 64px;
    max-width: 970px;
    line-height: 110.2%;
  }

  p {
    padding: 16px 0 32px 190px;
    font-size: 18px;
  }

  a {
    background: ${theme.colors.blue[100]};
    border: 0;
    color: ${theme.colors.white};
    padding: 15px 45px 15px 45px;
    border-radius: 4px;
    transition: 1s;
    margin-left: 190px;

    :hover {
      opacity: 85%;
    }
  }
`

export const ContainerMain = styled.div`
  margin: 180px 200px 330px 190px;
  p {
    padding: 0 0 30px 0;
    font-size: 15px;
    opacity: 70%;
  }

  h2 {
    margin: -70px 0 0 161px;
    max-width: 200px;
  }

  img {
    margin: 40px 0 0 0;
  }
`

export const ContentMain = styled.div`
  button {
    width: 280px;
    height: 384px;
    background: none;
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    border-radius: 4px;

    img {
      margin: -50px 0 0 90px;
    }
  }
`

export const Footer = styled.footer`
  img {
    width: 100%;
    height: 891px;
  }

  button {
    background: ${theme.colors.blue[100]};
    border: 0;
    color: ${theme.colors.white};
    width: 266px;
    height: 52px;
    border-radius: 4px;
    transition: 1s;
    margin: 42px 0 0 0;

    :hover {
      opacity: 85%;
    }
  }

  svg {
    color: ${theme.colors.white};
    margin: -3px 10px 0 0;
  }

  h2 {
    font-size: 32px;
    line-height: 110.2%;
    margin-bottom: 30px;
  }

  ul {
    margin: -600px 0 0 112px;
  }

  li {
    margin-bottom: 24px;
    opacity: 70%;
    font-size: 18px;
  }
`
