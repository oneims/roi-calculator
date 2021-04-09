import React from "react"
import styled from "styled-components"
import { Button } from "./StyledElements"

const StyledSaver = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-top: 2px solid rgb(234, 240, 246);
  background-color: #fff;
  padding-left: 40px;
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
`

const Saver = props => {
  return (
    <>
      <StyledSaver className={props.className}>
        <StyledSaverWrapper>
          <Button Dashboard className="mr-3" onClick={props.handleSubmit}>
            Save
          </Button>
          <Button
            onClick={props.handleCancel}
            className="mr-3"
            Dashboard
            Secondary
          >
            Cancel
          </Button>
          <p className="mb-0">
            You have changes pending. Save your changes to avoid losing them!
          </p>
        </StyledSaverWrapper>
      </StyledSaver>
    </>
  )
}
export default Saver
