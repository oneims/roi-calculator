// Helpers

// **Form Field Validator
export const checkAllValid = (validator, fieldName, callback) => {
  validator.showMessageFor(fieldName)
  setTimeout(() => {
    // console.log(validator.allValid())
    if (validator.allValid()) {
      callback(true)
    } else {
      callback(false)
    }
  }, 50)
}

// **Generic Helpers**

export const generateToken = length => {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_".split(
    ""
  )
  var b = []
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0)
    b[i] = a[j]
  }
  return b.join("")
}

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
  if (str) {
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
    // console.log(convertToInt(str))
    return convertToInt(str)
  }
}

export const roundToTwoDecimals = n => {
  return Number(Math.round(n * 100) / 100)
}

export const removeSpecialChars = str => {
  if (str) {
    return str.toString().replace(/[^.a-z\d\s]+/gi, "")
  }
}

export const numberWithCommas = x => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
}

// Print Industry Neatly
export const printIndustryNeatly = str => {
  return str
    .split("_")
    .map(elem => capitalizeFirstLetter(elem))
    .join(" ")
    .split("+")
    .map(elem => capitalizeFirstLetter(elem))
    .join("/")
}

// Print Company Size in Annual Revenue neatly
export const printCompanySizeAnnualRevenueNeatly = str => {
  str = str.split("_")
  str = str.slice(Math.max(str.length - 4, 1))
  str = str.join(" ").replace(" m", " million")
  return str
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

export const getDifferenceBetweenCurrentAndTargetRevenue = (ca, ga) => {
  const differenceBetweenRevenues = convertMBtoInt(ga) - convertMBtoInt(ca)
  return roundToTwoDecimals(differenceBetweenRevenues)
}

export const getDifferenceBetweenTargetRevenueAndNewCustomers = (
  newCustomers,
  revenuePerCustomer,
  revenueGoal
) => {
  const revenueFromCustomers =
    convertToInt(newCustomers) * removeSpecialChars(revenuePerCustomer)
  const difference = convertMBtoInt(revenueGoal) - revenueFromCustomers
  return roundToTwoDecimals(difference)
}

// export const getCustomersNeededForRevenueTargetPerMonth = (
//   revenuePerCustomer,
//   revenueGoalAnnual,
//   currentRevenueAnnual,
//   targetDate
// ) => {
//   const differenceBetweenRevenues =
//     convertMBtoInt(revenueGoalAnnual) - convertMBtoInt(currentRevenueAnnual)
//   const customersNeeded =
//     differenceBetweenRevenues / convertToInt(revenuePerCustomer)
//   return roundToTwoDecimals(customersNeeded)
// }

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

// Get Company Size In Revenue

export const getCompanySizeInRevenue = string => {
  string = convertMBtoInt(string)
  if (string < 1000000) {
    return "company_has_annual_revenue_less_than_1_m"
  } else if (string > 1000000 && string < 10000000) {
    return "company_has_annual_revenue_less_than_10_m"
  } else if (string > 10000000 && string < 500000000) {
    return "company_has_annual_revenue_less_than_500_m"
  } else {
    return "company_has_annual_revenue_greater_than_500_m"
  }
}

// Convert ISO Date to Date Object
export const parseISOString = s => {
  const b = s.split(/\D+/)
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]))
}

// Get difference in months for two date objects
export const getDifferenceInMonths = (dateFrom, dateTo) => {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  )
}

// Budget Optimizer

export const budgetOptimizer = budget => {
  budget = convertToInt(budget)
  const allocation = {
    SEO: 40,
    "Content Marketing": 28,
    "Paid Media": 22,
    "Social Promotion": 10,
  }
  const output = []

  for (const key of Object.keys(allocation)) {
    output.push({
      name: key,
      value: Math.floor((allocation[key] * budget) / 100),
    })
  }
  return output
}

// Optimized Funnel

