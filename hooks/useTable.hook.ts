import { workspaceFetcher } from "@/utils/fetcher.util";
import { sendWebSocketMessage } from "@/utils/webSocket.util";
import {
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import { useSWRConfig } from "swr";

interface UseTableProps {
  setHasError: Dispatch<SetStateAction<boolean>>;
  setActiveOverlay: Dispatch<SetStateAction<number | null>>;
  overlayRef: RefObject<HTMLDivElement>;
}

export const useTable = ({
  overlayRef,
  setHasError,
  setActiveOverlay,
}: UseTableProps) => {
  const { mutate } = useSWRConfig();
  const deleteWorkspace = async (id: number, name: string) => {
    try {
      await workspaceFetcher("/deleteWorkspace", {
        workspaceId: id,
      });
    } catch (e) {
      console.error(e);
      setHasError(true);
      return;
    }

    mutate("/listWorkspaces");
    sendWebSocketMessage({ deleted: true, id, name });

    setActiveOverlay(null);
  };

  /**
   * Add body click and esc press to close overlay when clicking outside of the table
   */

  const handleBodyClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const { current: overlayElement } = overlayRef;

    if (!overlayElement) return;
    if (overlayElement.contains(target)) return;

    setActiveOverlay(null);
  }, []);

  const handleESCPress = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveOverlay(null);
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);
    document.addEventListener("keydown", handleESCPress);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
      document.removeEventListener("keydown", handleESCPress);
    };
  }, []);

  return {
    deleteWorkspace,
  };
};
