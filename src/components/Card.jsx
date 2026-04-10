import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "../styles/Card.css";

const Card = ({ title, description, image, link }) => {
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
        >
          {t("view_project")}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;















































//kelvin c edouard creator