import styled from 'styled-components/macro'
import { theme } from '../../ui'

export const Container = styled.div`
  margin: 0 auto;
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
    background: ${theme.colors.blue};
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
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 250px));
    text-align: center;
    justify-content: center;
    margin: 0 0 20px 0;
    grid-row-gap: 10px;
  }

  img {
    width: 280px;
    height: 250px;
    border-radius: 4px;
    padding-left: 10px;
    transition: 1s;
    cursor: pointer;

    :hover {
      opacity: 85%;
      width: 290px;
      height: 270px;
    }
  }

  span {
    cursor: pointer;
    transition: 1s;

    :hover {
      color: ${theme.colors.blue}
    }
  }

  a {
    width: 280px;
    height: 384px;
    background: none;
    color: ${theme.colors.blue};
    transition: 1s;
    text-decoration: underline;
    margin: 0 0 0 80px;

    :hover {
      color: ${theme.colors.blue[100]}
    }
  }
`
export const Footer = styled.footer`
  margin-top: -170px;

  img {
    width: 100%;
    height: 891px;
  }

  button {
    background: ${theme.colors.blue};
    border: 0;
    color: ${theme.colors.white};
    width: 266px;
    height: 52px;
    border-radius: 4px;
    transition: 1s;
    margin: 42px 0 20px 0;

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
    margin: -600px 0 0 190px;
  }

  li {
    margin-bottom: 24px;
    opacity: 70%;
    font-size: 18px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 280px;
    padding-bottom: 30px;
  }

  span {
    margin: 0 0 0 190px;
    font-size: 14px;
  }
`
