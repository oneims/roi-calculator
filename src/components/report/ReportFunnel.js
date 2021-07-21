import React, { Component } from "react"
import { Funnel } from "funnel-react-2"
import { ContentCard } from "src/components/StyledElements"
import { Theme } from "src/styles/ThemeConfig"
import { removeSpecialChars, numberWithCommas } from "src/util/helpers"
const { colors } = Theme

class ReportFunnel extends Component {
  render() {
    const { data } = this.props

    return (
      <>
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
      </>
    )
  }
}

export default ReportFunnel
