import { Button } from "@/components/Button.component";
import { Input } from "@/components/Input.component";
import { useEffect, useState } from "react";

interface CreateWorkspaceModalProps {
  isActive: boolean;
}

export const CreateWorkspaceModal = ({
  isActive,
}: CreateWorkspaceModalProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!isActive) {
      setInputValue("");
    }
  }, [isActive]);

  return (
    <form className="space-y-xl">
      <Input
        placeholder="Workspace name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        type="submit"
        className="w-full !py-l"
      >
        Create
      </Button>
    </form>
  );
};
