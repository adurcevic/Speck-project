import { Button } from "../../lib/style/generalStyles";
import LandingImg from "../../assets/images/landing.jpg";
import { useNavigate } from "react-router-dom";
import {
  Landing as LandingWrapper,
  Figure,
  Image,
  Overlay,
  OverlayPrimary,
  OverlaySecondary,
  Content,
  ContentInner,
  Title,
  Subtitle,
} from "./LandingStyle";

const Landing = () => {
  let navigate = useNavigate();
  return (
    <LandingWrapper>
      <Figure>
        <Image src={LandingImg} alt="landing image" />
      </Figure>
      <Overlay>
        <OverlayPrimary />
        <OverlaySecondary />
      </Overlay>
      <Content>
        <ContentInner>
          <Title>Learn what matters, Speck Academy powered by FOI</Title>
          <Subtitle>
            Make a turnaround in your career or upgrade your current skill set
            with knowledge-based lessons from IT practice
          </Subtitle>
          <Button onClick={() => navigate("/courses")} isOutline={true}>
            Explore Courses
          </Button>
        </ContentInner>
      </Content>
    </LandingWrapper>
  );
};

export default Landing;
