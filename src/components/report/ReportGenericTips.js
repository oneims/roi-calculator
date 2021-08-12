import React, { Component } from "react"
import parse from "html-react-parser"
// Static Data
import { STATIC_ROI_FACTS } from "src/util/STATIC_Data"
// Components
import {
  ContentCard,
  StyledContentCardSpotlight,
  Button,
  StyledLoaderWrapper,
  StyledLoader,
} from "src/components/StyledElements"
import styled, { css } from "styled-components"

const InfoAlertWrapper = styled.div`
  color: #33475b;
  padding: 1.75rem;
  border: 1px solid #b5bafa;
  background-color: #e5f2ff;
  width: 100%;
  font-weight: 400;
  border-radius: 5px;
  height: 100%;
  border-top: 7px solid #05f;
  font-style: italic;
  margin-bottom: 1.5rem;
`

const InfoAlertContentWrapper = styled.div`
  height: 100%;
`

const InfoAlertContent = styled.div`
  margin-bottom: 0;
  position: relative;
  min-height: 250px;
`

class ReportGenericTips extends Component {
  state = {
    currentFact: 0,
    loading: false,
  }

  handleViewMoreFacts = () => {
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      if (this.state.currentFact !== STATIC_ROI_FACTS.length - 1) {
        this.setState({
          currentFact: this.state.currentFact + 1,
          loading: false,
        })
      } else {
        this.setState({
          currentFact: 0,
          loading: false,
        })
      }
    }, 500)
  }

  render() {
    const { loading } = this.state

    return (
      <>
        <ContentCard
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <StyledContentCardSpotlight
              Gradient
              style={{ position: "relative", textAlign: "center" }}
            >
              ROI Facts
            </StyledContentCardSpotlight>
            <div className="mt-3">
              <InfoAlertWrapper>
                <InfoAlertContentWrapper>
                  <InfoAlertContent>
                    {loading ? (
                      <StyledLoaderWrapper>
                        <StyledLoader />
                      </StyledLoaderWrapper>
                    ) : (
                      parse(STATIC_ROI_FACTS[this.state.currentFact].HTML)
                    )}
                  </InfoAlertContent>
                </InfoAlertContentWrapper>
              </InfoAlertWrapper>
            </div>
          </div>
          <Button
            onClick={this.handleViewMoreFacts}
            className="mt-auto ml-auto mr-auto mb-3"
            Dashboard
            style={{ maxWidth: "200px", width: "auto" }}
          >
            See More
          </Button>
        </ContentCard>
      </>
    )
  }
}

export default ReportGenericTips
