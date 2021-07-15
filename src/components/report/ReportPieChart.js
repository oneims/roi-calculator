import React, { Component } from "react"
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { numberWithCommas } from "src/util/helpers"
import styled from "styled-components"

const LegendItemsWrapper = styled.div`
  padding-top: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  @media (min-width: 768px) {
    justify-content: center;
    padding-bottom: 1.75rem;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

const LegendWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 0.9582rem;
  flex: 0 0 auto;
  width: auto;
  margin-right: 1rem;
`

const LegendColumn = styled.div``

const LegendColor = styled.div`
  width: 30px;
  height: 13px;
  border-radius: 4px;
  margin-right: 1rem;
`

const LegendLabel = styled.span``

const COLORS = ["#0155ff", "#6595f8", "#a2c1ff", "#b1cbff"]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const CustomTooltip = ({ payload }) => {
  return (
    <div className="recharts-default-tooltip px-2 py-2 text-color-primary">
      <span>{payload?.[0]?.payload?.name}</span>
      <br />
      <span>${numberWithCommas(payload?.[0]?.payload?.value)}</span>
    </div>
  )
}

class ReportPieChart extends Component {
  render() {
    const { data } = this.props
    return (
      <>
        {data !== null && (
          <div className="pt-4 pb-3">
            <LegendItemsWrapper>
              {data.map((elem, index) => (
                <LegendWrapper key={index}>
                  <LegendColumn>
                    <LegendColor style={{ backgroundColor: COLORS[index] }} />
                  </LegendColumn>
                  <LegendColumn>
                    <LegendLabel>{elem.name}</LegendLabel>
                  </LegendColumn>
                </LegendWrapper>
              ))}
            </LegendItemsWrapper>
            <ResponsiveContainer width="100%" height={550}>
              <PieChart width={1000} height={1000}>
                <Pie
                  nameKey="name"
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={"100%"}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </>
    )
  }
}

export default ReportPieChart
