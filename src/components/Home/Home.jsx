import { CreateCarForm } from '../CreateCarForm';
import { useState, useContext } from 'react';
import s from './Home.module.css';
import { CarCard } from '../CarCard';
import { CarService } from '../../services/car.service';
import { AuthContext } from '../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

export const Home = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: 'cars',
    queryFn: () => CarService.getAll()
  });
  const [userName, setUserName] = useState('');
  const { user, setUser } = useContext(AuthContext);

  const onCreateCar = () => {
    refetch();
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={s.root}>
      <h1>Cars catalog</h1>
      {user ? (
        <>
          <h2>welcome, {user.name}!</h2>
          <button onClick={() => setUser(null)}>Log out</button>
        </>
      ) : (
        <>
          <label>
            Name:
            <input onChange={(e) => setUserName(e.target.value)} />
          </label>

          <button onClick={() => setUser({ name: userName })}>Login</button>
        </>
      )}
      <CreateCarForm onCreateCar={onCreateCar} />
      <div className={s.carList}>
        {data.length ? (
          data.map((car) => <CarCard car={car} key={car.id} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
};
