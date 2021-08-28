import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

type CarouselProps = {
  currentCompany: number
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${theme.spacing.large};
`

export const Carousel = styled.div<CarouselProps>`
  ${({ currentCompany }) => css`
    display: flex;
    transition: transform 0.3s;
    transform: ${`translateX(calc((320px + ${theme.spacing.medium}) * ${-currentCompany}))`};

    > div {
      margin-right: ${theme.spacing.medium};
      width: 320px;
    }
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.medium};

  .intro {
    display: flex;
    align-items: center;

    h4 {
      margin-left: ${theme.spacing.xsmall};
    }
  }

  .arrows {
    display: flex;
    align-items: center;

    svg {
      color: ${theme.color.primary};
      transition: color 0.3s;
      cursor: pointer;

      &:hover {
        color: ${theme.color.darkPrimary};
      }
    }

    svg:first-child {
      margin-right: ${theme.spacing.small};
    }
  }
`
