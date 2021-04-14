import React from "react"
import styled from "styled-components"

const StyledContainer = styled.section`
  max-width: 1040px; // large
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`

const Container = ({ className, children }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container