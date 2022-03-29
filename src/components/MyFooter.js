import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MyFooter = () => {
  return (
    <p className="footer">
      Created with <FontAwesomeIcon icon={faHeart} size="sm" />
    </p>
  );
};

export default MyFooter;
