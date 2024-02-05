import Icons from "./Icons";
import { memo } from "react";
const Card = ({ onPlay, player, index, gameEnd }) => {
  let icon = <Icons />;
  if (player == "X") {
    icon = <Icons name={"cross"} />;
  } else if (player == "O") {
    icon = <Icons name={"circle"} />;
  }
  return (
    <div
      className="card"
      onClick={() => !gameEnd && player == "" && onPlay(index)}
    >
      {icon}
    </div>
  );
};

export default memo(Card);
