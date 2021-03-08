import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import styled from "styled-components"
// Components
import Header from "./Header"

const StyledMain = styled.main`
  padding-top: 78.19px;
`

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Header />
        <StyledMain>{children}</StyledMain>
      </>
    )
  }
}

export default Layout
