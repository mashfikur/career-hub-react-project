import PropTypes from "prop-types";
import "./common/common.css";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className=" category-card p-14 ">
      <img src={logo} alt="" />
      <h3 className="text-xl mt-8 font-extrabold"> {category_name}</h3>
      <h3 className="text-[#A3A3A3] font-medium">{availability}</h3>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
