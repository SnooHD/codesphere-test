import { Button } from "@/components/Button.component";

interface ErrorModalProps {
  closeModal: () => void;
}

export const ErrorModal = ({ closeModal }: ErrorModalProps): JSX.Element => {
  return (
    <div className="font-inter text-white space-y-l">
      <div className="w-full text-center">Please try again later.</div>
      <Button
        className="w-full"
        onClick={() => closeModal()}
      >
        Close
      </Button>
    </div>
  );
};
