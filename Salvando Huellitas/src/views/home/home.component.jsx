import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from '../../redux/actions';
import Cards from '../../components/cards/cards.component';
import './home.styles.css';

const HomePage = ({ search, setSearch, handleSearchSubmit }) => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchPets());
      } catch (error) {
        console.error("Failed to fetch pets", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="home">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Cards pets={pets} />
      )}
    </div>
  );
};

export default HomePage;
