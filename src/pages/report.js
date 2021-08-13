import React, { Component } from "react"
import { Router } from "@reach/router"
import ReportLayout from "src/components/report/ReportLayout"
import InfoDrawer from "src/components/InfoDrawer"
// Helpers
import { roundToTwoDecimals } from "src/util/helpers"
// Pages
import ReportDashboard from "src/components/dynamic-pages/report/ReportDashboard"
// Axios
import axios from "axios"
// Static Data
import { STATIC_Industry_Metrics } from "src/util/STATIC_Data"
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
  getCompanySizeInRevenue,
  getDifferenceInMonths,
  parseISOString,
  // Projection Helpers
  getProjectionTwoParams,
  getProjectionTwoParamsGraph,
  PROJECTChangeInMonthlyTraffic,
  getProjectionsForRevenue,
  // Budget Optimizer
  budgetOptimizer,
  // Optimized Funnel
  createFunnel,
  reCreateFunnel,
  createOptimizedFunnel,
} from "src/util/helpers"

export class Report extends Component {
  state = {
    id: null,
    data: null,
    loading: true,
    error: false,
    // Base Components
    infoDrawer: {
      visible: false,
      actionable: false,
      heading: null,
      content: null,
      loading: false,
    },
    // Base Data
    industry: null,
    revenue_growth_goal: null,
    current_annual_marketing_budget: null,
    company_size_in_revenue: null,
    average_revenue_per_customer: null,
    target_date_to_reach_revenue: null,
    current_annual_revenue: null,
    percentage_of_qualified_leads: null,
    average_close_ratio_from_opportunities_to_deals: null,
    // // Useful for Funnel
    average_monthly_website_traffic: null,
    average_monthly_leads_from_website: null,
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
    MULTIPLE_PROJECTIONS: null,
    // Projections Graphs
    monthly_leads_PROJECTION_GRAPH: null,
    // Budget Optimizer
    budget_optimizer: null,
    // Interactive Funnel
    months_to_reach_target: null,
    interactive_funnel_key: 1,
    OPTIMIZED_FUNNEL_DATA: null,
    OPTIMIZED_close_ratio: null,
    OPTIMIZED_conversion_rate: null,
    OPTIMIZED_qualified_leads_percentage: null,
    OPTIMIZED_website_traffic: null,
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
              industry,
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
              target_date_to_reach_revenue,
            } = data

            // Company Size in Revenue
            const company_size_in_revenue = getCompanySizeInRevenue(
              current_annual_revenue
            )

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

