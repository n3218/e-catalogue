import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const LogoContainer = styled(Link)`
  height: 70px;
  width: 70px;
  display: block;
  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
    margin: -10px;
  }
`

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
  }
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    padding: 10px 5px;
  }
`

export const CurrentUserName = styled.div`
  position: absolute;
  top: 20px;
  right: 90px;
  @media screen and (max-width: 800px) {
    top: 8px;
    right: 25px;
  }
`
