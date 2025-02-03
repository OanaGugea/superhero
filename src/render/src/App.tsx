import { useEffect, useState } from 'react';
import SuperherosModal from './SuperheroModal';
import SuperherosTable from './SuperherosTable';
import { retrieveSuperherosList } from './apis';

function App() {
  const [rows, setRows] = useState<{
    name: string;
    superpower: string;
    humilityScore: number;
  }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await retrieveSuperherosList();
      setRows(data);
    }
    fetchData();
  }, []);


  return (
    <div>
      <h1>Superheros</h1>
      <SuperherosTable rows={rows} />
      <SuperherosModal setRows={setRows}/>
    </div>
  );
}

export default App;
