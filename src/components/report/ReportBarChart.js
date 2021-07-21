import React, { Component } from "react"
import {
  BarChart,
  Bar,
  Cell,
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
        <div className="pt-4 pb-0">
          <ResponsiveContainer width="100%" height={450}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 45,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" dy={20} />
              <YAxis dx={-20} />
              <Tooltip
                cursor={{ fill: "#eeeeeebf" }}
                formatter={value => new Intl.NumberFormat("en").format(value)}
              />
              <Legend />
              <Bar dataKey="Industry" stackId="a" fill="#81c1fd" />
              <Bar dataKey="Yours" stackId="b" fill="#05f" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </>
    )
  }
}

export default ReportLineGraph
