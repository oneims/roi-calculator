import React, { Component } from "react"
import { Router } from "@reach/router"
import ReportLayout from "src/components/report/ReportLayout"
// Pages
import ReportEditor from "src/components/dynamic-pages/report/ReportEditor"
// Components
import Saver from "src/components/Saver"
import { Modal } from "react-bootstrap"
import {
  StyledLoaderWrapper,
  StyledLoader,
  ContentBox,
} from "src/components/StyledElements"
// Axios
import axios from "axios"
// Helpers
import {
  capitalizeFirstLetter,
  checkValidObjectProperties,
} from "src/util/helpers"

let originalFetchedData

export class Editor extends Component {
  state = {
    // Step One
    industry: null,
    current_annual_revenue: null,
    current_annual_revenue_selector: null,
    yoy_growth_rate: null,
    revenue_growth_goal: null,
    revenue_growth_goal_selector: null,
    target_date_to_reach_revenue: null,
    // Step Two
    average_revenue_per_customer: null,
    gross_margin_per_sale: null,
    average_conversion_rate_on_meetings_to_opportunities: null,
    average_close_ratio_from_opportunities_to_deals: null,
    estimated_sales_cycle: null,
    estimated_sales_cycle_selector: null,
    // Step Three
    average_monthly_website_traffic: null,
    average_monthly_leads_from_website: null,
    average_monthly_leads_from_all_other_sources: null,
    percentage_of_qualified_leads: null,
    current_annual_marketing_budget: null,
    percentage_of_marketing_budget_spent_on_online_advertisement: null,
    // Generic State
    id: null,
    strapiID: null,
    loading: true,
    wrapperLoading: false,
    changesPending: false,
    error: false,
    success: false,
    notificationVisibility: false,
    validForm: true,
  }

  checkValidForm = () => {
    setTimeout(() => {
      checkValidObjectProperties(this.state)
        ? this.setState({ validForm: true })
        : this.setState({ validForm: false })
    }, 50)
  }

  handleUpdateIDState = id => {
    this.setState({
      id,
    })
  }

  handleGetDataByID = id => {
    this.setState({
      loading: true,
    })

    const timer = 500

    axios
      .get(`${process.env.GATSBY_API_URL}/reports?record_uid=${id}`)
      .then(res => {
        if (res.data.length > 0) {
          const data = res.data[0]
          setTimeout(() => {
            this.setState({
              //   Step One
              industry: {
                value: data.industry.toLowerCase().split(" ").join("_"),
                label: capitalizeFirstLetter(
                  data.industry.split("_").join(" ")
                ),
              },
              current_annual_revenue: data.current_annual_revenue,
              current_annual_revenue_selector: data.current_annual_revenue
                .split(" ")[1]
                .toLowerCase(),
              yoy_growth_rate: data.yoy_growth_rate,
              revenue_growth_goal: data.revenue_growth_goal,
              revenue_growth_goal_selector: data.revenue_growth_goal
                .split(" ")[1]
                .toLowerCase(),
              target_date_to_reach_revenue: data.target_date_to_reach_revenue,
              // Step Two
              average_revenue_per_customer: data.average_revenue_per_customer,
              gross_margin_per_sale: data.gross_margin_per_sale,
              average_conversion_rate_on_meetings_to_opportunities:
                data.average_conversion_rate_on_meetings_to_opportunities,
              average_close_ratio_from_opportunities_to_deals:
                data.average_close_ratio_from_opportunities_to_deals,
              estimated_sales_cycle: data.estimated_sales_cycle,
              estimated_sales_cycle_selector: data.estimated_sales_cycle
                .split(" ")[1]
                .toLowerCase(),
              // Step Three
              average_monthly_website_traffic:
                data.average_monthly_website_traffic,
              average_monthly_leads_from_website:
                data.average_monthly_leads_from_website,
              average_monthly_leads_from_all_other_sources:
                data.average_monthly_leads_from_all_other_sources,
              percentage_of_qualified_leads: data.percentage_of_qualified_leads,
              current_annual_marketing_budget:
                data.current_annual_marketing_budget,
              percentage_of_marketing_budget_spent_on_online_advertisement:
                data.percentage_of_marketing_budget_spent_on_online_advertisement,
              // Generic State
              loading: false,
              strapiID: data.id,
            })
            originalFetchedData = { ...this.state }
          }, timer)
        } else {
          throw new Error(`No report found with id ${id}`)
        }
      })
      .catch(err => {
        setTimeout(() => {
          if (err.response) {
            console.log(err.response.data)
          }
          this.setState({
            error: true,
            loading: false,
          })
        }, timer)
      })
  }

