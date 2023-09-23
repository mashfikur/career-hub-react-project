
import PropTypes from "prop-types";

const Desctiption = ({ title, desc }) => {
  return (
    <div>
      {" "}
      <div>
        <span className="font-extrabold"> {title} : </span>
        <span className="font-medium text-[#757575]">{desc}</span>
      </div>
    </div>
  );
};

Desctiption.propTypes = {};

export default Desctiption;
