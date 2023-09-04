import imgError from './error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {
  return (
    <img 
      src={imgError}
      className='error-image'
      alt='errorImage' />
  )
};

export default ErrorMessage;