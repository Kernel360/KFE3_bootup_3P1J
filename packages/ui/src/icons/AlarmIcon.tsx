const AlarmIcon = ({ pathColor } : { pathColor? : string }) => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 28 28" 
    fill="current" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M14 2.80005C9.36085 2.80005 5.60004 6.56086 5.60004 11.2V16.2202L4.61009 17.2101C4.2097 17.6105 4.08992 18.2127 4.30661 18.7358C4.5233 19.259 5.03379 19.6 5.60004 19.6H22.4C22.9663 19.6 23.4768 19.259 23.6935 18.7358C23.9102 18.2127 23.7904 17.6105 23.39 17.2101L22.4 16.2202V11.2C22.4 6.56086 18.6392 2.80005 14 2.80005Z" 
      fill={pathColor ? "currentColor" : "#666666"}
      className={pathColor ? `text-${pathColor}` : ""}
    />
    <path 
      d="M14 25.2001C11.6804 25.2001 9.8 23.3196 9.8 21H18.2C18.2 23.3196 16.3196 25.2001 14 25.2001Z" 
      fill={pathColor ? "currentColor" : "#666666"}
      className={pathColor ? `text-${pathColor}` : ""}
    />
  </svg>
);
export default AlarmIcon;
