import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

type ContainerProps = {
  noData?: boolean
}

type AssetPricesProps = {
  isProfitable: boolean
}

export const Container = styled.div<ContainerProps>`
  background-color: ${theme.color.white};
  padding: ${theme.spacing.medium};
  border-radius: ${theme.radius.medium};
  box-shadow: 0 4px 12px rgba(222, 222, 231, 0.4);

  ${props =>
    props.noData &&
    css`
      padding: 10rem 2rem;
      text-align: center;
    `}
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.medium};
  padding: 0 ${theme.spacing.xsmall};
`

export const AssetInfo = styled.div`
  display: flex;
  align-items: center;

  .info {
    margin-left: ${theme.spacing.small};

    h4 {
      margin-bottom: ${theme.spacing.xxsmall};
    }

    span {
      color: ${theme.color.gray};
    }
  }
`

export const AssetPrices = styled.div<AssetPricesProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .top {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing.xxsmall};

    h4 {
      margin-left: ${theme.spacing.xxsmall};
    }
  }

  .bottom {
    font-weight: ${theme.font.weight.smallBold};
    color: ${props => (props.isProfitable ? theme.color.success : theme.color.danger)};
  }
`
