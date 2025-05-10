import { useEffect, useState } from 'react';
import ListComponent from './ListComponent';

const Home = () => {
  
  const handleDelete = (id) => {
    const newFiles = files.filter((file) => file.id !== id);
    setFiles(newFiles);
  }
  
  const [ name, setName ] = useState('Ishaq');
  const [files, setFiles] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) {
          throw Error("Well... cannot load this data from the resource.");
        }
        return res.json()
      })
      .then(data => {
        setFiles(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const nameChangeFn = () => {
    const nameList = ['Ishaq Adebayo', 'Wabalonline', 'Whales D\'bayor', 'Wabalo'];

    let newName;
    do {
      newName = nameList[Math.floor(Math.random() * nameList.length)];
    } while (newName === name);
  
    setName(newName);
  }

  return ( 
    <div className="home">
      <h1>Welcome to the Loader App</h1>
      <h4>{ name }</h4>
      <button onClick={nameChangeFn} >Change Name</button>
      {error && <div className="error">{ error }</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {
        files && <ListComponent files={ files } handleDelete={ handleDelete } />
      }
      {/* {files && <PaginatedList data={ files }/>} */}
      
    </div>
   );
}
 
export default Home;