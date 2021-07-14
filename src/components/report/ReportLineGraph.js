import React, { Component } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

class ReportLineGraph extends Component {
  render() {
    const { data } = this.props

    // console.log(data)

    return (
      <>
        {data !== null && (
          <div className="pt-4 pb-0">
            <ResponsiveContainer width="98%" height={350}>
              <LineChart
                width={550}
                height={300}
                data={data}
                margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#05f"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </>
    )
  }
}

export default ReportLineGraph
