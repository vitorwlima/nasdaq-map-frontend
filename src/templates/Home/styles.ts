import styled from 'styled-components'
import { deviceMaxWidth } from '../../styles/devices'

export const Container = styled.main`
  display: flex;
  overflow: hidden;

  @media ${deviceMaxWidth.laptopM} {
    flex-direction: column;
  }
`
