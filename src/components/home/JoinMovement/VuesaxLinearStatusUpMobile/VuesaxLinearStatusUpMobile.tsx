import styles from "./VuesaxLinearStatusUpMobile.module.css";

export interface IVuesaxLinearStatusUpProps {
  className?: string;
}

export const VuesaxLinearStatusUpMobile = ({
  className,
  ...props
}: IVuesaxLinearStatusUpProps): JSX.Element => {
  return (
    <div className={styles["vuesax-linear-status-up"] + " " + className}>
      <svg
        className={styles["vuesax-linear-status-up__vuesax-linear-status-up2"]}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.88 18.15V16.08"
          stroke="#0C7C9D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 18.15V14.01"
          stroke="#0C7C9D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17.12 18.15V11.93"
          stroke="#0C7C9D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17.12 5.85L16.66 6.39C14.11 9.37 10.69 11.48 6.88 12.43"
          stroke="#0C7C9D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14.19 5.85H17.12V8.77"
          stroke="#0C7C9D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke="#0C7C9D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g opacity="0"></g>
      </svg>
    </div>
  );
};
