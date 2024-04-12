import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/slider-badging.jpg" alt="" />
      </Background>
      <ImageTitle>
        <img src="" alt="Loading" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailorButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailorButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>

      </Subtitle>
      <Description>

      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.button`
  align-items: center;
  display: flex;
  padding: 0px;
  background: rgba(249, 249, 249, 0);
  border: none;
`

const PlayButton = styled.button`
  border-radius: 4px;
  fonst-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  backgroud: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

`

const TrailorButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: felx;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`
const GroupWatchButton = styled(AddButton)`
  display: flex;
  justify-content: center;
  background: rgb(0, 0, 0);
`

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;

`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`