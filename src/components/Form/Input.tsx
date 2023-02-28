import styled from 'styled-components';

const Input = (props: any) => {
  return <InputStyled {...props} />;
};

export default Input;

const InputStyled = styled.input`
  font-size: 16px;
  border-radius: 4px;
  padding: 10px 14px;
  border: 1px solid black;
  outline: none;
  width: 100%;
`;
