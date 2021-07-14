import React, { Component } from "react"
import { Funnel } from "funnel-react-2"
import { ContentCard } from "src/components/StyledElements"
import { Theme } from "src/styles/ThemeConfig"
import { removeSpecialChars, numberWithCommas } from "src/util/helpers"
const { colors } = Theme

class ReportFunnel extends Component {
  render() {
    const {
      average_monthly_website_traffic,
      average_monthly_leads_from_website,
      average_qualified_leads_per_month,
      average_new_customers_per_month,
    } = this.props

    let data

    if (average_monthly_leads_from_website !== null) {
      data = [
        {
          _id: "5de52b4ac4275a463f912042",
          item: "website_traffic",
          label: "Website Traffic",
          quantity: Number(removeSpecialChars(average_monthly_website_traffic)),
        },
        {
          _id: "5de52b4ac4275a463f912041",
          item: "website_conversion",
          label: "Website Conversion",
          quantity: Number(
            removeSpecialChars(average_monthly_leads_from_website)
          ),
        },
        {
          _id: "5de52b4ac4275a463f912040",
          item: "qualified_leads",
          label: "Qualified Leads",
          quantity: Number(
            removeSpecialChars(average_qualified_leads_per_month)
          ),
        },
        {
          _id: "5de52b4ac4275a463f91203f",
          item: "deals_won",
          label: "Deals Won",
          quantity: Number(removeSpecialChars(average_new_customers_per_month)),
        },
      ]
    }

    return (
      <>
        {average_monthly_leads_from_website !== null && (
          <ContentCard className="p-0 dashboard-funnel">
            <Funnel
              labelKey="label"
              height={300}
              colors={{
                graph: ["#1890FF", "#BAE7FF"],
                label: "black",
                value: "blue",
              }}
              valueKey="quantity"
              width={800}
              responsive={true}
              displayPercent={false}
              renderLabel={(index, value) => {
                return (
                  <>
                    <span style={{ fontSize: 20, fontWeight: 700 }}>
                      {" "}
                      {value}{" "}
                    </span>
                  </>
                )
              }}
              renderValue={(index, value) => {
                return (
                  <>
                    <span style={{ color: colors.primary, fontWeight: 700 }}>
                      {" "}
                      {numberWithCommas(value)}
                    </span>
                  </>
                )
              }}
              renderPercentage={(index, value) => {
                return <span style={{ color: "#fff" }}> {value} </span>
              }}
              data={data}
            />
          </ContentCard>
        )}
      </>
    )
  }
}

export default ReportFunnel
