import {
  WrapperHeader,
  ImageHeader,
  DestriptionHeader,
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

function SectionHeader({ theme, toggleTheme }) {
  return (
    <WrapperHeader>
      <ImageHeader src={Image} alt="Kinga Tos photo"/>
      <Details>
      <ThisIs>THIS IS</ThisIs> 
      <MyName>Kinga Toś </MyName>
      <DestriptionHeader>
        👩🏽💻 Im a beginner frontend developer. I am looking for my first job in
        IT, where I will be able to improve my skills and gain completely new
        experience.
        </DestriptionHeader>
        <ButtonHireMe href={`mailto:${email}`} title={email}>
          <Envelope src={envelope} alt=""/>
          Hire me
        </ButtonHireMe>
      </Details>
      <SwitchTheme theme={theme} toggleTheme={toggleTheme} />
    </WrapperHeader>
  );
}

export default SectionHeader;
