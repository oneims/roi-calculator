import React, { Component } from "react"

export class StateViewer extends Component {
  render() {
    const { companySize, companyName, companyCity, companyState } = this.props
    return (
      <div>
        <h1>Global State Viewer</h1>
        <p>Company Size: {companySize}</p>
        <p>Company Name: {companyName}</p>
        <p>Company City: {companyCity}</p>
        <p>Company State: {companyState}</p>
      </div>
    )
  }
}

export default StateViewer
