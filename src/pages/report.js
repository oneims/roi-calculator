import React, { Component } from "react"
import { Router } from "@reach/router"
import ReportLayout from "../components/report/ReportLayout"
// Pages
import ReportDashboard from "../dynamic-components/report/ReportDashboard"
// Axios
import axios from "axios"
import { baseURL } from "../base/axios.js"

export class Report extends Component {
  state = {
    id: null,
    data: null,
    loading: false,
    error: false,
  }

  handleUpdateIDState = id => {
    this.setState({
      id,
    })
  }

  handleGetDataByID = id => {
    this.setState({
      loading: true,
    })

    const timer = 800

    axios
      .get(`${baseURL}/reports?record_uid=${id}`)
      .then(res => {
        console.log(res)
        if (res.data.length > 0) {
          setTimeout(() => {
            this.setState({
              data: res.data,
              loading: false,
            })
          }, timer)
        } else {
          throw new Error(`No report found with id ${id}`)
        }
      })
      .catch(err => {
        setTimeout(() => {
          if (err.response) {
            console.log(err.response.data)
          }
          this.setState({
            error: true,
            loading: false,
          })
        }, timer)
      })
  }

  render() {
    return (
      <ReportLayout>
        <Router basepath="/report">
          <ReportDashboard
            {...this.state}
            handleUpdateIDState={this.handleUpdateIDState}
            handleGetDataByID={this.handleGetDataByID}
            path="/:id"
          />
        </Router>
      </ReportLayout>
    )
  }
}

export default Report
