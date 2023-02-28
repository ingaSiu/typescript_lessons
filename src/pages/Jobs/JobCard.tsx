import styled from 'styled-components';
import { NewJob } from '../../types/jobApi';

type JobCardProps = {
  job: NewJob;
};

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Container>
      <Content>
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <p>Starting from : {job.starting_from}</p>
        <p>{job.type}</p>
        <p>Salary: ${job.price}</p>
      </Content>

      <ImgContainer>
        <img src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" alt="developer icon"></img>
      </ImgContainer>
    </Container>
  );
};

export default JobCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  justify-content: space-around;

  img {
    width: 30%;
  }
`;

const ImgContainer = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
