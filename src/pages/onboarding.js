import React, { Component } from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
// Pages
import StepOne from "../dynamic-components/StepOne"
import StepTwo from "../dynamic-components/StepTwo"
import StepThree from "../dynamic-components/StepThree"

export class Onboarding extends Component {
  state = {
    // Step One
    industry:
      typeof window !== "undefined" && window.localStorage.getItem("industry")
        ? JSON.parse(localStorage.industry)
        : "",
    current_annual_revenue:
      typeof window !== "undefined" &&
      window.localStorage.getItem("current_annual_revenue")
        ? JSON.parse(localStorage.current_annual_revenue)
        : "",
    current_annual_revenue_selector:
      typeof window !== "undefined" &&
      window.localStorage.getItem("current_annual_revenue_selector")
        ? JSON.parse(localStorage.current_annual_revenue_selector)
        : "million",
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
    revenue_growth_goal_selector:
      typeof window !== "undefined" &&
      window.localStorage.getItem("revenue_growth_goal_selector")
        ? JSON.parse(localStorage.revenue_growth_goal_selector)
        : "million",
    // Step Two
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
    estimated_sales_cycle_selector:
      typeof window !== "undefined" &&
      window.localStorage.getItem("estimated_sales_cycle_selector")
        ? JSON.parse(localStorage.estimated_sales_cycle_selector)
        : "months",

    // Step Three
    average_monthly_website_traffic:
      typeof window !== "undefined" &&
      window.localStorage.getItem("average_monthly_website_traffic")
        ? JSON.parse(localStorage.average_monthly_website_traffic)
        : "",
    average_monthly_leads_from_website:
      typeof window !== "undefined" &&
      window.localStorage.getItem("average_monthly_leads_from_website")
        ? JSON.parse(localStorage.average_monthly_leads_from_website)
        : "",
    average_monthly_leads_from_all_other_sources:
      typeof window !== "undefined" &&
      window.localStorage.getItem(
        "average_monthly_leads_from_all_other_sources"
      )
        ? JSON.parse(localStorage.average_monthly_leads_from_all_other_sources)
        : "",
    percentage_of_qualified_leads:
      typeof window !== "undefined" &&
      window.localStorage.getItem("percentage_of_qualified_leads")
        ? JSON.parse(localStorage.percentage_of_qualified_leads)
        : "",
    current_annual_marketing_budget:
      typeof window !== "undefined" &&
      window.localStorage.getItem("current_annual_marketing_budget")
        ? JSON.parse(localStorage.current_annual_marketing_budget)
        : "",
    percentage_of_marketing_budget_spent_on_online_advertisement:
      typeof window !== "undefined" &&
      window.localStorage.getItem(
        "percentage_of_marketing_budget_spent_on_online_advertisement"
      )
        ? JSON.parse(
            localStorage.percentage_of_marketing_budget_spent_on_online_advertisement
          )
        : "",

    // Generic State
    currentStep: "",
    backDestination: "",
    nextDestination: "",
    nextButtonText: "",
    nextButtonState: "disabled",
    nextButtonToolTip: "Please complete the fields",
  }

  updateStepOneButtonState = () => {
    setTimeout(() => {
      if (this.state.currentStep === "step__one") {
        if (
          this.state.industry &&
          this.state.current_annual_revenue &&
          this.state.yoy_growth_rate.length &&
          this.state.revenue_growth_goal
        ) {
          this.setState({
            nextButtonState: "enabled",
            nextButtonToolTip: "",
          })
        } else {
          this.setState({
            nextButtonState: "disabled",
            nextButtonToolTip: "Please complete the fields",
          })
        }
      }
    }, 100)
  }

  updateStepTwoButtonState = () => {
    setTimeout(() => {
      if (this.state.currentStep === "step__two") {
        if (
          this.state.average_revenue_per_customer &&
          this.state.gross_margin_per_sale &&
          this.state.average_conversion_rate_on_meetings_to_opportunities &&
          this.state.average_close_ratio_from_opportunities_to_deals &&
          this.state.average_close_ratio_from_opportunities_to_deals &&
          this.state.estimated_sales_cycle
        ) {
          this.setState({
            nextButtonState: "enabled",
            nextButtonToolTip: "",
          })
        } else {
          this.setState({
            nextButtonState: "disabled",
            nextButtonToolTip: "Please complete the fields",
          })
        }
      }
    }, 100)
  }

  updateStepThreeButtonState = () => {
    setTimeout(() => {
      if (this.state.currentStep === "step__three") {
        if (
          this.state.average_monthly_website_traffic &&
          this.state.average_monthly_leads_from_website &&
          this.state.average_monthly_leads_from_all_other_sources &&
          this.state.percentage_of_qualified_leads &&
          this.state.current_annual_marketing_budget &&
          this.state
            .percentage_of_marketing_budget_spent_on_online_advertisement
        ) {
          this.setState({
            nextButtonState: "enabled",
            nextButtonToolTip: "",
          })
        } else {
          this.setState({
            nextButtonState: "disabled",
            nextButtonToolTip: "Please complete the fields",
          })
        }
      }
    }, 100)
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
    this.updateStepOneButtonState()
    this.updateStepTwoButtonState()
    this.updateStepThreeButtonState()
  }

  handleSelectChange = (value, target) => {
    this.setState({
      [target.name]: value,
    })
    if (typeof window !== "undefined") {
      localStorage.setItem(target.name, JSON.stringify(value))
    }
    this.updateStepOneButtonState()
    this.updateStepTwoButtonState()
    this.updateStepThreeButtonState()
  }

  handleSelectorChoice = event => {
    this.setState({
      [event.target.getAttribute("data-name")]: event.target.getAttribute(
        "data-value"
      ),
    })
    if (typeof window !== "undefined") {
      localStorage.setItem(
        event.target.getAttribute("data-name"),
        JSON.stringify(event.target.getAttribute("data-value"))
      )
    }
    this.updateStepOneButtonState()
    this.updateStepTwoButtonState()
    this.updateStepThreeButtonState()
  }

  updateHeaderState = (
    newStep,
    newBackDestination,
    newNextDestination,
    newButtonText
  ) => {
    this.setState({
      currentStep: newStep,
      backDestination: newBackDestination,
      nextDestination: newNextDestination,
      nextButtonText: newButtonText,
    })
  }

  render() {
    return (
      <Layout
        App
        currentStep={this.state.currentStep}
        backDestination={this.state.backDestination}
        nextDestination={this.state.nextDestination}
        nextButtonText={this.state.nextButtonText}
        nextButtonState={this.state.nextButtonState}
        nextButtonToolTip={this.state.nextButtonToolTip}
      >
        <Router basepath="/onboarding">
          <StepOne
            {...this.state}
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            updateHeaderState={this.updateHeaderState}
            updateStepOneButtonState={this.updateStepOneButtonState}
            handleSelectorChoice={this.handleSelectorChoice}
            path="/step-one"
          />
          <StepTwo
            {...this.state}
            handleChange={this.handleChange}
            updateHeaderState={this.updateHeaderState}
            updateStepTwoButtonState={this.updateStepTwoButtonState}
            handleSelectorChoice={this.handleSelectorChoice}
            path="/step-two"
          />
          <StepThree
            {...this.state}
            handleChange={this.handleChange}
            updateHeaderState={this.updateHeaderState}
            updateStepThreeButtonState={this.updateStepThreeButtonState}
            path="/step-three"
          />
        </Router>
      </Layout>
    )
  }
}

export default Onboarding
