import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recomended for you</h4>
      <Content>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div`
  
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0,1fr));
  margin-bottom: 40px;
`

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249,249, 0.1);
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0PX 16PX 10PX -10PX;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249,249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px  58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 20px -10px;
  }
`