const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="60vw"
      height="60vh"
      viewBox="0 0 128 128"
      style={{ margin: "auto" }}
    >
      <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
      <g>
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#000000"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#f8f8f8"
          transform="rotate(30 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#e8e8e8"
          transform="rotate(60 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#d4d4d4"
          transform="rotate(90 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#bebebe"
          transform="rotate(120 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#a6a6a6"
          transform="rotate(150 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#8e8e8e"
          transform="rotate(180 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#737373"
          transform="rotate(210 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#5a5a5a"
          transform="rotate(240 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#414141"
          transform="rotate(270 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#2a2a2a"
          transform="rotate(300 64 64)"
        />
        <path
          d="M64 0a8 8 0 0 1 8 8c0 4.42-8 48.92-8 48.92S56 12.42 56 8a8 8 0 0 1 8-8z"
          fill="#151515"
          transform="rotate(330 64 64)"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64"
          calcMode="discrete"
          dur="1080ms"
          repeatCount="indefinite"
        ></animateTransform>
      </g>
    </svg>
  );
};

export default Spinner;
