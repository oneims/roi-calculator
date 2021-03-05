import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
// Components

class Layout extends Component {
  render() {
    const { children } = this.props
    return <>{children}</>
  }
}

export default Layout
