import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Buttons, Modal } from "./shared/components/Modals";
import { opusTheme, aquaTheme, GlobalStyles } from "./styles/theme";
import { Modal_Content } from "./App_Data/ModalData";

import * as S from "./shared/components/Modals/styles";
import Header from "./shared/components/layout/Header";

const App = () => {
  const [theme, setTheme] = useState("opus");
  const [showConfimationModal, setShowConfimationModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const isOpusTheme = theme === "opus";

  // Action on Accept Button click
  const onClickAccept = () => {
    setShowConfimationModal(!showConfimationModal);
    // Redirect to required link or routes (as part of improvement)
  };

  return (
    <ThemeProvider theme={isOpusTheme ? opusTheme : aquaTheme}>
      <>
        <GlobalStyles />
        <Header isOpusTheme={isOpusTheme} setTheme={setTheme} />
        <main>
          <Buttons
            showConfimationModal={showConfimationModal}
            setShowConfimationModal={setShowConfimationModal}
            showSubscribeModal={showSubscribeModal}
            setShowSubscribeModal={setShowSubscribeModal}
            showErrorModal={showErrorModal}
            setShowErrorModal={setShowErrorModal}
          />

          <Modal
            showModal={showConfimationModal}
            setShowModal={setShowConfimationModal}
            config={Modal_Content.confirmationModal}
          >
            <h1 role="region" aria-label="NewDay Offers">
              NewDay Offers
            </h1>
            <p role="region" aria-label="Fancy NewDay Credit card ?">
              Fancy NewDay Credit card ?
            </p>
            <S.ModalFooter>
              <S.ModalButtonSecondary
                role="button"
                aria-labelledby="Decline"
                data-testid="button-decline"
                onClick={() => setShowConfimationModal(!showConfimationModal)}
              >
                Decline
              </S.ModalButtonSecondary>
              <S.ModalButtonPrimary
                role="button"
                aria-labelledby="Apply"
                data-testid="button-apply"
                onClick={onClickAccept}
              >
                Apply
              </S.ModalButtonPrimary>
            </S.ModalFooter>
          </Modal>

          <Modal
            showModal={showSubscribeModal}
            setShowModal={setShowSubscribeModal}
            config={Modal_Content.subscribeModal}
          >
            <h1 role="region" aria-label="Don't miss out!">
              Don't miss out!
            </h1>
            <p
              role="region"
              aria-label="Sign up to get the best deals, first looks and more !"
            >
              Sign up to get the best deals, first looks and more !
            </p>
            <input type="email" placeholder="Please enter your email" />
            <S.ModalFooter>
              <S.ModalButtonPrimary
                role="button"
                aria-labelledby="Count me in"
                data-testid="button-subscribe"
              >
                Count me in
              </S.ModalButtonPrimary>
            </S.ModalFooter>
          </Modal>

          <Modal
            showModal={showErrorModal}
            setShowModal={setShowErrorModal}
            config={Modal_Content.infoModal}
            data-testid="error"
          >
            <h1 role="region" aria-label="Informtion Message">
              Information Message
            </h1>
            <p role="region" aria-label="Modal location is flexible">
              Modal location is flexible
            </p>
          </Modal>
        </main>
      </>
    </ThemeProvider>
  );
};

export default App;
