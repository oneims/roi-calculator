import React, { Component } from "react"
import { Router } from "@reach/router"
// Pages
import StepOne from "../dynamic-components/StepOne"
import StepTwo from "../dynamic-components/StepTwo"
import StepThree from "../dynamic-components/StepThree"

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
    yoy_growth_rate:
      typeof window !== "undefined" &&
      window.localStorage.getItem("yoy_growth_rate")
        ? JSON.parse(localStorage.yoy_growth_rate)
        : "",
    revenue_growth_goal:
      typeof window !== "undefined" &&
      window.localStorage.getItem("revenue_growth_goal")
        ? JSON.parse(localStorage.revenue_growth_goal)
        : "",
    average_revenue_per_customer:
      typeof window !== "undefined" &&
      window.localStorage.getItem("average_revenue_per_customer")
        ? JSON.parse(localStorage.average_revenue_per_customer)
        : "",
    gross_margin_per_sale:
      typeof window !== "undefined" &&
      window.localStorage.getItem("gross_margin_per_sale")
        ? JSON.parse(localStorage.gross_margin_per_sale)
        : "",
    average_conversion_rate_on_meetings_to_opportunities:
      typeof window !== "undefined" &&
      window.localStorage.getItem(
        "average_conversion_rate_on_meetings_to_opportunities"
      )
        ? JSON.parse(
            localStorage.average_conversion_rate_on_meetings_to_opportunities
          )
        : "",
    average_close_ratio_from_opportunities_to_deals:
      typeof window !== "undefined" &&
      window.localStorage.getItem(
        "average_close_ratio_from_opportunities_to_deals"
      )
        ? JSON.parse(
            localStorage.average_close_ratio_from_opportunities_to_deals
          )
        : "",
    estimated_sales_cycle:
      typeof window !== "undefined" &&
      window.localStorage.getItem("estimated_sales_cycle")
        ? JSON.parse(localStorage.estimated_sales_cycle)
        : "",
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
        <StepTwo
          {...this.state}
          handleChange={this.handleChange}
          path="/step-two"
        />
        <StepThree
          {...this.state}
          handleChange={this.handleChange}
          path="/step-three"
        />
      </Router>
    )
  }
}

export default Calculator
