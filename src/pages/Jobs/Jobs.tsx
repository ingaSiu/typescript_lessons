import { useJobs } from '../../hooks/jobs';
import { Job } from '../../types/jobApi';

const Jobs = () => {
  const { data } = useJobs();
  const jobs = data || [];

  console.log(jobs);
  return <div>Jobs</div>;
};

export default Jobs;
