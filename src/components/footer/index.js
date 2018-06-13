import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NewsletterForm from '../newsletter'
import { Container, Row, Column } from '../grid'

const StyledFooter = styled.footer`
    background-color: ${props => props.theme.colors.indigo};
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`

export const Footer = () => (
    <StyledFooter>
        <NewsletterForm buttonText="Subscribe"/>
    </StyledFooter>
)

export default Footer