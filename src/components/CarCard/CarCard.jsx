import PropTypes from 'prop-types';
import s from './CarCard.module.css';
import { Link } from 'react-router-dom';
import { Price } from './Price.jsx';

export const CarCard = ({ car }) => {
  return (
    <div className={s.root}>
      <div
        className={s.image}
        style={{
          backgroundImage: `url(${car.image})`
        }}
      />

      <div className={s.info}>
        <h2>{car.name}</h2>
        <Price price={car.price} />
        <Link className={s.btn} to={`/car/${car.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
  })
};
