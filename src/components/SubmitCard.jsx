import { Link } from 'react-router-dom';
import '../styles/SubmitCard.css';

const SubmitCard = () => {
  return (
    <div className="Submit-Card">
      <img
        className="envelope-icon"
        src="src\assets\envelope-icon.svg"
        alt="envelope-icon"
      />
      <div className="submit-text">
        Thank you for submitting! We will get back to you as soon as possible.
      </div>
      <button className="btn btn-primary bg-blue-back" type="back">
        <Link to="/" className="link-text">
          Back
        </Link>
      </button>
    </div>
  );
};

export default SubmitCard;
