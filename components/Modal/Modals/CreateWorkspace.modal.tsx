import { useSWRConfig } from "swr";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button.component";
import { Input } from "@/components/Input.component";
import { workspaceFetcher } from "@/utils/fetcher.util";

import type { FormEvent } from "react";
import type { ModalIds } from "@/types/modal.types";

interface CreateWorkspaceModalProps {
  isActive: boolean;
  closeModal: () => void;
  setModal: (id: ModalIds) => void;
}

export const CreateWorkspaceModal = ({
  isActive,
  closeModal,
  setModal,
}: CreateWorkspaceModalProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!isActive) {
      setInputValue("");
    }
  }, [isActive]);

  const { mutate } = useSWRConfig();
  const onSubmitForm = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        await workspaceFetcher("/createWorkspace", {
          name: inputValue,
        });
      } catch (error) {
        console.error(error);
        setModal("error");
        return;
      }

      mutate("/listWorkspaces");
      closeModal();
    },
    [inputValue]
  );

  return (
    <form
      className="space-y-xl"
      onSubmit={onSubmitForm}
    >
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
