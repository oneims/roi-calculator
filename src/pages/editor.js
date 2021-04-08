import React, { Component } from "react"
import { Router } from "@reach/router"
import ReportLayout from "../components/report/ReportLayout"
// Pages
import ReportEditor from "../dynamic-components/report/ReportEditor"
// Components
import Saver from "../components/Saver"
// Axios
import axios from "axios"
import { baseURL } from "../base/axios.js"
// Helpers
import { capitalizeFirstLetter } from "../util/helpers"

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
    loading: true,
    changesPending: false,
    error: false,
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

    const timer = 800

    axios
      .get(`${baseURL}/reports?record_uid=${id}`)
      .then(res => {
        if (res.data.length > 0) {
          const data = res.data[0]
          setTimeout(() => {
            this.setState({
              //   Step One
              industry: {
                value: data.industry.toLowerCase().split(" ").join("_"),
                label: capitalizeFirstLetter(data.industry),
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
            })
            originalFetchedData = { ...this.state }
            console.log(originalFetchedData)
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
    this.setState({
      changesPending: bool,
    })
  }

  cancelChanges = () => {
    this.setState(originalFetchedData)
    this.pendingChangesStateChanger(false)
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

  render() {
    return (
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
        <Saver
          className={this.state.changesPending ? "active" : ``}
          handleCancel={this.cancelChanges}
        />
      </ReportLayout>
    )
  }
}

export default Editor
