import styled from 'styled-components/macro'
import { theme } from '../../../ui'

export const Nav = styled.nav`
  header {
    position: fixed;
    background: ${theme.colors.black};
    width: 100%;
    z-index: 999;
  }

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
      color: ${theme.colors.blue};
    }
  }

  img {
    display: flex;
    width: 100px;
    height: 100px;
    margin-left: 190px;
  }

  button {
    background: ${theme.colors.blue};
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