            const monthly_leads_PROJECTION_GRAPH = PROJECTChangeInMonthlyTraffic(
              average_monthly_website_traffic,
              conversion_rate,
              100
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

            // Budget Optimizer

            const budget_optimizer = budgetOptimizer(
              current_annual_marketing_budget
            )

            // Optimized Funnel

            const months_to_reach_target = getDifferenceInMonths(
              new Date(),
              parseISOString(target_date_to_reach_revenue)
            )
            const OPTIMIZED_FUNNEL_DATA = createOptimizedFunnel(
              average_monthly_website_traffic,
              conversion_rate,
              percentage_of_qualified_leads,
              average_close_ratio_from_opportunities_to_deals,
              customers_needed_for_revenue_target / months_to_reach_target
            )

            // Projections For Revenue Increase
            // Multiple Projections
            const MULTIPLE_PROJECTIONS = getProjectionsForRevenue(
              average_monthly_website_traffic,
              conversion_rate,
              percentage_of_qualified_leads,
              average_close_ratio_from_opportunities_to_deals,
              average_revenue_per_customer,
              net_new_revenue
            )

            // Updating State
            this.setState({
              data: res.data,
              // Base Data
              industry,
              revenue_growth_goal,
              current_annual_marketing_budget,
              company_size_in_revenue,
              average_revenue_per_customer,
              target_date_to_reach_revenue,
              current_annual_revenue,
              percentage_of_qualified_leads,
              average_close_ratio_from_opportunities_to_deals,
              // Useful for funnel
              average_monthly_website_traffic,
              average_monthly_leads_from_website,
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
              MULTIPLE_PROJECTIONS,
              // Projections Graphs
              monthly_leads_PROJECTION_GRAPH,
              // Budget Optimizer
              budget_optimizer,
              // Interactive Funnel
              months_to_reach_target,
              revenueVisible: true,
              OPTIMIZED_FUNNEL_DATA,
              OPTIMIZED_close_ratio:
                OPTIMIZED_FUNNEL_DATA.updatedInputs.closeRatio.newValue,
              OPTIMIZED_conversion_rate:
                OPTIMIZED_FUNNEL_DATA.updatedInputs.conversionRate.newValue,
              OPTIMIZED_qualified_leads_percentage:
                OPTIMIZED_FUNNEL_DATA.updatedInputs.qualifiedLeadsPercentage
                  .newValue,
              OPTIMIZED_website_traffic:
                OPTIMIZED_FUNNEL_DATA.updatedInputs.websiteTraffic.newValue,
              // Loader
              loading: false,
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

  // Interactive Funnel
  handleInteractiveClick = event => {
    const intent = event.target.getAttribute("data-intent")
    const index = event.target.getAttribute("data-index")
    let updatedData
    let parameters = [
      this.state.OPTIMIZED_website_traffic,
      this.state.OPTIMIZED_conversion_rate,
      this.state.OPTIMIZED_qualified_leads_percentage,
      this.state.OPTIMIZED_close_ratio,
      this.state.OPTIMIZED_FUNNEL_DATA,
    ]
    if (intent === "negative") {
      parameters[index] = roundToTwoDecimals(
        parameters[index] - (parameters[index] / 100) * 10
      )
    } else {
      parameters[index] = roundToTwoDecimals(
        parameters[index] + (parameters[index] / 100) * 10
      )
    }

    updatedData = reCreateFunnel(
      parameters[0],
      parameters[1],
      parameters[2],
      parameters[3],
      parameters[4]
    )

    this.setState({
      OPTIMIZED_FUNNEL_DATA: updatedData,
      OPTIMIZED_website_traffic: parameters[0],
      OPTIMIZED_conversion_rate: parameters[1],
      OPTIMIZED_qualified_leads_percentage: parameters[2],
      OPTIMIZED_close_ratio: parameters[3],
      interactive_funnel_key: this.state.interactive_funnel_key + 1,
    })
  }

  handleHideRevenue = () => {
    if (this.state.revenueVisible) {
      this.setState({
        revenueVisible: false,
      })
    } else {
      this.setState({
        revenueVisible: true,
      })
    }
    this.setState({
      interactive_funnel_key: this.state.interactive_funnel_key + 1,
    })
  }

  // Info Drawer
  infoDrawerHandlers = {
    showInfoDrawer: (heading, content) => {
      if (heading && content) {
        this.setState(prevState => ({
          infoDrawer: {
            ...prevState.infoDrawer,
            visible: true,
            loading: true,
            heading: heading.toString(),
          },
        }))
        setTimeout(() => {
          this.setState(prevState => ({
            infoDrawer: {
              ...prevState.infoDrawer,
              content: content.toString(),
              loading: false,
            },
          }))
        }, 600)
      } else {
        console.error("Missing Heading and Content on infoDrawerHandlers")
      }
    },
    closeInfoDrawer: () => {
      this.setState(prevState => ({
        infoDrawer: {
          ...prevState.infoDrawer,
          visible: false,
        },
      }))
    },
    makeInfoDrawerActionable: () => {
      this.setState(prevState => ({
        infoDrawer: {
          ...prevState.infoDrawer,
          actionable: true,
        },
      }))
    },
    makeInfoDrawerNotActionable: () => {
      this.setState(prevState => ({
        infoDrawer: {
          ...prevState.infoDrawer,
          actionable: false,
        },
      }))
    },
  }

  render() {
    return (
      <>
        <ReportLayout reportID={this.state.id}>
          <Router basepath="/report">
            <ReportDashboard
              {...this.state}
              {...this.infoDrawerHandlers}
              handleUpdateIDState={this.handleUpdateIDState}
              handleGetDataByID={this.handleGetDataByID}
              handleInteractiveClick={this.handleInteractiveClick}
              handleHideRevenue={this.handleHideRevenue}
              path="/:id"
            />
          </Router>
        </ReportLayout>
        <InfoDrawer
          information={true}
          loading={this.state.infoDrawer.loading}
          content={this.state.infoDrawer.content}
          heading={this.state.infoDrawer.heading}
          active={this.state.infoDrawer.visible ? "active" : ""}
          closeInfoDrawer={this.infoDrawerHandlers.closeInfoDrawer}
        />
      </>
    )
  }
}

export default Report
