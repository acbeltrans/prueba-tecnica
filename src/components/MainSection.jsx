import Video from '../assets/video.mp4'
import {
  MainContainer,
  MainBackground,
  VideoBackground,
  MainContent,
  MainH1,
} from '../styled/MainSection.styles'

const MainSection = () => {
  return (
    <MainContainer>
      <MainBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
        <MainContent>
          <MainH1>Movich Hoteles</MainH1>
        </MainContent>
      </MainBackground>
    </MainContainer>
  )
}

export default MainSection
