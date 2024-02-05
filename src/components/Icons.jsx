import { FaRegCircle, FaTimes, FaPencilAlt } from "react-icons/fa";

const Icons = ({ name }) => {
  if (name == "circle") {
    return <FaRegCircle />;
  } else if (name == "cross") {
    return <FaTimes />;
  } else {
    return <FaPencilAlt />;
  }
};

export default Icons;
