import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CarService } from '../../services/car.service';
import { useEffect } from 'react';
import { CarCard } from '../CarCard';
import { Link } from 'react-router-dom';
import s from './CarDetail.module.css';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const response = await CarService.getById(id);
      setCar(response);
    };
    fetchData();
  }, [id]);
  if (!car?.name) return <p>loading...</p>;
  return (
    <div>
      <CarCard car={car} />
      <Link className={s.btn} to={`/`}>
        Back
      </Link>
    </div>
  );
};

export default CarDetail;
