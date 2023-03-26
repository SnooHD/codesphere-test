import { useState } from "react";
import { Button } from "./Button.component";
import { Modal } from "./Modal/Modal.component";

export const Header = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <header className="flex justify-end">
        <Button
          icon="plus"
          onClick={() => setOpenModal(true)}
        >
          New Workspace
        </Button>
      </header>
      <Modal
        isOpen={openModal}
        title="Create Workspace"
        onModalClose={() => setOpenModal(false)}
        id="createWorkspace"
      />
    </>
  );
};
