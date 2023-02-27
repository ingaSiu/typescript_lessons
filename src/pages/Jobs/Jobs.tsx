import { useState } from 'react';
import { useJobs } from '../../hooks/jobs';
import Modal from 'react-modal';
// TODO: sukurti job korteles
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
const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <div>Jobs are loading</div>;
  }
  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet. </div>;
  }
  console.log(jobs);
  return (
    <>
      <div>
        {jobs.map((job) => (
          <p key={job.id}>
            {job.title} ${job.price}
          </p>
        ))}
      </div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </>
  );
};

export default Jobs;
