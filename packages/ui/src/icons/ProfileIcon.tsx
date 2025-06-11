const ProfileIcon = ({ pathColor } : { pathColor? : string }) => (

  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 28 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M14 12.6C16.3196 12.6 18.2 10.7195 18.2 8.39995C18.2 6.08036 16.3196 4.19995 14 4.19995C11.6804 4.19995 9.80001 6.08036 9.80001 8.39995C9.80001 10.7195 11.6804 12.6 14 12.6Z" 
      fill={pathColor ? "currentColor" : "#666666"}
      className={pathColor ? `text-${pathColor}` : ""}
    />
    <path 
      d="M4.20001 25.2C4.20001 19.7876 8.58762 15.4 14 15.4C19.4124 15.4 23.8 19.7876 23.8 25.2H4.20001Z" 
      fill={pathColor ? "currentColor" : "#666666"}
      className={pathColor ? `text-${pathColor}` : ""}
    />
  </svg>
);
export default ProfileIcon;
