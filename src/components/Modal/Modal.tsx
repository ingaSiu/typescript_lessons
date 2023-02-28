import styled from 'styled-components';
import Modal from 'react-modal';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import { NewJob } from '../../types/jobApi';
import { useCreateJob } from '../../hooks/jobs';
import FormikInput from '../Form/FormikInput';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  description: Yup.string().required('Required'),
  type: Yup.string().required('Required'),
  starting_from: Yup.string().required('Required'),
  has_drivers_license: Yup.boolean().required('Required'),
});

const ModalComponent = () => {
  const { mutateAsync: createJob } = useCreateJob();

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (values: NewJob) => {
    console.log(values);
    createJob(values)
      .then((response) => {
        setIsOpen(false);
      })
      .catch((error) => {
        console.error('Failed to add the form');
      });
  };

  const initialValues: NewJob = {
    title: '',
    price: 0,
    type: 'fullTime',
    starting_from: '',
    has_drivers_license: false,
    user_id: 0,
    description: '',
  };
  return (
    <>
      <Button onClick={openModal} title="Click a job post" />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ values, errors, isSubmitting }) => (
            <FormStyle>
              <Title>Create a job add!</Title>

              <FormikInput name="title" placeholder="Job title" />

              <FormikInput name="price" placeholder="Salary offered" />

              <FormikInput name="description" placeholder="Job description" />
              <ButtonsContainer>
                <Button onClick={closeModal} title="close" />
                <Button type="submit" title="save" />
              </ButtonsContainer>
            </FormStyle>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ModalComponent;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  gap: 20px;
`;

const Title = styled.h1`
  color: crimson;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
