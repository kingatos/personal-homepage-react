import { email } from "../../personalInfo";
import { socialMedia } from "./socialMedia";
import { WrapperFooter, WrapperIcon, StyledEmail, LetsTalk, StyledText, Link } from "./styled";

function Footer() {
  return (
  <WrapperFooter>
    <LetsTalk>let's talk!</LetsTalk>
    <StyledEmail href={`mailto:${email}`}>
       {email}
    </StyledEmail>
    <StyledText>
      I am a person who wants to constantly develop. I want to associate my
      future with programming. Feel free to contact me if you need support in
      creating a website and a mobile application. 🤞🏽
    </StyledText>
    <WrapperIcon>
        {socialMedia.map(({ name, link, Icon }) => (
            <Link
            key={name}
            href={link}
            title={name}
            rel="noreferrer"
            target="_blank"
        >
            <Icon/>
        </Link>
        ))}  
    </WrapperIcon>
  </WrapperFooter>
  );
}

export default Footer;
