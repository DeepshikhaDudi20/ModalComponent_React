import * as S from "./styles";
import { btnText } from "../../../App_Data/HomePageData";

const Buttons = ({
  setShowConfimationModal,
  showConfimationModal,
  setShowSubscribeModal,
  showSubscribeModal,
  setShowErrorModal,
  showErrorModal
}) => {
  return (
    <S.ModalButtonsContainer>
      <S.ModalButtonPrimary
        role="button"
        aria-labelledby={btnText.confirmationModalBtnText}
        data-testid="button-confirmation"
        onClick={() => setShowConfimationModal(!showConfimationModal)}
      >
        {btnText.confirmationModalBtnText}
      </S.ModalButtonPrimary>
      <S.ModalButtonPrimary
        role="button"
        aria-labelledby={btnText.subscribeModalBtnText}
        data-testid="button-subscribe"
        onClick={() => setShowSubscribeModal(!showSubscribeModal)}
      >
        {btnText.subscribeModalBtnText}
      </S.ModalButtonPrimary>
      <S.ModalButtonPrimary
        role="button"
        aria-labelledby={btnText.errorModalBtnText}
        data-testid="button-error"
        onClick={() => setShowErrorModal(!showErrorModal)}
      >
        {btnText.errorModalBtnText}
      </S.ModalButtonPrimary>
    </S.ModalButtonsContainer>
  );
};

export default Buttons;
