import SectionHeader from "./components/SectionHeader/index.js";
import SectionSkills from "./components/SectionSkills/index.js";
import SectionPortfolio from "./components/SectionPortfolio/index.js";
import Footer from "./components/Footer/index.js";
import { AppContainer, AppWrapper } from "./components/Container/styled.js";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./components/SectionHeader/ThemeSwitch/themeSlice";
import { darkTheme, lightTheme } from "./theme.js";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <AppWrapper>
          <AppContainer>
            <SectionHeader />
            <SectionSkills />
            <SectionPortfolio />
            <Footer />
          </AppContainer>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
