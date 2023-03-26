import { useTable } from "@/hooks/useTable.hook";
import { useCallback, useRef, useState } from "react";
import { OptionsOverlay } from "@/components/OptionsOverlay.component";
import { Icon } from "@/components/Icon/Icon.component";
import { Modal } from "@/components/Modal/Modal.component";

import type { TableProps } from "@/types/table.types";

export const Table = ({ items }: TableProps): JSX.Element => {
  const getTHStyling = useCallback(() => "font-normal py-xs px-s", []);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [hasError, setHasError] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const { deleteWorkspace } = useTable({
    setHasError,
    overlayRef,
    setActiveOverlay,
  });

  const assignRef = (element: HTMLDivElement, id: number) => {
    if (id === activeOverlay) overlayRef.current = element;
  };

  return (
    <>
      <table className="text-white font-inter w-full table-auto">
        <thead>
          <tr className="bg-gray-darkest text-sm text-gray-light border-b border-gray-lightest">
            <th className={`${getTHStyling()} text-left w-full`}>Name</th>
            <th className={`${getTHStyling()} text-center min-w-[70px]`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, id }) => (
            <tr
              key={`table-item-${id}`}
              className={`
                border-b transition-color duration-300 group 
                hover:border-gray-light
                ${
                  activeOverlay === id
                    ? "border-gray-light bg-gray-darkest"
                    : "border-gray-lightest"
                }
              `}
            >
              <td className="py-xl px-s">{name}</td>
              <td
                className={`
                  text-center transition-color duration-300 cursor-pointer  h-full group-hover:text-white
                  ${activeOverlay === id ? "text-white" : "text-gray"}
                `}
              >
                <div
                  className="h-full"
                  ref={(element: HTMLDivElement) => assignRef(element, id)}
                >
                  <div className="relative">
                    <div
                      className="w-full"
                      onClick={() =>
                        activeOverlay
                          ? setActiveOverlay(null)
                          : setActiveOverlay(id)
                      }
                    >
                      <Icon id="more" />
                    </div>
                    <OptionsOverlay
                      active={activeOverlay === id}
                      onClick={() => deleteWorkspace(id, name)}
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {items.length === 0 && (
        <div className="py-l text-white font-inter">
          There are no active workspaces
        </div>
      )}
      <Modal
        id="error"
        isOpen={hasError}
        onModalClose={() => setHasError(false)}
      />
    </>
  );
};
