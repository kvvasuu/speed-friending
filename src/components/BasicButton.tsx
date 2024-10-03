import type { ComponentPropsWithoutRef } from "react";
interface Props extends ComponentPropsWithoutRef<"button"> {
  children: string;
  disableButton?: boolean;
  className: string;
}

const BasicButton = ({
  children,
  disableButton,
  className,
  ...props
}: Props) => {
  let classes = className;

  if (disableButton) classes += " opacity-20 pointer-events-none";

  return (
    <button className={classes} disabled={disableButton} {...props}>
      {children}
    </button>
  );
};

export default BasicButton;
