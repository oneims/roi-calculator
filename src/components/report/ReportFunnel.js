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
        <ContentCard
          style={{ minHeight: 470 }}
          className={`p-0 dashboard-funnel ${this.props.className}`}
        >
          <Funnel
            key={this.props.interactive_key}
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
                    {value}
                    {data[index].description && (
                      <div className="mb-2">
                        <span className="funnel-info-text">
                          {data[index].description}
                        </span>
                        {data[index].percentageChange && (
                          <span
                            className={`funnel-info-text ${
                              Number(
                                data[index].percentageChange
                                  .replace("Increase by ", "")
                                  .replace("Decrease by ")
                                  .replace("%", "")
                              ) > 0
                                ? `text-success`
                                : `text-danger`
                            }`}
                          >
                            {data[index].percentageChange} <br />
                          </span>
                        )}
                      </div>
                    )}
                  </span>
                </>
              )
            }}
            renderValue={(index, value) => {
              return (
                <>
                  {index === data.length - 1 && (
                    <button
                      type="button"
                      className="funnel-button"
                      onClick={this.props.handleHideRevenue}
                    >
                      {data.length === 4 ? `Show` : `Hide`} Revenue
                    </button>
                  )}
                  <span style={{ color: colors.primary, fontWeight: 700 }}>
                    {" "}
                    {index === 4
                      ? `$${numberWithCommas(Math.floor(value))}`
                      : numberWithCommas(Math.floor(value))}
                  </span>
                  {data[index].interactiveValue && (
                    <div className="interactive-tip__wrapper mt-3">
                      <div className="interactive-tip__symbol-wrapper interactive-tip__symbol-wrapper-left">
                        <div
                          data-intent="negative"
                          data-index={index}
                          data-item={data[index].interactiveLabelName}
                          data-value={data[index].interactiveValue}
                          onClick={this.props.handleInteractiveClick}
                          className="interactive-tip__symbol"
                        >
                          -
                        </div>
                      </div>
                      <div className="interactive-tip__value-wrapper">
                        <div className="interactive-tip__value">
                          {data[index].interactiveLabel}
                          <span className="text-color-primary">
                            {data[index].interactiveValue}
                          </span>
                        </div>
                      </div>
                      <div className="interactive-tip__symbol-wrapper interactive-tip__symbol-wrapper-right">
                        <div
                          className="interactive-tip__symbol"
                          data-intent="positive"
                          data-index={index}
                          data-item={data[index].interactiveLabelName}
                          data-value={data[index].interactiveValue}
                          onClick={this.props.handleInteractiveClick}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  )}
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
