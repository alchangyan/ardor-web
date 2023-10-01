import cn from 'classnames';

import "./Card.scss";

function Card({ image, title, type, children }) {
  return (
    <div className={cn("card", {
      card_winner: type === 'winner' || type === 'winner-dynamic',
      dynamic: type === 'winner-dynamic'
    })}>
      <div className="card__wrapper">
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
