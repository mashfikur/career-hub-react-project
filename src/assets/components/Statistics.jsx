import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCategroy from "./JobCategroy";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Career Hub | Home </title>
      </Helmet>
      <Banner></Banner>
      <JobCategroy></JobCategroy>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Statistics;
