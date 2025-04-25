import JobDetails from "@/components/jobs/jobDetails";

const JobPage = ({ params }) => {

  return <JobDetails id={params.id} />;
};

export default JobPage;