  //   Editor Specific
  pendingChangesStateChanger = bool => {
    this.checkValidForm()
    this.setState({
      changesPending: bool,
    })
  }

  cancelChanges = () => {
    this.setState(originalFetchedData)
    this.pendingChangesStateChanger(false)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      wrapperLoading: true,
    })
    const timer = 500
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
      record_uid: this.state.id,
    }
    axios
      .put(
        `${process.env.GATSBY_API_URL}/reports/${this.state.strapiID}`,
        reportData
      )
      .then(res => {
        this.pendingChangesStateChanger(false)
        setTimeout(() => {
          this.setState(
            {
              wrapperLoading: false,
              success: true,
              notificationVisibility: true,
            },
            () => {
              setTimeout(() => {
                this.setState({
                  success: false,
                  notificationVisibility: false,
                })
                originalFetchedData = { ...this.state }
              }, 2000)
            }
          )
        }, timer)
      })
      .catch(err => {
        this.pendingChangesStateChanger(false)
        setTimeout(() => {
          if (err.response) {
            console.log(err.response.data)
          }
          this.setState(
            {
              error: true,
              wrapperLoading: false,
              notificationVisibility: true,
            },
            () => {
              setTimeout(() => {
                this.setState({
                  error: false,
                  notificationVisibility: false,
                })
              }, 2000)
            }
          )
        }, timer)
      })
  }

  //   End Editor Specific

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    this.pendingChangesStateChanger(true)
  }

  handleSelectChange = (value, target) => {
    this.setState({
      [target.name]: value,
    })
    this.pendingChangesStateChanger(true)
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
    this.pendingChangesStateChanger(true)
  }

  handleDateChange = (date, name) => {
    this.setState({
      [name]: date,
    })
    this.pendingChangesStateChanger(true)
  }

  handleDismissNotification = () => {
    this.setState({
      notificationVisibility: false,
    })
  }

  render() {
    return (
      <>
        <ReportLayout reportID={this.state.id}>
          <Router basepath="/editor">
            <ReportEditor
              {...this.state}
              handleUpdateIDState={this.handleUpdateIDState}
              handleGetDataByID={this.handleGetDataByID}
              handleChange={this.handleChange}
              handleSelectChange={this.handleSelectChange}
              handleSelectorChoice={this.handleSelectorChoice}
              handleDateChange={this.handleDateChange}
              path="/:id"
            />
          </Router>
        </ReportLayout>
        <Saver
          disabled={!this.state.validForm}
          className={this.state.changesPending ? "active" : ``}
          handleCancel={this.cancelChanges}
          handleSubmit={this.handleSubmit}
        />
        {this.state.wrapperLoading ? (
          <StyledLoaderWrapper White Fixed OverridePage>
            <StyledLoader />
          </StyledLoaderWrapper>
        ) : (
          ""
        )}
        <Modal
          backdropClassName="transparent"
          show={this.state.notificationVisibility}
          onHide={this.handleDismissNotification}
          className="modal-notification"
        >
          <Modal.Body
            className={`modal-notification__body modal-notification__body-${
              this.state.error ? `error` : `success`
            }`}
          >
            <div
              className="close-button"
              onClick={this.handleDismissNotification}
            >
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
              <strong>{this.state.error ? `Error.` : `Success.`}</strong>
              {this.state.error
                ? `Hmm, something went wrong! Please try
              again later.`
                : `Your changes have been saved successfuly.`}
            </ContentBox>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default Editor
