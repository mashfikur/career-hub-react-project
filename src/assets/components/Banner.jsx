import "./common/common.css";

const Banner = () => {
  return (
    <div className="blue-bg">
      <div className="flex items-center gap-28 pt-8 max-w-[80rem] mx-auto">
        <div className="flex-1 space-y-6 ">
          <h3 className="text-7xl font-extrabold ">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-[#9873FF]">Dream Job</span>
          </h3>
          <p className="text-xl font-medium text-[#757575]  ">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div>
            <button className="btn btn-own">Get started</button>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://i.ibb.co/tMV26yn/user.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