export const createFunnel = (
  websiteTraffic,
  conversionRate,
  qualifiedLeadsPercentage,
  closeRatio
) => {
  websiteTraffic = convertToInt(removeSpecialChars(websiteTraffic))
  conversionRate = convertToInt(removeSpecialChars(conversionRate))
  qualifiedLeadsPercentage = convertToInt(
    removeSpecialChars(qualifiedLeadsPercentage)
  )
  closeRatio = convertToInt(removeSpecialChars(closeRatio))

  const average_monthly_leads_from_website_OPTIMIZED = Math.ceil(
    (websiteTraffic * conversionRate) / 100
  )
  const average_qualified_leads_per_month_OPTIMIZED = Math.ceil(
    (average_monthly_leads_from_website_OPTIMIZED * qualifiedLeadsPercentage) /
      100
  )
  const average_new_customers_per_month_OPTIMIZED = Math.ceil(
    (average_qualified_leads_per_month_OPTIMIZED * closeRatio) / 100
  )

  const output = [
    {
      name: "average_monthly_website_traffic_OPTIMIZED",
      label: "Website Traffic",
      value: websiteTraffic,
    },
    {
      name: "average_monthly_leads_from_website_OPTIMIZED",
      label: "Website Conversions",
      value: average_monthly_leads_from_website_OPTIMIZED,
    },
    {
      name: "average_qualified_leads_per_month_OPTIMIZED",
      label: "Qualified Leads",
      value: average_qualified_leads_per_month_OPTIMIZED,
    },
    {
      name: "average_new_customers_per_month_OPTIMIZED",
      label: "Deals Won",
      value: average_new_customers_per_month_OPTIMIZED,
    },
  ]
  return output
}

export const createOptimizedFunnel = (
  websiteTraffic,
  conversionRate,
  qualifiedLeadsPercentage,
  closeRatio,
  targetCustomers
) => {
  websiteTraffic = convertToInt(removeSpecialChars(websiteTraffic))
  conversionRate = convertToInt(removeSpecialChars(conversionRate))
  qualifiedLeadsPercentage = convertToInt(
    removeSpecialChars(qualifiedLeadsPercentage)
  )
  closeRatio = convertToInt(removeSpecialChars(closeRatio))
  targetCustomers = convertToInt(removeSpecialChars(targetCustomers))

  const loopThreshold = 200

  const currentFunnel = createFunnel(
    websiteTraffic,
    conversionRate,
    qualifiedLeadsPercentage,
    closeRatio
  )

  let optimizedFunnel = createFunnel(
    websiteTraffic,
    conversionRate,
    qualifiedLeadsPercentage,
    closeRatio
  )

  optimizedFunnel.updatedInputs = {
    websiteTraffic: {
      oldValue: websiteTraffic,
      newValue: websiteTraffic,
    },
    conversionRate: {
      oldValue: conversionRate,
      newValue: conversionRate,
    },
    qualifiedLeadsPercentage: {
      oldValue: qualifiedLeadsPercentage,
      newValue: qualifiedLeadsPercentage,
    },
    closeRatio: {
      oldValue: closeRatio,
      newValue: closeRatio,
    },
  }

  let wtIncremental = 0
  let crIncremental = 0
  let qlIncremental = 0
  for (let i = 0; i < loopThreshold; i++) {
    if (optimizedFunnel[optimizedFunnel.length - 1].value <= targetCustomers) {
      const rndInt = Math.floor(Math.random() * 1) + 1
      wtIncremental = wtIncremental + (websiteTraffic / 100) * rndInt
      crIncremental = crIncremental + (conversionRate / 100) * rndInt
      qlIncremental = qlIncremental + (qualifiedLeadsPercentage / 100) * rndInt
      optimizedFunnel = createFunnel(
        websiteTraffic + wtIncremental,
        conversionRate + crIncremental,
        qualifiedLeadsPercentage + qlIncremental,
        closeRatio
      )
      optimizedFunnel.updatedInputs = {
        websiteTraffic: {
          oldValue: websiteTraffic,
          newValue: roundToTwoDecimals(websiteTraffic + wtIncremental),
        },
        conversionRate: {
          oldValue: conversionRate,
          newValue: roundToTwoDecimals(conversionRate + crIncremental),
        },
        qualifiedLeadsPercentage: {
          oldValue: qualifiedLeadsPercentage,
          newValue: roundToTwoDecimals(
            qualifiedLeadsPercentage + qlIncremental
          ),
        },
        closeRatio: {
          oldValue: closeRatio,
          newValue: closeRatio,
        },
      }
    }
  }

  for (let i = 0; i < optimizedFunnel.length; i++) {
    optimizedFunnel[i].originalValue = currentFunnel[i].value
    const difference =
      optimizedFunnel[i].value - optimizedFunnel[i].originalValue
    const change = (difference / optimizedFunnel[i].originalValue) * 100
    optimizedFunnel[i].description = `Increased ${
      optimizedFunnel[i].label
    } by ${roundToTwoDecimals(change)}%`
    optimizedFunnel[i].percentageChange =
      change > 0 ? roundToTwoDecimals(change) : 0
  }

  return optimizedFunnel
}

