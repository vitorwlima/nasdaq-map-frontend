import styled from 'styled-components'
import { deviceMaxWidth } from '../../styles/devices'

export const Container = styled.main`
  display: flex;
  overflow-x: hidden;
  min-height: 100vh;

  @media ${deviceMaxWidth.laptopM} {
    flex-direction: column;
  }
`
