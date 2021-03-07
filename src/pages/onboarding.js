import React, { Component } from "react"
import { Router } from "@reach/router"
// Pages
import StepOne from "../dynamic-components/StepOne"
import StepTwo from "../dynamic-components/StepTwo"

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
      <Router basepath="/onboarding">
        <StepOne
          {...this.state}
          handleChange={this.handleChange}
          path="/step-one"
        />
        <StepTwo
          {...this.state}
          handleChange={this.handleChange}
          path="/step-two"
        />
      </Router>
    )
  }
}

export default Calculator
