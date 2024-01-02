/* Code generated with AutoHTML Plugin for Figma */
import styles from "./ButonPrimary.module.css";
import { SystemArrowsArrowForwardStyleOutline } from "../SystemArrowsArrowForwardStyleOutline/SystemArrowsArrowForwardStyleOutline";

export interface IButonPrimaryProps {
  icon?: boolean;
  component0?: JSX.Element;
  className?: string;
}

export const ButonPrimary = ({
  icon = true,
  component0 = <SystemArrowsArrowForwardStyleOutline styleVariant="outline" />,
  className,
  ...props
}: IButonPrimaryProps): JSX.Element => {
  return (
    <div className={styles["buton-primary"] + " " + className}>
      <div className={styles["buton-primary__suivant"]}>Suivant </div>
      {icon && <>{component0}</>}
    </div>
  );
};
