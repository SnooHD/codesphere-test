export type ModalIds = "createWorkspace";

export interface ModalProps {
  className?: string;
  isOpen: boolean;
  title: string;
  onModalClose: () => void;
  id: ModalIds;
}
