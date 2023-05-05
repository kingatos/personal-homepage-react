import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../SectionHeader/ThemeSwitch/themeSlice";
import { Wrapper, ErrorIcon, Title, InfoWrapper, ButtonLink, Text } from "./styled";
import errorBlack from "./errorBlack.svg";
import errorLight from "./errorLight.svg";
import { github } from "../../.././personalInfo";

function Error() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <>
      <Wrapper>
        <ErrorIcon src={isDarkTheme ? errorLight : errorBlack} />
        <Title> Ooops! Something went wrong...</Title>
        <InfoWrapper>
            <Text>Sorry, failed to load Github projects. <br /> 
            You can check them directly on Github.</Text>
        </InfoWrapper>
        <ButtonLink href={github} rel="noreferrer" target="_blank">
          Go&nbsp;to&nbsp;Github
        </ButtonLink>
      </Wrapper>
    </>
  );
}

export default Error;
