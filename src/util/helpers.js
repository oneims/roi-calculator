// Helpers
export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const checkValidObjectProperties = obj => {
  for (const key of Object.keys(obj)) {
    if (
      obj[key] === "" ||
      obj[key] === " Million" ||
      obj[key] === " Billion" ||
      obj[key] === " Months" ||
      obj[key] === " Years"
    )
      return false
  }
  return true
}

// Calculations

export const convertToInt = str => {
  str = str.toString()
  const neatStr = str.replace(/[^0-9.-]+/g, "")
  return Number(neatStr)
}

const convertMBtoInt = str => {
  const arr = str.split(" ")
  const abbreviation = arr.pop()
  let zeroesInMillion = "000000"
  let zeroesInBillion = "000000000"
  let zeroesUsed = arr[0].includes(".") ? arr[0].split(".")[1].length : ``
  let zeroesToAdd = ""
  if (abbreviation === "Million") {
    for (let i = 0; i < zeroesInMillion.length - zeroesUsed; i++) {
      zeroesToAdd += "0"
    }
  } else {
    for (let i = 0; i < zeroesInBillion.length - zeroesUsed; i++) {
      zeroesToAdd += "0"
    }
  }
  arr.push(zeroesToAdd)
  str = arr.join("")
  str = str.replace(".", "")
  return convertToInt(str)
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

// Get Cost Per Lead
export const getCostPerLead = (
  monthlyLeadsWebsite,
  monthlyLeadsOther,
  annualBudget
) => {
  const totalLeads =
    convertToInt(monthlyLeadsWebsite) + convertToInt(monthlyLeadsOther)
  const totalLeadsPerYear = totalLeads * 12
  const cpl = convertToInt(annualBudget) / totalLeadsPerYear
  return roundToTwoDecimals(cpl)
}

// Get New Customers Needed to Reach Revenue Target
export const getCustomersNeededForRevenueTarget = (
  revenuePerCustomer,
  revenueGoalAnnual,
  currentRevenueAnnual
) => {
  const differenceBetweenRevenues =
    convertMBtoInt(revenueGoalAnnual) - convertMBtoInt(currentRevenueAnnual)
  const customersNeeded =
    differenceBetweenRevenues / convertToInt(revenuePerCustomer)
  return roundToTwoDecimals(customersNeeded)
}

// Get Cost Per New Customer
export const getCostPerNewCusomter = (
  monthlyLeadsWebsite,
  monthlyLeadsOther,
  qualifiedLeadsPercentage,
  closeRatio
) => {
  const totalLeads =
    convertToInt(monthlyLeadsWebsite) + convertToInt(monthlyLeadsOther)
  const totalQualifiedLeads =
    (totalLeads * convertToInt(qualifiedLeadsPercentage)) / 100
  const totalClosedLeads =
    (totalQualifiedLeads * convertToInt(closeRatio)) / 100
}
