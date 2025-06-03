import JobDetails from "../../../../components/Jobs/jobDetails";

const JobPage = ({ params }) => {
  // console.log("we are coming");
  // console.log("Dynamic ID:", params.id);

  return <JobDetails id={params.id} />;
};

export default JobPage;
