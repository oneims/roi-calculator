import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
// Components
import Header from "./Header"

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Header />
        {children}
      </>
    )
  }
}

export default Layout
