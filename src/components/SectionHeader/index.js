import {
  WrapperHeader,
  ImageHeader,
  DescriptionHeader,
  ThisIs,
  MyName,
  ButtonHireMe,
  Details,
  Envelope,
} from "./styled";
import SwitchTheme from "./ThemeSwitch/";
import Image from "./images/Kinga.jpg";
import envelope from "./images/envelope.svg";
import { email } from "./../.././personalInfo";

const SectionHeader = ({ theme, toggleTheme }) => {
  return (
    <WrapperHeader>
      <ImageHeader src={Image} alt="Kinga Tos photo" />
      <Details>
        <ThisIs>THIS IS</ThisIs>
        <MyName>Kinga Toś </MyName>
        <DescriptionHeader>
          👩🏽💻 Im a beginner frontend developer. I am looking for my first job
          in IT, where I will be able to improve my skills and gain completely
          new experience.
        </DescriptionHeader>
        <ButtonHireMe href={`mailto:${email}`} title={email}>
          <Envelope src={envelope} alt="" />
          Hire me
        </ButtonHireMe>
      </Details>
      <SwitchTheme theme={theme} toggleTheme={toggleTheme} />
    </WrapperHeader>
  );
}

export default SectionHeader;
