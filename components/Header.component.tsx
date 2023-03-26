import { Button } from "./Button.component";

export const Header = (): JSX.Element => {
  return (
    <header className="flex justify-end">
      <Button icon="plus">New Workspace</Button>
    </header>
  );
};
