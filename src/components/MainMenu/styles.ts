import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  min-width: 360px;
  padding: ${theme.spacing.medium} ${theme.spacing.small};
`

export const FavoriteCompanies = styled.div`
  .header {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing.large};

    h4 {
      margin-left: ${theme.spacing.xsmall};
    }
  }

  > div {
    margin-bottom: ${theme.spacing.medium};
  }
`
