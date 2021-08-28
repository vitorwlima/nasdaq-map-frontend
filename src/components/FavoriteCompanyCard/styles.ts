import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;

  .trash {
    cursor: pointer;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.small};
  box-shadow: 0 8px 20px rgba(43, 37, 63, 0.1);
  border-radius: ${theme.radius.medium};
  flex: 1;
  margin-right: ${theme.spacing.xsmall};

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacing.xsmall};

    span {
      color: ${theme.color.gray};
    }
  }

  .prices {
    span {
      margin-right: ${theme.spacing.xxsmall};
      color: ${theme.color.success};
      font-weight: ${theme.font.weight.smallBold};
    }
  }
`
