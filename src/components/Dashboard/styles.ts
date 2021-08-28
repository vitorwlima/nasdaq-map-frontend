import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.section`
  background-color: ${theme.color.lightGray};
  flex: 1;
  border-top-left-radius: 40px;
  padding: ${theme.spacing.large} ${theme.spacing.medium};

  form {
    margin-top: ${theme.spacing.small};
    margin-bottom: ${theme.spacing.medium};
    max-width: 360px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: ${theme.spacing.small};
  }
`