export const reCreateFunnel = (
  websiteTraffic,
  conversionRate,
  qualifiedLeadsPercentage,
  closeRatio,
  data
) => {
  websiteTraffic = convertToInt(removeSpecialChars(websiteTraffic))
  conversionRate = convertToInt(removeSpecialChars(conversionRate))
  qualifiedLeadsPercentage = convertToInt(
    removeSpecialChars(qualifiedLeadsPercentage)
  )
  closeRatio = convertToInt(removeSpecialChars(closeRatio))

  const reCreatedFunnel = createFunnel(
    websiteTraffic,
    conversionRate,
    qualifiedLeadsPercentage,
    closeRatio
  )

  reCreatedFunnel.updatedInputs = {
    websiteTraffic: {
      oldValue: data.updatedInputs.websiteTraffic.oldValue,
      newValue: websiteTraffic,
    },
    conversionRate: {
      oldValue: data.updatedInputs.conversionRate.oldValue,
      newValue: conversionRate,
    },
    qualifiedLeadsPercentage: {
      oldValue: data.updatedInputs.qualifiedLeadsPercentage.oldValue,
      newValue: qualifiedLeadsPercentage,
    },
    closeRatio: {
      oldValue: data.updatedInputs.closeRatio.oldValue,
      newValue: closeRatio,
    },
  }

  for (let i = 0; i < reCreatedFunnel.length; i++) {
    const difference = reCreatedFunnel[i].value - data[i].originalValue
    const change = (difference / data[i].originalValue) * 100
    reCreatedFunnel[i].originalValue = data[i].originalValue
    reCreatedFunnel[i].description = `Increased ${
      reCreatedFunnel[i].label
    } by ${roundToTwoDecimals(change)}%`
    reCreatedFunnel[i].percentageChange =
      roundToTwoDecimals(change) !== undefined ? roundToTwoDecimals(change) : 0
  }

  return reCreatedFunnel
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

export const getProjectionTwoParamsGraph = (
  n, // Gets Incremented by 2%
  m, // Second Parameter (number)
  k, // Max Limit
  str, // String which was updated
  cb, // callback to call,
  switched // (optional) set to true if params have been switched
) => {
  const projection = []
  for (let i = 1; i <= k; i++) {
    if (i % 2 == 0) {
      const v = (convertToInt(n) * i) / 100 + convertToInt(n)
      projection.push({
        name: `${str} Up By ${i}%`,
        Traffic: switched ? cb(m, v) : cb(v, m),
      })
    }
  }
  return projection
}

export const PROJECTChangeInMonthlyTraffic = (
  currentMonthlyTraffic,
  currentConversionRate,
  maxLimit
) => {
  const projection = []
  for (let i = 1; i <= maxLimit; i++) {
    if (i % 2 == 0) {
      const changeInTraffic =
        (convertToInt(currentMonthlyTraffic) * i) / 100 +
        convertToInt(currentMonthlyTraffic)
      const v = (changeInTraffic * convertToInt(currentConversionRate)) / 100
      projection.push({
        name: `Traffic Up By ${i}%`,
        Leads: Math.floor(v),
      })
    }
  }
  return projection
}

export const getProjectionsForRevenue = (
  websiteTraffic,
  conversionRate,
  qualifiedLeadsPercentage,
  closeRatio,
  revenuePerCustomer,
  currentRevenue
) => {
  let data
  const originalRevenue = currentRevenue

  const revenueCalculator = arr => {
    arr.push(
      {
        name: "net_revenue",
        label: "Net Revenue",
        value: Math.floor(arr[3].value * convertToInt(revenuePerCustomer)),
      },
      {
        name: "change_in_revenue",
        label: "Change in Revenue",
        value: roundToTwoDecimals(
          Math.floor(arr[3].value * convertToInt(revenuePerCustomer)) -
            originalRevenue
        ),
      }
    )
  }

  // Conversion Rate Increase
  const conversionRateIncrease = createFunnel(
    websiteTraffic,
    Number(conversionRate + 1),
    qualifiedLeadsPercentage,
    closeRatio
  )
  revenueCalculator(conversionRateIncrease)

  // Traffic Increase
  const trafficIncrease = createFunnel(
    roundToTwoDecimals(
      convertToInt(websiteTraffic) + (convertToInt(websiteTraffic) * 30) / 100
    ),
    conversionRate,
    qualifiedLeadsPercentage,
    closeRatio
  )
  revenueCalculator(trafficIncrease)

  const trafficAndConversionIncrease = createFunnel(
    roundToTwoDecimals(
      convertToInt(websiteTraffic) + (convertToInt(websiteTraffic) * 30) / 100
    ),
    Number(conversionRate + 1),
    qualifiedLeadsPercentage,
    closeRatio
  )

  revenueCalculator(trafficAndConversionIncrease)

  // Multiple Conversion Increase Revenue Projection
  const MULTIPLE_conversion_increase = () => {
    let multipleConversionRateProjections = []
    let counter = 0.25
    for (let i = 0; i < 10; i++) {
      let crIncremental = createFunnel(
        websiteTraffic,
        Number(conversionRate + counter),
        qualifiedLeadsPercentage,
        closeRatio
      )
      revenueCalculator(crIncremental)
      counter = counter + 0.25
      crIncremental.push({
        name: "change_in_conversion_rate",
        label: "Change in Conversion Rate",
        value: counter,
      })
      multipleConversionRateProjections.push(crIncremental)
    }
    return multipleConversionRateProjections
  }

  // Multiple Traffic Increase Revenue Projection
  const MULTIPLE_traffic_increase = () => {
    let multipleTrafficIncreaseProjections = []
    let counter = 5
    for (let i = 0; i < 10; i++) {
      let trafficIncremental = createFunnel(
        roundToTwoDecimals(
          convertToInt(websiteTraffic) +
            (convertToInt(websiteTraffic) * counter) / 100
        ),
        conversionRate,
        qualifiedLeadsPercentage,
        closeRatio
      )
      revenueCalculator(trafficIncremental)
      counter = counter + 5
      trafficIncremental.push({
        name: "change_in_traffic_percentage",
        label: "Change in Traffic Percentage",
        value: counter,
      })
      multipleTrafficIncreaseProjections.push(trafficIncremental)
    }
    return multipleTrafficIncreaseProjections
  }

  data = {
    cr_increase: conversionRateIncrease,
    traffic_increase: trafficIncrease,
    cr_and_traffic_increase: trafficAndConversionIncrease,
    cr_increase_MULTIPLE: MULTIPLE_conversion_increase(),
    traffic_increase_MULTIPLE: MULTIPLE_traffic_increase(),
  }

  return data
}
