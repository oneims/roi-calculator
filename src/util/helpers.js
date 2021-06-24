// Helpers
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const convertToInt = str => {
  str = str.toString()
  const neatStr = str.replace(/[^0-9.-]+/g, "")
  return Number(neatStr)
}

export const roundToTwoDecimals = n => {
  return Number(Math.round(n * 100) / 100)
}

// Get Conversion Rate
export const getConversionRate = (monthlyLeads, monthlyTraffic) => {
  const output =
    (convertToInt(monthlyLeads) / convertToInt(monthlyTraffic)) * 100
  return roundToTwoDecimals(output)
}

// Get Average Qualified Leads Per Month
export const getAverageQualifiedLeadsMonth = (
  monthlyLeads,
  percentageOfQualifiedLeads
) => {
  const output =
    (convertToInt(monthlyLeads) * convertToInt(percentageOfQualifiedLeads)) /
    100
  return roundToTwoDecimals(output)
}

// Get Average New Customers Per Month
export const getAverageNewCustomersMonth = (qualifiedLeads, closeRate) => {
  const output = (convertToInt(qualifiedLeads) * convertToInt(closeRate)) / 100
  return roundToTwoDecimals(output)
}

// Get Average Monthly Online Marketing Investment
export const getOnlineMarketingInvestmentMonthly = (
  marketingBudget,
  onlineBudget
) => {
  const output =
    (convertToInt(marketingBudget) * convertToInt(onlineBudget)) / 100
  return roundToTwoDecimals(output / 12)
}

// Get Averge Cost Per Lead
export const getAverageCostPerLead = (marketingInvestment, monthlyLeads) => {
  const output = convertToInt(marketingInvestment) / convertToInt(monthlyLeads)
  return roundToTwoDecimals(output)
}

// Get Cost Per Customer Acquisition
export const getCostPerCustomerAcquisition = (onlineBudget, newCustomers) => {
  const output = convertToInt(onlineBudget) / convertToInt(newCustomers)
  return roundToTwoDecimals(output)
}

// Get Net New Revenue
export const getNetNewRevenue = (newCustomers, revenuePerCustomer) => {
  const output = convertToInt(newCustomers) * convertToInt(revenuePerCustomer)
  return roundToTwoDecimals(output)
}

// TODO:::

// Get Cost Per Lead
// budget = current_annual_marketing_budget
// total leads = average_monthly_leads_from_website + average_monthly_leads_from_all_other_sources
// cpl = (budget / total leads) / 12
