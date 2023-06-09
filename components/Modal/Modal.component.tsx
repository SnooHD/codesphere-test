import ReactModal from "react-modal";
import { useState } from "react";
import { Text } from "@/components/Text.component";
import { Icon } from "@/components/Icon/Icon.component";
import { CreateWorkspaceModal } from "./Modals/CreateWorkspace.modal";
import { ErrorModal } from "./Modals/Error.modal";

import type { ModalIds, ModalProps } from "@/types/modal.types";

export const modals = [
  { id: "createWorkspace", value: CreateWorkspaceModal },
  { id: "error", value: ErrorModal },
];

ReactModal.setAppElement("body");

export const Modal = ({ isOpen, onModalClose, title, id }: ModalProps) => {
  const setActiveModal = (id: ModalIds) => setActiveModalId(id);
  const [activeModalId, setActiveModalId] = useState(id);
  const modal = modals.find((modal) => modal.id === activeModalId);
  const ModalElement = modal?.value;

  const [isActive, setIsActive] = useState(false);

  return (
    <ReactModal
      shouldCloseOnEsc={true}
      closeTimeoutMS={300}
      onAfterClose={() => setIsActive(false)}
      onAfterOpen={() => setIsActive(true)}
      overlayClassName={`
        fixed bg-black/[.1] inset-0 z-[1000] flex items-center justify-center
        transition-all duration-300
        ${
          !isActive || !isOpen
            ? "backdrop-blur-none opacity-0 pointer-events-none"
            : ""
        }
        ${isOpen ? "backdrop-blur-xs" : ""}
      `}
      className={`
        bg-gray-dark w-full max-w-content rounded shadow-box shadow-black/[.1]
        transition-transform duration-300
        ${!isActive || !isOpen ? "translate-y-[10px]" : ""}
        ${isOpen ? "translate-y-0" : ""}
      `}
      isOpen={isOpen}
      onRequestClose={onModalClose}
      shouldCloseOnOverlayClick={true}
    >
      <div className="p-xl flex justify-between">
        <Text
          type="h1"
          size="l"
          className="w-full text-center"
        >
          {activeModalId === "error" ? "Something went wrong..." : title}
        </Text>
        <button
          type="button"
          onClick={onModalClose}
        >
          <span className="sr-only">close</span>
          <Icon
            id="close"
            className="text-white"
          />
        </button>
      </div>
      <div className="overflow-auto p-xxl space-y-l">
        {ModalElement ? (
          <ModalElement
            isActive={isActive}
            closeModal={onModalClose}
            setModal={setActiveModal}
          />
        ) : (
          <span className="text-white">{`Modal: "${id}" not found`}</span>
        )}
      </div>
    </ReactModal>
  );
};
