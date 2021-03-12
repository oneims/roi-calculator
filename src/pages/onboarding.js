import React, { Component } from "react"
import { Router } from "@reach/router"
// Pages
import StepOne from "../dynamic-components/StepOne"
import StepTwo from "../dynamic-components/StepTwo"

export class Calculator extends Component {
  state = {
    annual_revenue_as_a_range:
      typeof window !== "undefined" &&
      window.localStorage.getItem("annual_revenue_as_a_range")
        ? JSON.parse(localStorage.annual_revenue_as_a_range)
        : "",
    growth_rate:
      typeof window !== "undefined" &&
      window.localStorage.getItem("growth_rate")
        ? JSON.parse(localStorage.growth_rate)
        : "",
    average_revenue_per_customer_or_order: "",
    estimated_gross_margin_per_sale: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    if (typeof window !== "undefined") {
      localStorage.setItem(
        event.target.name,
        JSON.stringify(event.target.value)
      )
    }
  }

  handleSelectChange = (value, target) => {
    this.setState({
      [target.name]: value,
    })
    if (typeof window !== "undefined") {
      localStorage.setItem(target.name, JSON.stringify(value))
    }
  }

  render() {
    return (
      <Router basepath="/onboarding">
        <StepOne
          {...this.state}
          handleSelectChange={this.handleSelectChange}
          path="/step-one"
        />
        <StepTwo {...this.state} path="/step-two" />
      </Router>
    )
  }
}

export default Calculator
