import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from '../components/grid'

import AccordionWrapper from '../components/accordion/accordionWrapper'
import Accordion from '../components/accordion'
import ContactForm from '../components/contactForm'
import ImageBanner from '../components/imageBanner'

const PageWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};

  h1 {
    margin-top: 60px;
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;

    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: 20px;
      margin-top: 30px;
    }
  }
`

const Help = () => (
  <Fragment>
    <PageWrapper>
      <Container>
        <ImageBanner />
        <Row>
          <Column width={[1, 1, 1, 0.65]}>
            <h1> We're often asked... </h1>
            <AccordionWrapper>
              <Accordion />
            </AccordionWrapper>
          </Column>
        </Row>
        <ContactForm />
      </Container>
    </PageWrapper>
  </Fragment>
)

export default Help
