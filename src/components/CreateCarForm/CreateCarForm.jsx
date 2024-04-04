import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CreateCarForm.module.css';
import { CarService } from '../../services/car.service';
import { useForm } from 'react-hook-form';

export const CreateCarForm = (props) => {
  const [data] = useState({});
  const { register, reset, handleSubmit } = useForm({
    mode: 'onChange'
  });

  const onCreateCar = async (data) => {
    await CarService.create({ ...data, price: Number(data.price) });
    reset();
    props.onCreateCar();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onCreateCar)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      <input
        type="number"
        placeholder="Price"
        {...register('price', { required: true })}
        value={data.price}
      />
      <input placeholder="Image" {...register('image', { required: true })} value={data.image} />
      <button type="submit" className={styles.button}>
        Create
      </button>
    </form>
  );
};

CreateCarForm.propTypes = {
  onCreateCar: PropTypes.func.isRequired
};
