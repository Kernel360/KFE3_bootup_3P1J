const BackIcon = ({ pathColor } : { pathColor? : string }) => (
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
      d="M13.59 23.3899C13.0432 23.9366 12.1568 23.9366 11.6101 23.3899L3.21005 14.9899C2.66332 14.4432 2.66332 13.5567 3.21005 13.01L11.6101 4.61C12.1568 4.06327 13.0432 4.06327 13.59 4.61C14.1367 5.15674 14.1367 6.04317 13.59 6.5899L7.5799 12.6H23.8C24.5732 12.6 25.2 13.2268 25.2 14C25.2 14.7732 24.5732 15.4 23.8 15.4L7.5799 15.4L13.59 21.41C14.1367 21.9567 14.1367 22.8432 13.59 23.3899Z" 
      fill={pathColor ? "currentColor" : "#666666"}
      className={pathColor ? `text-${pathColor}` : ""}
    />
  </svg>
);
export default BackIcon;
