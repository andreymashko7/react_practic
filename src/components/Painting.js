import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

export default function Painting({
  url = defaultImage,
  title,
  profileUrl,
  authorName,
  price,
  quantity,
}) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена: {price}кредитов</p>
      <p>Доступномть: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзинуж</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
