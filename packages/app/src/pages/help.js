import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from '../components/grid'
import { media } from '../theme/media'
import AccordionWrapper from '../components/accordion/accordionWrapper'
import Accordion from '../components/accordion'
import ContactForm from '../components/contactForm'
import ImageBanner from '../components/imageBanner'
import theme from '../theme/theme'

const PageWrapper = styled.div`
  background-color: ${theme.colors.white};

  h1 {
    font-size: 20px;
    margin-top: 30px;

    @media (max-width: ${theme.breakpoints[1]}) {
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
          <Column width={[1, 1, 1, 0.6666]}>
            <h1> We're often asked... </h1>
            <AccordionWrapper>
              <Accordion />
            </AccordionWrapper>
          </Column>
          <Column width={[1, 1, 1, 0.3333]}>
            <ContactForm />
          </Column>
        </Row>
      </Container>
    </PageWrapper>
  </Fragment>
)

export default Help

// unsure of travis.yml file
// check accordionWrapper
