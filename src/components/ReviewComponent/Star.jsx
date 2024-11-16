export default function Star({ selected, onClick }) {
    return (
      <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill={selected ? "yellow" : "white"}
        stroke={selected ? "white" : "black"}
        strokeWidth="1"
        className={`cursor-pointer transition-all duration-200 ease-in-out`}
      >
        <polygon points="12,2 15,8 22,8 17,12 19,19 12,15 5,19 7,12 2,8 9,8" />
      </svg>
    );
  }