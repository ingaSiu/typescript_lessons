import { Field, ErrorMessage } from 'formik';
import Input from './Input';

type Props = {
  name: string;
  placeholder: string;
};

const FormikInput = ({ name, placeholder, ...rest }: Props) => {
  return (
    <div>
      <Field name={name} as={Input} {...rest} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikInput;
