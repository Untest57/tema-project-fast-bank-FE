import { css } from 'styled-components'

const colors = {
  primary: '#2EB5AA',
  heart: '#F8496E',
  error: '#FF6347',
  text: '#181C24',
  modalBackground: 'rgba(24, 28, 36, 0.2)',
  inputPlaceholder: '#91959C',
  inputBorder: '#DDDDDD',
  cardPink: '#F2908C',
  cardOrange: '#FAA94F',
  cardBlue: '#4F76CC',
  cardHover: 'rgba(255, 255, 255, 0.3)',
}

const fontSize = {
  extraSmall: '1.2rem',
  small: '1.4rem',
  regular: '1.6rem',
  big: '2.4rem',
}

const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
}

const common = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ErrorMessage: css`
    color: tomato;
    font-size: 0.8rem;
  `,
}

const widthDevice = {
  default: '414px',
}

const space = {
  marginColumn: '2rem',
  marginRow: '2.2rem',
}

const size = {
  inputHeightInPage: '4.4rem',
}

const theme = {
  colors,
  fontSize,
  fontWeight,
  common,
  space,
  size,
  widthDevice,
}

export default theme
