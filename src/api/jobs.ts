import axios from 'axios';
import { Job } from '../types/jobApi';

const JOBS_API_URL = 'https://testapi.io/api/rokasandreikenas/resource/jobs';

export const fetchJobs = (): Promise<Job[]> => {
  return axios.get(JOBS_API_URL).then((response) => response.data.data);
};

type CreateJobRequest = Omit<Job, 'id' | 'createdAt' | 'updatedAt'>;

export const createJob = (job: CreateJobRequest): Promise<Job> => {
  return axios.post(JOBS_API_URL, job).then((response) => response.data);
};
