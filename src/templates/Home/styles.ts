import styled from 'styled-components'
import { deviceMaxWidth } from '../../styles/devices'

export const Container = styled.main`
  display: flex;
  overflow: hidden;
  max-height: 100vh;

  @media ${deviceMaxWidth.laptopM} {
    flex-direction: column;
  }
`
