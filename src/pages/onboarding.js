import { Router } from "@reach/router"
// Axios
import axios from "axios"
import { navigate } from "gatsby"
import React, { Component } from "react"
// Components
import { Modal } from "react-bootstrap"
// Pages
import StepOne from "src/components/dynamic-pages/StepOne"
import StepThree from "src/components/dynamic-pages/StepThree"
import StepTwo from "src/components/dynamic-pages/StepTwo"
import Layout from "src/components/Layout"
import {
  ContentBox,
  StyledLoader,
  StyledLoaderWrapper,
} from "src/components/StyledElements"
// Helpers
import { generateToken, addMonthsToDate } from "src/util/helpers"

class Onboarding extends Component {
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
    target_date_to_reach_revenue:
      typeof window !== "undefined" &&
      window.localStorage.getItem("target_date_to_reach_revenue")
        ? JSON.parse(localStorage.target_date_to_reach_revenue)
        : addMonthsToDate(2),
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
    stepOneValid: false,
    stepTwoValid: false,
    stepThreeValid: false,
    clearedStepOne:
      typeof window !== "undefined" &&
      window.localStorage.getItem("clearedStepOne")
        ? JSON.parse(localStorage.clearedStepOne)
        : false,
    clearedStepTwo:
      typeof window !== "undefined" &&
      window.localStorage.getItem("clearedStepTwo")
        ? JSON.parse(localStorage.clearedStepTwo)
        : false,
    loading: false,
    error: false,
  }

  updateStepOneButtonState = () => {
    setTimeout(() => {
      if (this.state.currentStep === "step__one") {
        if (
          this.state.industry &&
          this.state.current_annual_revenue &&
          this.state.yoy_growth_rate.length &&
          this.state.revenue_growth_goal &&
          this.state.target_date_to_reach_revenue &&
          this.state.stepOneValid
        ) {
          this.setState({
            nextButtonState: "enabled",
            nextButtonToolTip: "",
            clearedStepOne: true,
          })
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepOne", true)
          }
        } else {
          this.setState({
            nextButtonState: "disabled",
            nextButtonToolTip: "Please complete the fields",
            clearedStepOne: false,
          })
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepOne", false)
          }
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
          this.state.estimated_sales_cycle &&
          this.state.stepTwoValid
        ) {
          this.setState({
            nextButtonState: "enabled",
            nextButtonToolTip: "",
            clearedStepTwo: true,
          })
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepTwo", true)
          }
        } else {
          this.setState({
            nextButtonState: "disabled",
            nextButtonToolTip: "Please complete the fields",
            clearedStepTwo: false,
          })
          if (typeof window !== "undefined") {
            localStorage.setItem("clearedStepTwo", false)
          }
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
            .percentage_of_marketing_budget_spent_on_online_advertisement &&
          this.state.stepThreeValid
        ) {
          this.setState({
            nextButtonState: "enabled",
            nextButtonToolTip: "",
            clearedStepThree: true,
          })
        } else {
          this.setState({
            nextButtonState: "disabled",
            nextButtonToolTip: "Please complete the fields",
            clearedStepThree: false,
          })
        }
      }
    }, 100)
  }

  updateNextSteps = () => {
    this.updateStepOneButtonState()
    this.updateStepTwoButtonState()
    this.updateStepThreeButtonState()
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
    this.updateNextSteps()
  }

  handleSelectChange = (value, target) => {
    this.setState({
      [target.name]: value,
    })
    if (typeof window !== "undefined") {
      localStorage.setItem(target.name, JSON.stringify(value))
    }
    this.updateNextSteps()
  }

  handleSelectorChoice = event => {
    this.setState({
      [event.target.getAttribute("data-name")]: event.target.getAttribute(
        "data-value"
      ),
      [event.target.getAttribute(
        "data-parent-name"
      )]: event.target.getAttribute("data-parent-value"),
    })
    if (typeof window !== "undefined") {
      localStorage.setItem(
        event.target.getAttribute("data-name"),
        JSON.stringify(event.target.getAttribute("data-value"))
      )
      localStorage.setItem(
        event.target.getAttribute("data-parent-name"),
        JSON.stringify(event.target.getAttribute("data-parent-value"))
      )
    }
    this.updateNextSteps()
  }

  handleDateChange = (date, name) => {
    this.setState({
      [name]: date,
    })
    if (typeof window !== "undefined") {
      localStorage.setItem(name, JSON.stringify(date))
    }
    this.updateNextSteps()
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      loading: true,
    })

    const record_uid = `${generateToken(16)}`

    const timer = 1000

    const reportData = {
      industry: this.state.industry.value,
      current_annual_revenue: this.state.current_annual_revenue,
      yoy_growth_rate: this.state.yoy_growth_rate,
      revenue_growth_goal: this.state.revenue_growth_goal,
      average_revenue_per_customer: this.state.average_revenue_per_customer,
      gross_margin_per_sale: this.state.gross_margin_per_sale,
      average_conversion_rate_on_meetings_to_opportunities: this.state
        .average_conversion_rate_on_meetings_to_opportunities,
      average_close_ratio_from_opportunities_to_deals: this.state
        .average_close_ratio_from_opportunities_to_deals,
      estimated_sales_cycle: this.state.estimated_sales_cycle,
      average_monthly_website_traffic: this.state
        .average_monthly_website_traffic,
      average_monthly_leads_from_website: this.state
        .average_monthly_leads_from_website,
      average_monthly_leads_from_all_other_sources: this.state
        .average_monthly_leads_from_all_other_sources,
      percentage_of_qualified_leads: this.state.percentage_of_qualified_leads,
      current_annual_marketing_budget: this.state
        .current_annual_marketing_budget,
      percentage_of_marketing_budget_spent_on_online_advertisement: this.state
        .percentage_of_marketing_budget_spent_on_online_advertisement,
      target_date_to_reach_revenue: this.state.target_date_to_reach_revenue,
      record_uid,
    }
    axios
      .post(`${process.env.GATSBY_API_URL}/reports`, reportData, {
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_JWT_SECRET}`,
        },
      })
      .then(res => {
        setTimeout(() => {
          this.setState({
            loading: false,
            clearedStepOne: false,
            clearedStepTwo: false,
          })
          if (typeof window !== `undefined`) {
            localStorage.clear()
            navigate(`/report/${record_uid}`)
          }
        }, timer)
      })
      .catch(err => {
        setTimeout(() => {
          if (err.response) {
            console.log(err.response.data)
          }
          this.setState(
            {
              error: true,
              loading: false,
            },
            () => {
              setTimeout(() => {
                this.setState({
                  error: false,
                })
              }, 2000)
            }
          )
        }, timer)
      })
  }

  handleDismissError = () => {
    this.setState({
      error: false,
    })
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

  stepsValidator = {
    stepOneValidator: bool => {
      return bool
        ? this.setState({ stepOneValid: true })
        : this.setState({ stepOneValid: false })
    },
    stepTwoValidator: bool => {
      return bool
        ? this.setState({ stepTwoValid: true })
        : this.setState({ stepTwoValid: false })
    },
    stepThreeValidator: bool => {
      return bool
        ? this.setState({ stepThreeValid: true })
        : this.setState({ stepThreeValid: false })
    },
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
        handleSubmit={this.handleSubmit}
      >
        <Router basepath="/onboarding">
          <StepOne
            {...this.state}
            {...this.stepsValidator}
            handleChange={this.handleChange}
            handleSelectChange={this.handleSelectChange}
            updateHeaderState={this.updateHeaderState}
            updateStepOneButtonState={this.updateStepOneButtonState}
            handleSelectorChoice={this.handleSelectorChoice}
            handleDateChange={this.handleDateChange}
            path="/step-one"
          />
          <StepTwo
            {...this.state}
            {...this.stepsValidator}
            handleChange={this.handleChange}
            updateHeaderState={this.updateHeaderState}
            updateStepTwoButtonState={this.updateStepTwoButtonState}
            handleSelectorChoice={this.handleSelectorChoice}
            path="/step-two"
          />
          <StepThree
            {...this.state}
            {...this.stepsValidator}
            handleChange={this.handleChange}
            updateHeaderState={this.updateHeaderState}
            updateStepThreeButtonState={this.updateStepThreeButtonState}
            path="/step-three"
          />
        </Router>
        {this.state.loading ? (
          <StyledLoaderWrapper White Fixed>
            <StyledLoader />
          </StyledLoaderWrapper>
        ) : (
          ""
        )}
        <Modal
          backdropClassName="extreme-light"
          show={this.state.error}
          onHide={this.handleDismissError}
          className="modal-notification"
        >
          <Modal.Body className="modal-notification__body modal-notification__body-error">
            <div className="close-button" onClick={this.handleDismissError}>
              <figure>
                <svg
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="UICloseButton__CloseIcon-sc-1s0n2rw-1 bYdwaJ"
                >
                  <path
                    d="M14.5,1.5l-13,13m0-13,13,13"
                    transform="translate(-1 -1)"
                    className="UICloseButton__CloseIconInner-sc-1s0n2rw-2 kmMQRc"
                  ></path>
                </svg>
              </figure>
            </div>
            <ContentBox>
              <strong>Error.</strong> Hmm, something went wrong! Please try
              again later.
            </ContentBox>
          </Modal.Body>
        </Modal>
      </Layout>
    )
  }
}

export default Onboarding
