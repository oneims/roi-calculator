// Helpers

// **Generic Helpers**
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

export const convertToInt = str => {
  str = str.toString()
  const neatStr = str.replace(/[^0-9.-]+/g, "")
  return Number(neatStr)
}

export const convertMBtoInt = str => {
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

export const removeSpecialChars = str => {
  return str.toString().replace(/[^a-z\d\s]+/gi, "")
}

// **Calculations**

// Get Conversion Rate
export const getConversionRate = (monthlyLeads, monthlyTraffic) => {
  const output =
    (convertToInt(monthlyLeads) / convertToInt(monthlyTraffic)) * 100
  return roundToTwoDecimals(output)
}

// // Conversion Rate Projections
// export const getConversionRatePROJECTION = (
//   monthlyLeads,
//   monthlyTraffic,
//   maxLimit
// ) => {
//   const projection = []
//   for (let i = 1; i <= maxLimit; i++) {
//     if (i % 2 == 0) {
//       const updatedMonthlyLeads =
//         (convertToInt(monthlyLeads) * i) / 100 + convertToInt(monthlyLeads)
//       projection.push({
//         [`Monthly Website Leads Increased by ${i}%`]: getConversionRate(
//           updatedMonthlyLeads,
//           monthlyTraffic
//         ),
//       })
//     }
//   }
//   return projection
// }

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
export const getCostPerNewCustomer = (
  monthlyLeadsWebsite,
  monthlyLeadsOther,
  qualifiedLeadsPercentage,
  closeRatio,
  annualBudget
) => {
  const totalLeads =
    convertToInt(monthlyLeadsWebsite) + convertToInt(monthlyLeadsOther)
  const totalLeadsPerYear = totalLeads * 12
  const totalQualifiedLeadsPerYear =
    (totalLeadsPerYear * convertToInt(qualifiedLeadsPercentage)) / 100
  const totalClosedLeadsPerYear =
    (totalQualifiedLeadsPerYear * convertToInt(closeRatio)) / 100
  const costPerCustomer = convertToInt(annualBudget) / totalClosedLeadsPerYear
  return roundToTwoDecimals(costPerCustomer)
}

// **Projections**
export const getProjectionTwoParams = (
  n, // Gets Incremented by 2%
  m, // Second Parameter (number)
  k, // Max Limit
  str, // String which was updated
  cb, // callback to call
  switched // (optional) set to true if params have been switched
) => {
  const projection = []
  for (let i = 1; i <= k; i++) {
    if (i % 2 == 0) {
      const v = (convertToInt(n) * i) / 100 + convertToInt(n)
      projection.push({
        description: `${str} <strong>Increased</strong> By <strong>${i}%</strong>`,
        value: switched ? cb(m, v) : cb(v, m),
      })
    }
  }
  return projection
}
