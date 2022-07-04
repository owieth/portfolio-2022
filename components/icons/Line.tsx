export const Line = ({
  fill = "currentColor",
}) => {
  return (
    <svg width="2" height="100%" viewBox="0 0 2 100%" xmlns="http://www.w3.org/2000/svg">
      <line x1="1" y1="1" x2="1" y2="100%" stroke={fill} strokeWidth="2" />
    </svg>
  );
};
