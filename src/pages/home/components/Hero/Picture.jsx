/** @jsxImportSource @emotion/react */
import { keyframes, css } from '@emotion/react'
import styled from '@emotion/styled'

const Picture = () => {
  return (
    <Container>
      <img
        src='/home/hero.webp'
        alt=''
        css={css`
          border-radius: 3rem;
        `}
      />
      <img
        src='/home/hero-secondary.png'
        alt=''
        css={css`
          position: absolute;
          bottom: 1rem;
          left: -7rem;
          width: 230px;
        `}
      />
    </Container>
  )
}

export default Picture

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateX(5rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Container = styled('div')(props => ({
  position: 'relative',
  animation: `${animate} 1.5s ease`
}))
