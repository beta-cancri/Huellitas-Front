import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './detail.styles.css';

const Detail = () => {
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 
  const { id } = useParams(); // Obtener el ID del animal desde la URL

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`http://localhost:3001/pets/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch animal data');
        }
        const data = await response.json();
        setAnimal(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching animal:', error);
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!animal) {
    return <p>Error: Animal not found.</p>;
  }

  return (
    <div className="animal-detail">
      <img src={animal.photo} alt={animal.name} className="animal-image" />
      <div className="animal-detail-content">
        <h2>{animal.name}</h2>
        <p><strong>Species:</strong> {animal.species}</p>
        <p><strong>Status:</strong> {animal.status}</p>
        <p><strong>Age:</strong> {animal.age}</p>
        <p><strong>Size:</strong> {animal.size}</p>
        <p><strong>Strong:</strong> {animal.energyLevel}</p>
        <p><strong>¿Is he good with other pets?</strong> {animal.okWithPets ? 'Sí' : 'No'}</p>
        <p><strong>¿He good with children?</strong> {animal.okWithKids ? 'Sí' : 'No'}</p>
        <p><strong>Breed:</strong> {animal.breed ? animal.breed : 'No especificado'}</p>
        <p><strong>History:</strong> {animal.history ? animal.history : 'No disponible'}</p>
        <button className="back-button" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default Detail;
