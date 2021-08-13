import React from "react"
import styled from "styled-components"
import { Button, StyledToolTip } from "src/components/StyledElements"
import ReactTooltip from "react-tooltip"

const StyledSaver = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-top: 2px solid rgb(234, 240, 246);
  background-color: #fff;
  @media (min-width: 768px) {
    padding-left: 40px;
  }
  padding-top: 20px;
  z-index: 9999;
  padding-bottom: 20px;
  font-weight: 500;
  transition: 0.3s ease;
  transform: translateY(100%);
  pointer-events: none;
  &.active {
    transition: 0.3s ease;
    transform: translateY(0%);
    pointer-events: all;
  }
`
const StyledSaverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const Saver = props => {
  return (
    <>
      <StyledSaver className={props.className}>
        <StyledSaverWrapper>
          {props.disabled ? (
            <>
              <StyledToolTip data-tip="Some fields are empty">
                <Button
                  Dashboard
                  className="mr-3 disabled"
                  onClick={props.handleSubmit}
                >
                  Save
                </Button>
              </StyledToolTip>
              <ReactTooltip place="top" type="dark" effect="solid" />
            </>
          ) : (
            <Button Dashboard className="mr-3" onClick={props.handleSubmit}>
              Save
            </Button>
          )}
          <Button
            onClick={props.handleCancel}
            className="mr-md-3"
            Dashboard
            Secondary
          >
            Cancel
          </Button>
          <p className="mb-0 show-after-768">
            You have changes pending. Save your changes to avoid losing them!
          </p>
        </StyledSaverWrapper>
      </StyledSaver>
    </>
  )
}
export default Saver
