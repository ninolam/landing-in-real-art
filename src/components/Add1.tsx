
interface Props {
    color: string;
    className: any;
  }

const Add1: React.FC<Props> = ({className, color}) => {

    return (
        <svg
      className={`add-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill={color} />
    </svg>
    )
}

export default Add1