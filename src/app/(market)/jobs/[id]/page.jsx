import JobDetails from "@/components/Jobs/jobDetails";

const JobPage = ({ params }) => {

  return <JobDetails id={params.id} />;
};

export default JobPage;
