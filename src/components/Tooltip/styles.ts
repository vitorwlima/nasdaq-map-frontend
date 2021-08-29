import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  position: relative;

  .tooltip {
    opacity: 0;
    transition: opacity 0.3s;

    position: absolute;
    width: 174px;
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    top: -42px;
    right: calc(50% - 127px);
    font-size: ${theme.font.size.small};
    padding: ${theme.spacing.xsmall};
    border-radius: ${theme.radius.small};
  }

  &:hover {
    .tooltip {
      opacity: 1;
    }
  }
`
