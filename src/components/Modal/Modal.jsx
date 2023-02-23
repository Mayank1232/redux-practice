import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../assets/ModalStyles.css";
import ModalHtml from "./ModalHtml";

function DefaultModal({ isOpen, userData, toggleViewModal }) {
  return (
    <>
      <Modal
        fullscreen
        scrollable
        isOpen={isOpen}
        toggle={() => toggleViewModal(userData)}
      >
        <ModalHeader className="bg-gray-200" toggle={toggleViewModal}>
          User Profile
        </ModalHeader>
        <ModalBody>
          <ModalHtml userData={userData} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleViewModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default DefaultModal;
