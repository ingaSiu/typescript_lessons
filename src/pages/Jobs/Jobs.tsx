import ModalComponent from '../../components/Modal/Modal';
import { useJobs } from '../../hooks/jobs';

import JobCard from './JobCard';

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();

  if (isLoading) {
    return <div>Jobs are loading</div>;
  }
  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet. </div>;
  }
  console.log(jobs);
  return (
    <>
      <ModalComponent />
      <div>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default Jobs;
