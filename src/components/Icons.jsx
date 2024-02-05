import { FaRegCircle, FaTimes, FaPencilAlt } from "react-icons/fa";
import { memo } from "react";
const Icons = ({ name }) => {
  if (name == "circle") {
    return <FaRegCircle />;
  } else if (name == "cross") {
    return <FaTimes />;
  } else {
    return <FaPencilAlt />;
  }
};

export default memo(Icons);
