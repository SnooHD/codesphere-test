export type ModalIds = "createWorkspace" | "error";

export interface ModalProps {
  className?: string;
  isOpen: boolean;
  title?: string;
  onModalClose: () => void;
  id: ModalIds;
}
