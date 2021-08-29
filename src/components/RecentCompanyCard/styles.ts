import styled from 'styled-components'
import theme from '../../styles/theme'

type ContainerProps = {
  isProfitable: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.small};
  box-shadow: 0 8px 20px rgba(43, 37, 63, 0.1);
  border-radius: ${theme.radius.medium};
  background-color: ${theme.color.white};

  button {
    margin-right: ${theme.spacing.xsmall};
  }

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
      color: ${props => (props.isProfitable ? theme.color.success : theme.color.danger)};
      font-weight: ${theme.font.weight.smallBold};
    }
  }
`
