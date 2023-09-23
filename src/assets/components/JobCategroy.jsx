import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Category from "./Category";

const JobCategroy = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="max-w-[80rem] mx-auto">
      <SectionTitle title={"Job Category List"}>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </SectionTitle>

      <div className="grid grid-cols-4 gap-6 mb-32 ">
        {category.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategroy;
