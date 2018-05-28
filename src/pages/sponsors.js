import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container } from '../components/grid/'
import ImageBanner from '../components/imageBanner'
import SponsorBadge from '../components/sponsorBadge'
import SponsorsSubsection from '../components/sponsorSubsection'
import constants from '../constants'
import theme from '../theme/theme'
import { media } from '../theme/media'

const SponsorsContainer = styled(Container)`
  background-color: ${props => props.theme.colors.white};
  padding: 0 20px;
  ${media.tablet`
    padding: 0 90px;
  `};
`

const Body = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid rgba(203, 203, 203, 0.5);
  ${media.tablet`
    padding: 60px 0;
  `};
`

const SponsorsList = styled.div`
  padding: 30px 0;
  ${media.tablet`
    padding: 60px 0;
  `};
`

const selectSponsors = data =>
  data.allContentfulSponsor.edges
    .map(({ node }) => ({
      name: node.sponsorName,
      url: node.sponsorUrl,
      logo: node.sponsorLogo && node.sponsorLogo.sizes.src,
      level: node.sponsorLevel,
    }))
    .reduce(
      (sponsors, sponsor) => ({
        ...sponsors,
        [sponsor.level]: [sponsor, ...(sponsors[sponsor.level] || [])],
      }),
      {}
    )

const renderSponsors = sponsors =>
  sponsors.map(sponsor => <SponsorBadge key={sponsor.name} {...sponsor} />)

const Sponsors = ({ data }) => {
  const sponsors = selectSponsors(data)
  return (
    <Fragment>
      <ImageBanner
        titleText="Sponsor us"
        subtitleText="Help us to keep Pride free for everyone by becoming one of our sponsors"
        backgroundColor={theme.colors.yellow}
      />
      <SponsorsContainer>
        <Body>
          <h2>Be part of something</h2>
          <p>
            Without our dedicated and loyal partners, Pride in London simply
            would not exist. Since the current community group took over the
            running of Pride in 2012, the office of the Mayor of London and
            Barclays have remained committed to keeping Pride on the road. They
            have proved to be great allies of the LGBTQ+ community and we are
            eternally grateful for their support. In 2018, Sadiq Khan, Mayor of
            London extended Pride in London’s contract, committing to support
            our work for a further 5 years.
          </p>
          <p>
            For many years LGBTQ+ people have faced hiding their true selves
            from their colleagues. Only since 2000 have people been able to
            openly serve in the military. Today, while prejudice is still rife
            in many places, many companies and organisations have embraced their
            LGBTQ+ members of staff. Studies show, that employers who recognise
            and support diversity are on average more productive and more
            profitable.
          </p>
          <p>
            {' '}
            Over the years we have seen more and more companies openly support
            and embrace their LGBTQ+ colleagues, as well as provide a safe,
            loving and supportive workplace. Being part of Pride is one of the
            many ways we are seeing workplaces transform for the better. Pride
            in London are proud to be working with our partners to ensure
            diversity is embedded in the core of each company we work with.
          </p>
        </Body>
        <SponsorsList>
          <h1>Our main 2018 partners</h1>
          <p>
            A huge thank you to our main partners for their continued support.
          </p>
          <div>
            <SponsorsSubsection title="Headline sponsors">
              {renderSponsors(sponsors[constants.sponsorLevels.headline])}
            </SponsorsSubsection>
            <SponsorsSubsection title="Gold sponsors">
              {renderSponsors(sponsors[constants.sponsorLevels.gold])}
            </SponsorsSubsection>
            <SponsorsSubsection title="Silver sponsors">
              {renderSponsors(sponsors[constants.sponsorLevels.silver])}
            </SponsorsSubsection>
            <SponsorsSubsection title="Bronze sponsors">
              {renderSponsors(sponsors[constants.sponsorLevels.bronze])}
            </SponsorsSubsection>
          </div>
        </SponsorsList>
      </SponsorsContainer>
    </Fragment>
  )
}

export const query = graphql`
  query sponsorsQuery {
    allContentfulSponsor(filter: {}) {
      distinct
      edges {
        node {
          sponsorName
          sponsorUrl
          sponsorLogo {
            sizes(maxHeight: 84) {
              src
            }
          }
          sponsorLevel
        }
      }
    }
  }
`

export default Sponsors
