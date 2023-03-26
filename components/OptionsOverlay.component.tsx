import { Icon } from "@/components/Icon/Icon.component";
import { useCallback, useEffect, useRef } from "react";

export type OptionsOverlayType = "delete" | "close";

interface OptionsOverlayProps {
  active: boolean;
  onClick: (type?: OptionsOverlayType) => void;
}

export const OptionsOverlay = ({
  active,
  onClick,
}: OptionsOverlayProps): JSX.Element => {
  const handleBodyClick = useCallback((e: MouseEvent) => {
    const { current: overlayElement } = overlayRef;
    if (!overlayElement) return;

    const target = e.target as HTMLElement;
    const parentElement = overlayElement.parentElement as HTMLDivElement;
    if (parentElement.contains(target)) return;

    onClick("close");
  }, []);

  const handleESCPress = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClick("close");
  }, []);

  useEffect(() => {
    /**
     * Add body click and esc press to close overlay when clicking outside of the table
     */
    document.addEventListener("click", handleBodyClick);
    document.addEventListener("keydown", handleESCPress);

    return () => {
      document.removeEventListener("click", handleBodyClick);
      document.removeEventListener("keydown", handleESCPress);
    };
  });

  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={overlayRef}
      onClick={() => onClick("delete")}
      className={`
        absolute
        font-inter text-m flex rounded shadow-box shadow-black/[.1] bg-gray-darkest border border-gray-lightest
        transition-all duration-300 min-w-[226px] min-h-[50px] right-[0px]
        ${
          active
            ? "translate-0 opacity-1"
            : "pointer-events-none opacity-0 translate-y-[-10px]"
        }
      `}
    >
      <div className="flex items-center space-x-l w-full p-l cursor-pointer">
        <Icon id="bin" />
        <span>Delete</span>
      </div>
    </div>
  );
};
