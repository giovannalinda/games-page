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
    height: 640px;
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
