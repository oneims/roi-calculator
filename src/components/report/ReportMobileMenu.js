import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

const HorizontalWrapper = styled.div`
  padding: 0.5rem 0;
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
  ${props =>
    props.OnlySmall
      ? `
    display: block;
    @media (min-width: 992px) {
      display: none;
    }
    
    `
      : ``}
`

const HorizontalRow = styled.div`
  display: flex;
  font-weight: 600;
  margin-left: -15px;
  margin-right: -15px;
`

const HorizontalChild = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`

const HorizontalItem = styled.div``

const ReportMobileMenu = ({ paths, OnlySmall }) => {
  return (
    <>
      <HorizontalWrapper OnlySmall={OnlySmall}>
        <Container fluid>
          <HorizontalRow>
            {paths.map((elem, index) => (
              <HorizontalChild key={index}>
                <HorizontalItem>
                  <Link
                    className="no-styles"
                    activeClassName="active-link"
                    to={elem.destination}
                  >
                    <span>{elem.label}</span>
                  </Link>
                </HorizontalItem>
              </HorizontalChild>
            ))}
          </HorizontalRow>
        </Container>
      </HorizontalWrapper>
    </>
  )
}

export default ReportMobileMenu
