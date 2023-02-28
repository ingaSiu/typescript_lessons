import styled from 'styled-components';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'submit';
  color?: string;
  title: string;
};

const Button = ({ onClick, type, color, title }: Props) => {
  return (
    <ButtonStyle onClick={onClick} type={type} color={color}>
      {title}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 60px;
  background-color: '#fff';
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
