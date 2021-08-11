import React from "react"
import {
  StyledInfoDrawer,
  StyledInfoDrawerWrapper,
  StyledInfoDrawerHeader,
  StyledInfoDrawerBody,
  StyledInfoDrawerFooter,
  StyledInfoDrawerCloseButtonWrapper,
  StyledInfoDrawerCloseButton,
  TintedBackground,
  StyledLoaderWrapper,
  StyledLoader,
} from "src/components/StyledElements"
import InfoAlert from "src/components/InfoAlert"
import parse from "html-react-parser"

const InfoDrawer = ({
  active,
  closeInfoDrawer,
  information,
  heading,
  content,
  loading,
}) => {
  return (
    <>
      {/* <TintedBackground className={active ? "active" : ""} /> */}
      {information ? (
        <StyledInfoDrawer className={active ? "active" : ""}>
          <StyledInfoDrawerWrapper>
            <StyledInfoDrawerHeader>
              <div>
                <h2 className="h4 mb-0 f-600">{heading}</h2>
              </div>
              <StyledInfoDrawerCloseButtonWrapper>
                <StyledInfoDrawerCloseButton onClick={closeInfoDrawer}>
                  <figure>
                    <svg
                      className="x-29px_svg__svgIcon-use"
                      width="29"
                      height="29"
                    >
                      <path
                        d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </figure>
                </StyledInfoDrawerCloseButton>
              </StyledInfoDrawerCloseButtonWrapper>
            </StyledInfoDrawerHeader>
            <StyledInfoDrawerBody>
              {loading ? (
                <StyledLoaderWrapper>
                  <StyledLoader />
                </StyledLoaderWrapper>
              ) : (
                <InfoAlert NoFigure>{content && parse(content)}</InfoAlert>
              )}
            </StyledInfoDrawerBody>
            <StyledInfoDrawerFooter></StyledInfoDrawerFooter>
          </StyledInfoDrawerWrapper>
        </StyledInfoDrawer>
      ) : (
        <StyledInfoDrawer className={active ? "active" : ""}>
          <StyledInfoDrawerWrapper>
            <StyledInfoDrawerHeader>
              <div>
                <h2 className="h4 mb-0 f-600">Email Me This Report</h2>
              </div>
              <StyledInfoDrawerCloseButtonWrapper>
                <StyledInfoDrawerCloseButton onClick={closeInfoDrawer}>
                  <figure>
                    <svg
                      className="x-29px_svg__svgIcon-use"
                      width="29"
                      height="29"
                    >
                      <path
                        d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </figure>
                </StyledInfoDrawerCloseButton>
              </StyledInfoDrawerCloseButtonWrapper>
            </StyledInfoDrawerHeader>
            <StyledInfoDrawerBody>
              <strong>
                TO:DO <br /> Add Email Fields Here
              </strong>
            </StyledInfoDrawerBody>
            <StyledInfoDrawerFooter></StyledInfoDrawerFooter>
          </StyledInfoDrawerWrapper>
        </StyledInfoDrawer>
      )}
    </>
  )
}

export default InfoDrawer
