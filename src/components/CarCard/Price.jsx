import PropTypes from 'prop-types';

export const Price = ({ price }) => {
  return (
    <p>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)}
    </p>
  );
};

Price.propTypes = {
  price: PropTypes.number
};
