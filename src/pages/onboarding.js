import React, { Component } from "react"
import { Router } from "@reach/router"
// Pages
import StepOne from "../dynamic-components/StepOne"
import StepTwo from "../dynamic-components/StepTwo"

export class Calculator extends Component {
  state = {
    industry:
      typeof window !== "undefined" && window.localStorage.getItem("industry")
        ? JSON.parse(localStorage.industry)
        : "",
    current_annual_revenue:
      typeof window !== "undefined" &&
      window.localStorage.getItem("current_annual_revenue")
        ? JSON.parse(localStorage.current_annual_revenue)
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
          handleChange={this.handleChange}
          handleSelectChange={this.handleSelectChange}
          path="/step-one"
        />
        <StepTwo {...this.state} path="/step-two" />
      </Router>
    )
  }
}

export default Calculator
