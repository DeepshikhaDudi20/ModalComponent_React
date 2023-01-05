import * as HeaderStyles from "./styles";
import { headerToggleThemeBtnText } from "../../../App_Data/HomePageData";

const Header = ({ isOpusTheme, setTheme }) => {
  const toggleTheme = () => setTheme(isOpusTheme ? "aqua" : "opus");
  return (
    <HeaderStyles.Header aria-label="header">
      <HeaderStyles.HeaderContainer>
        <HeaderStyles.HeaderButton
          role="button"
          data-testid="toggle-theme"
          onClick={toggleTheme}
        >
          {isOpusTheme ? (
            <span data-testid="opus-theme">
              {headerToggleThemeBtnText.opusThemeBtnText}
            </span>
          ) : (
            <span data-testid="aqua-theme">
              {headerToggleThemeBtnText.aquaThemeBtnText}
            </span>
          )}
        </HeaderStyles.HeaderButton>
      </HeaderStyles.HeaderContainer>
    </HeaderStyles.Header>
  );
};

export default Header;
