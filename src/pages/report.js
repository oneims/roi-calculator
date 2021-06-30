import React, { Component } from "react"
import { Router } from "@reach/router"
import ReportLayout from "src/components/report/ReportLayout"
// Pages
import ReportDashboard from "src/components/dynamic-pages/report/ReportDashboard"
// Axios
import axios from "axios"
// Helpers
import {
  // Calculation Helpers
  getConversionRate,
  getAverageQualifiedLeadsMonth,
  getAverageNewCustomersMonth,
  getOnlineMarketingInvestmentMonthly,
  getAverageCostPerLead,
  getCostPerCustomerAcquisition,
  getNetNewRevenue,
  getCostPerLead,
  getCustomersNeededForRevenueTarget,
  getCostPerNewCustomer,
  // Projection Helpers
  getProjectionTwoParams,
} from "src/util/helpers"

export class Report extends Component {
  state = {
    id: null,
    data: null,
    loading: false,
    error: false,
    // Values needed to build report
    conversion_rate: null,
    average_qualified_leads_per_month: null,
    average_new_customers_per_month: null,
    average_cost_per_lead: null,
    average_monthly_online_marketing_investment: null,
    cost_per_customer_acquisition: null,
    net_new_revenue: null,
    cost_per_lead: null,
    customers_needed_for_revenue_target: null,
    cost_per_new_customer: null,
    // Calculations
    conversion_rate_CALCULATION: null,
    average_qualified_leads_per_month_CALCULATION: null,
    average_new_customers_per_month_CALCULATION: null,
    average_cost_per_lead_CALCULATION: null,
    average_monthly_online_marketing_investment_CALCULATION: null,
    cost_per_customer_acquisition_CALCULATION: null,
    net_new_revenue_CALCULATION: null,
    cost_per_lead_CALCULATION: null,
    customers_needed_for_revenue_target_CALCULATION: null,
    cost_per_new_customer_CALCULATION: null,
    // Projections
    conversion_rate_PROJECTION: null,
    average_qualified_leads_per_month_PROJECTION: null,
    average_new_customers_per_month_PROJECTION: null,
    average_cost_per_lead_PROJECTION: null,
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

    const timer = 150

    axios
      .get(`${process.env.GATSBY_API_URL}/reports?record_uid=${id}`)
      .then(res => {
        if (res.data.length > 0) {
          setTimeout(() => {
            const data = res.data[0]
            // Useful Variables
            const {
              average_monthly_leads_from_website,
              average_monthly_website_traffic,
              percentage_of_qualified_leads,
              average_close_ratio_from_opportunities_to_deals,
              percentage_of_marketing_budget_spent_on_online_advertisement,
              current_annual_marketing_budget,
              average_revenue_per_customer,
              average_monthly_leads_from_all_other_sources,
              revenue_growth_goal,
              current_annual_revenue,
            } = data

            // Conversion Rate
            const conversion_rate = getConversionRate(
              average_monthly_leads_from_website,
              average_monthly_website_traffic
            )

            const conversion_rate_PROJECTION = getProjectionTwoParams(
              average_monthly_leads_from_website,
              average_monthly_website_traffic,
              20,
              "Monthly Website Leads",
              getConversionRate
            )

            const conversion_rate_CALCULATION = `Monthly Leads <strong>(${average_monthly_leads_from_website})</strong> / Monthly Website Traffic <strong>(${average_monthly_website_traffic})</strong> * <strong>100</strong>`

            // Average Qualified Leads Per Month
            const average_qualified_leads_per_month = getAverageQualifiedLeadsMonth(
              average_monthly_leads_from_website,
              percentage_of_qualified_leads
            )

            const average_qualified_leads_per_month_PROJECTION = getProjectionTwoParams(
              average_monthly_leads_from_website,
              percentage_of_qualified_leads,
              20,
              "Monthly Website Leads",
              getAverageQualifiedLeadsMonth
            )

            const average_qualified_leads_per_month_CALCULATION = `
            Monthly Leads <strong>(${average_monthly_leads_from_website})</strong> * 
            Percentage of Qualified Leads <strong>(${percentage_of_qualified_leads})</strong>
            / <strong>100</strong>
            `

            // Average New Customers Per Month
            const average_new_customers_per_month = getAverageNewCustomersMonth(
              average_qualified_leads_per_month,
              average_close_ratio_from_opportunities_to_deals
            )

            const average_new_customers_per_month_PROJECTION = getProjectionTwoParams(
              average_qualified_leads_per_month,
              average_close_ratio_from_opportunities_to_deals,
              20,
              "Qualified Leads",
              getAverageNewCustomersMonth
            )

            const average_new_customers_per_month_CALCULATION = `
              Qualified Leads <strong>(${average_qualified_leads_per_month})</strong> * 
              Average Close Ratio <strong>(${average_close_ratio_from_opportunities_to_deals})</strong>
              / <strong>100</strong>
            `

            // Average Monthly Online Marketing Investment
            const average_monthly_online_marketing_investment = getOnlineMarketingInvestmentMonthly(
              current_annual_marketing_budget,
              percentage_of_marketing_budget_spent_on_online_advertisement
            )

            const average_monthly_online_marketing_investment_CALCULATION = `
             Annual Marketing Budget <strong>(${current_annual_marketing_budget})</strong> *
             Percentage Used for Online Advertisement <strong>(${percentage_of_marketing_budget_spent_on_online_advertisement})</strong>
             * <strong>100</strong> / <strong>12 months</strong>
            `

            // Average Cost Per Lead
            const average_cost_per_lead = getAverageCostPerLead(
              average_monthly_online_marketing_investment,
              average_monthly_leads_from_website
            )

            const average_cost_per_lead_PROJECTION = getProjectionTwoParams(
              average_monthly_leads_from_website,
              average_monthly_online_marketing_investment,
              20,
              "Monthly Leads Increased",
              getAverageCostPerLead,
              true
            )

            const average_cost_per_lead_CALCULATION = `
            Monthly Marketing Online Investment <strong>($${average_monthly_online_marketing_investment})</strong> / 
            Monthly Leads <strong>(${average_monthly_leads_from_website})</strong>
            `

            // Cost Per Customer Acquisiton
            const cost_per_customer_acquisition = getCostPerCustomerAcquisition(
              average_monthly_online_marketing_investment,
              average_new_customers_per_month
            )

            const cost_per_customer_acquisition_CALCULATION = `
              Monthly Marketing Online Investment <strong>($${average_monthly_online_marketing_investment})</strong> / 
              New Customers <strong>(${average_new_customers_per_month})</strong>
            `

            // Net New Revenue
            const net_new_revenue = getNetNewRevenue(
              average_new_customers_per_month,
              average_revenue_per_customer
            )

            const net_new_revenue_CALCULATION = `
            New Customers <strong>(${average_new_customers_per_month})</strong>
            Revenue Per Customer <strong>(${average_revenue_per_customer})</strong>
            `

            // Cost Per Lead
            const cost_per_lead = getCostPerLead(
              average_monthly_leads_from_website,
              average_monthly_leads_from_all_other_sources,
              current_annual_marketing_budget
            )

            const cost_per_lead_CALCULATION = `
            Website Monthly Leads <strong>(${average_monthly_leads_from_website})</strong>
            +
            Other Monthly Leads <strong>(${average_monthly_leads_from_all_other_sources})</strong>
            * <strong>12</strong>
            / Annual Marketing Budget <strong>(${current_annual_marketing_budget})</strong>
            `

            // Customers Needed for Revenue Target
            const customers_needed_for_revenue_target = getCustomersNeededForRevenueTarget(
              average_revenue_per_customer,
              revenue_growth_goal,
              current_annual_revenue
            )

            const customers_needed_for_revenue_target_CALCULATION = `
              Revenue Growth Goal <strong>(${revenue_growth_goal})</strong>
              - Current Annual Revenue <strong>(${current_annual_revenue})</strong>
              / Revenue Per Customer <strong>(${average_revenue_per_customer})</strong>
            `

            // Cost Per New Customer
            const cost_per_new_customer = getCostPerNewCustomer(
              average_monthly_leads_from_website,
              average_monthly_leads_from_all_other_sources,
              percentage_of_qualified_leads,
              average_close_ratio_from_opportunities_to_deals,
              current_annual_marketing_budget
            )

            const cost_per_new_customer_CALCULATION = `
            Annual Marketing Budget <strong>(${current_annual_marketing_budget})</strong>
            /
            Website Monthly Leads <strong>(${average_monthly_leads_from_website})</strong>
            +
            Other Monthly Leads <strong>(${average_monthly_leads_from_all_other_sources})</strong>
            * <strong>12</strong> 
            * Qualified Leads <strong>(${percentage_of_qualified_leads})</strong>
            * Close Ratio <strong>(${average_close_ratio_from_opportunities_to_deals})</strong>
            `

            // Updating State
            this.setState({
              data: res.data,
              loading: false,
              // Values needed to build report
              conversion_rate,
              average_qualified_leads_per_month,
              average_new_customers_per_month,
              average_monthly_online_marketing_investment,
              average_cost_per_lead,
              cost_per_customer_acquisition,
              net_new_revenue,
              cost_per_lead,
              customers_needed_for_revenue_target,
              cost_per_new_customer,
              // Calculations
              conversion_rate_CALCULATION,
              average_qualified_leads_per_month_CALCULATION,
              average_new_customers_per_month_CALCULATION,
              average_monthly_online_marketing_investment_CALCULATION,
              average_cost_per_lead_CALCULATION,
              cost_per_customer_acquisition_CALCULATION,
              net_new_revenue_CALCULATION,
              cost_per_lead_CALCULATION,
              customers_needed_for_revenue_target_CALCULATION,
              cost_per_new_customer_CALCULATION,
              // Projections
              conversion_rate_PROJECTION,
              average_qualified_leads_per_month_PROJECTION,
              average_new_customers_per_month_PROJECTION,
              average_cost_per_lead_PROJECTION,
            })
            console.log(this.state)
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

  render() {
    return (
      <ReportLayout reportID={this.state.id}>
        <Router basepath="/report">
          <ReportDashboard
            {...this.state}
            handleUpdateIDState={this.handleUpdateIDState}
            handleGetDataByID={this.handleGetDataByID}
            path="/:id"
          />
        </Router>
      </ReportLayout>
    )
  }
}

export default Report
