const BookMarkIcon = ({ pathColor } : { pathColor? : string }) => (

  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 28 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M7 5.60005C7 4.05365 8.2536 2.80005 9.8 2.80005H18.2C19.7464 2.80005 21 4.05365 21 5.60005V25.2001L14 21.7001L7 25.2001V5.60005Z" 
      fill={pathColor ? "currentColor" : "#666666"}
      className={pathColor ? `text-${pathColor}` : ""}
    />
  </svg>

);
export default BookMarkIcon