import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Column } from '../grid'
import Button from '../button'
import Input from '../input'
import { media } from '../../theme/media'

const StyledInput = styled.input`
  font-size: 1.25em;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  width: 100%;

  /* Fix for firefox adding red border to required inputs */
  &:required {
    box-shadow: none;
  }

  ${media.desktop`
    margin-bottom: 0;
  `};
`

const StyledButton = styled.input`
  background-color: ${props => props.theme.colors.eucalyptusGreen};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.indigo};
  cursor: pointer;
  height: 40px;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 20px;
  outline: none;
  text-decoration: none;
  width: 100%;

  ${media.tablet`
    margin-bottom: 0;
    width: 138px;
  `};
`

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  width: 90%;
  ${media.desktop`
    padding: 60px auto;
  `};
`

const StyledTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  padding: 3px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    font-size: 0.8em;
    text-align: left;
  `};
`

const StyledRow = styled(Row)`
  margin: 0;
`

const StyledButtonColumn = styled(Column)`
  text-align: center;
`

const StyledSubtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin: 0 0 10px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    font-size: 0.7em;
    margin: 0;
    text-align: left;
  `};
`

const url =
  '//prideinlondon.us6.list-manage.com/subscribe?u=8289d9ca2253b74574f849c73&id=a2423c3382&MERGE0='

class NewsletterForm extends React.Component {
  state = { value: '' }

  handleChange = (value) => this.setState({ value })

  render() {
    return (
      <form
        action={`${url}${this.state.value}`}
        method="post"
        target="_blank"
      >
      {this.props.newsletterTitle}
      {this.props.newsletterSubtitle}
      <Input
        id="email"
        type="email"
        handleChange={this.handleChange}
        value={this.state.value}
        label="E-mail address"
        required
      />
      <Button 
        type="submit" 
        primary>
        Subscribe
      </Button>

      </form>
    )
  }
}

NewsletterForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  newsletterTitle: PropTypes.string,
  newsletterSubtitle: PropTypes.string,
}

NewsletterForm.defaultProps = {
  placeholder: 'email address',
  newsletterTitle: 'Stay on top of Pride events',
  newsletterSubtitle: 'Sign up to receive occasional updates',
}

export default NewsletterForm
