import React, { Component } from "react"
import { Router } from "@reach/router"
// Pages
import Onboarding from "../dynamic-components/Onboarding"
import Details from "../dynamic-components/Details"

export class Calculator extends Component {
  state = {
    companySize: "",
    companyName: "",
    companyCity: "",
    companyState: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <Router basepath="/calculator">
        <Onboarding
          {...this.state}
          handleChange={this.handleChange}
          path="/onboarding"
        />
        <Details
          {...this.state}
          handleChange={this.handleChange}
          path="/details"
        />
      </Router>
    )
  }
}

export default Calculator
