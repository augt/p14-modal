import React from "react";
import {
  StyledCloseButton,
  StyledModalBackground,
  StyledModalContainer,
} from "./index.style";
import PropTypes from "prop-types";

Modal.propTypes = {
  onClose: PropTypes.func,
  errorMessage: PropTypes.string,
  confirmationMessage: PropTypes.string,
};

export default function Modal({ onClose, errorMessage, confirmationMessage }) {
  return (
    <StyledModalBackground>
      <StyledModalContainer>
        {errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <div>{confirmationMessage}</div>
        )}
        <StyledCloseButton
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          X
        </StyledCloseButton>
      </StyledModalContainer>
    </StyledModalBackground>
  );
}
