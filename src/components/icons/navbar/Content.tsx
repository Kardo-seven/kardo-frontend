export default function ContentImg({location} : {location: string}) {
  const isActive = location === '/content';

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_866_312"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_866_312)">
        <path
          d="M4.5 20C3.95 20 3.47917 19.8042 3.0875 19.4125C2.69583 19.0208 2.5 18.55 2.5 18V6C2.5 5.45 2.69583 4.97917 3.0875 4.5875C3.47917 4.19583 3.95 4 4.5 4H16.5C17.05 4 17.5208 4.19583 17.9125 4.5875C18.3042 4.97917 18.5 5.45 18.5 6V10.5L22.5 6.5V17.5L18.5 13.5V18C18.5 18.55 18.3042 19.0208 17.9125 19.4125C17.5208 19.8042 17.05 20 16.5 20H4.5ZM4.5 18H16.5V6H4.5V18Z"
          fill={isActive ? '#FF4310' : 'white'}
        />
      </g>
    </svg>
  );
}
