import "./Card.scss";

function Card({ image, title, children }) {
  return (
    <div className="card__wrapper">
      <div className="card">
        <div className="card__image">
          {image && <img src={image} alt="card background" />}
        </div>
        <div className="card__title">
          <div className="card__title-text">{title}</div>
        </div>
        <div className="card__content">{children}</div>
      </div>
    </div>
  );
}

export default Card;
