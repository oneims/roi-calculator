import parse from "html-react-parser"
import React from "react"
import InfoAlert from "src/components/InfoAlert"
import {
  TintedBackground,
  Button,
  StyledInfoDrawer,
  StyledInfoDrawerBody,
  StyledInfoDrawerCloseButton,
  StyledInfoDrawerCloseButtonWrapper,
  StyledInfoDrawerFooter,
  StyledInfoDrawerFooterContent,
  StyledInfoDrawerHeader,
  StyledInfoDrawerWrapper,
  StyledLoader,
  StyledLoaderWrapper,
  StyledInfoText,
  FormWrapper,
  Label,
  StyledField,
  StyledFieldWrapper,
  StyledFormWrapper,
  StyledInput,
} from "src/components/StyledElements"

const InfoDrawer = ({
  active,
  closeInfoDrawer,
  handleChange,
  email_address,
  information,
  heading,
  content,
  loading,
  handleSubmit,
  hasEmail,
  canSubmit,
  error,
  errorResponse,
  success,
}) => {
  return (
    <>
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
            <StyledInfoDrawerBody SetMinHeight>
              {loading ? (
                <StyledLoaderWrapper>
                  <StyledLoader />
                </StyledLoaderWrapper>
              ) : (
                <InfoAlert NoFigure>{content && parse(content)}</InfoAlert>
              )}
            </StyledInfoDrawerBody>
            <StyledInfoDrawerFooter>
              <StyledInfoDrawerFooterContent>
                <Button
                  onClick={closeInfoDrawer}
                  className="ml-auto mr-auto mb-2 mt-2"
                  Dashboard
                >
                  Close
                </Button>
              </StyledInfoDrawerFooterContent>
            </StyledInfoDrawerFooter>
          </StyledInfoDrawerWrapper>
        </StyledInfoDrawer>
      ) : (
        <>
          <TintedBackground className={active ? "active" : ""} />
          <StyledInfoDrawer Left className={active ? "active" : ""}>
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
              <StyledInfoDrawerBody SetMinHeight>
                <FormWrapper>
                  <StyledFormWrapper NoMinHeight>
                    <StyledFieldWrapper>
                      <StyledField>
                        <Label htmlFor="email_address" className="mb-0">
                          Email Address
                        </Label>
                        {hasEmail ? (
                          <StyledInfoText className="mb-2">
                            You can update your email address below or send the
                            email again
                          </StyledInfoText>
                        ) : (
                          <StyledInfoText className="mb-2">
                            Enter your email address
                          </StyledInfoText>
                        )}
                        <StyledInput TextField>
                          <input
                            required
                            name="email_address"
                            value={email_address}
                            onChange={handleChange}
                          />
                        </StyledInput>
                      </StyledField>
                    </StyledFieldWrapper>
                  </StyledFormWrapper>
                  {success && (
                    <InfoAlert NoFigure>
                      <strong>Great!</strong> You will be receiving an email
                      shortly!
                    </InfoAlert>
                  )}
                  {error && (
                    <InfoAlert NoFigure Warning>
                      <strong>Oops, something went wrong!</strong> Please check
                      and confirm that your email is formatted correctly and try
                      again.
                      {errorResponse && (
                        <>
                          <br />
                          <br />
                          <span className="validation-error">
                            Error Response: <strong>{errorResponse}</strong>
                          </span>
                        </>
                      )}
                    </InfoAlert>
                  )}
                </FormWrapper>
                {loading && (
                  <StyledLoaderWrapper WhiteLess Fixed>
                    <StyledLoader />
                  </StyledLoaderWrapper>
                )}
              </StyledInfoDrawerBody>
              <StyledInfoDrawerFooter>
                <StyledInfoDrawerFooterContent>
                  <Button
                    onClick={handleSubmit}
                    className={`ml-auto mr-auto mb-2 mt-2 ${
                      !canSubmit && "disabled"
                    }`}
                    Dashboard
                  >
                    Submit
                  </Button>
                </StyledInfoDrawerFooterContent>
              </StyledInfoDrawerFooter>
            </StyledInfoDrawerWrapper>
          </StyledInfoDrawer>
        </>
      )}
    </>
  )
}

export default InfoDrawer
