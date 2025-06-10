const PinIcon = ({ pathColor } : { pathColor? : string }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.07035 5.6704C10.8975 1.84326 17.1025 1.84326 20.9296 5.6704C24.7568 9.49754 24.7568 15.7026 20.9296 19.5297L14 26.4593L7.07035 19.5297C3.24321 15.7026 3.24321 9.49754 7.07035 5.6704ZM14 15.4C15.5464 15.4 16.8 14.1464 16.8 12.6C16.8 11.0537 15.5464 9.80005 14 9.80005C12.4536 9.80005 11.2 11.0537 11.2 12.6C11.2 14.1464 12.4536 15.4 14 15.4Z"
      fill={pathColor ? "currentColor" : "#666666"}
      className={pathColor ? `text-${pathColor}` : ""}
    />
  </svg>
);
export default PinIcon;