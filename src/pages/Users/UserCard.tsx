import styled from 'styled-components';
import { getFullName } from '../../utils/string';

interface UserCardProps {
  user: any; // nurodyti tinkama tipa
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Container>
      <Email>{user.email}</Email>
      <p>{getFullName(user.first_name, user.last_name)}</p>
      {/*password function*/}
      <p>*****</p>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Email = styled.p`
  color: #4267b2;
  font-weight: 500;
`;
