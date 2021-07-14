import React, { Component } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts"

class ReportLineGraph extends Component {
  render() {
    const { data } = this.props

    // console.log(data)

    return (
      <>
        {data !== null && (
          <div className="pt-4 pb-0">
            <ResponsiveContainer width="100%" height={450}>
              <AreaChart
                width={500}
                height={600}
                data={data}
                margin={{
                  top: 0,
                  right: 16,
                  left: 0,
                  bottom: 72,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d9edff" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#1b91ff" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" dy={20}>
                  <Label
                    value="Increase in Monthly Website Traffic"
                    offset={45}
                    position="bottom"
                    style={{ fontWeight: 700, fontSize: 13 }}
                    margin={{
                      top: 16,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  />
                </XAxis>
                <YAxis orientation="left" dx={-20} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Leads"
                  stroke="#0055ffc7"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </>
    )
  }
}

export default ReportLineGraph
