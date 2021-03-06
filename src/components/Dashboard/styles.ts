import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.section`
  background-color: ${theme.color.lightGray};
  flex: 1;
  border-top-left-radius: 40px;
  padding: ${theme.spacing.large} ${theme.spacing.medium};
  overflow: hidden;

  form {
    margin-top: ${theme.spacing.small};
    margin-bottom: ${theme.spacing.medium};
    max-width: 360px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-left: ${theme.spacing.small};
  }
`
