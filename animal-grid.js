import React from 'react';
import 'AnimalGrid.css';
import AnimalGrid from './AnimalGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zoo Dashboard</h1>
      </header>
      <AnimalGrid />
    </div>
  );
}

export default App;

const AnimalGrid = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get_animals');
      setAnimals(response.data.animals);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  const getStatusColor = (animal) => {
    const { health, food, medicine,vaccins } = animal;
    if (health && food && medicine && vaccins) return 'green';
    if ((health && food &&& vaccins}) || (health && medicine && vaccins)  || (food && medicine && vaccins)) return 'blue';
    return 'red';
  };

  return (
    <div className="animal-grid">
      {animals.map((animal) => (
        <div key={animal.id} className="animal-item" style={{ backgroundColor: getStatusColor(animal) }}>
          <h3>{animal.name}</h3>
          <p>Health: {animal.health ? 'OK' : 'N/A'}</p>
          <p>Food: {animal.food ? 'OK' : 'N/A'}</p>
          <p>Medicine: {animal.medicine ? 'OK' : 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimalGrid;
