import { Icon } from "@/components/Icon/Icon.component";

interface OptionsOverlayProps {
  active: boolean;
  onClick: () => void;
}

export const OptionsOverlay = ({
  active,
  onClick,
}: OptionsOverlayProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={`
        absolute z-20
        font-inter text-m flex rounded shadow-box shadow-black/[.1] bg-gray-darkest border border-gray-lightest
        transition-all duration-300 min-w-[226px] min-h-[50px] right-[0px]
        ${
          active
            ? "translate-0 opacity-1"
            : "pointer-events-none opacity-0 translate-y-[-10px]"
        }
      `}
    >
      <div className="flex items-center space-x-l w-full p-l cursor-pointer transition-color duration-300 hover:text-red-500">
        <Icon id="bin" />
        <span>Delete</span>
      </div>
    </div>
  );
};
