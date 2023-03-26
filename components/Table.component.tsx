import { useState } from "react";
import { Icon } from "./Icon/Icon.component";
import { OptionsOverlay, OptionsOverlayType } from "./OptionsOverlay.component";

interface TableItemProps {
  id: string;
  name: string;
}

interface TableProps {
  items: TableItemProps[];
}

const getTHStyling = () => "font-normal py-xs px-s";

export const Table = ({ items }: TableProps): JSX.Element => {
  const [activeOverlay, setActiveOverlay] = useState("");
  const handleOverlayClick = (type?: OptionsOverlayType) => {
    switch (type) {
      case "delete": {
      }
    }

    setActiveOverlay("");
  };

  return (
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
            className=" border-b border-gray-lightest"
          >
            <td className="py-xl px-s">{name}</td>
            <td className="text-center text-gray h-full">
              <div className="relative h-full">
                <div
                  className="w-full h-full"
                  onClick={() =>
                    activeOverlay ? setActiveOverlay("") : setActiveOverlay(id)
                  }
                >
                  <Icon id="more" />
                </div>
                <OptionsOverlay
                  active={activeOverlay === id}
                  onClick={handleOverlayClick}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
