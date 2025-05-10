import { useState } from "react";

const Create = () => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ author, setAuthor ] = useState('Ishaq');
  const [ isPending, setIsPending ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentData = { title, content, author };

    setIsPending(true);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(contentData)
    })
    .then(() => {
      console.log("Data Sent...");
      setIsPending(false);
    })
    console.log(contentData);
  }

  return ( 
    <div className="create">
      <h2>Add New Data</h2>
      <form onSubmit={ handleSubmit }>
        <label>Title:</label>
        <input type="text" required value={ title } onChange={ e => setTitle(e.target.value) }/>
        <label>Content:</label>
        <textarea required value={ content } onChange={ e => setContent(e.target.value) }></textarea>
        <label>Author:</label>
        <select value={ author } onChange={ e => setAuthor(e.target.value) }>
          <option value="Ishaq">Ishaq</option>
          <option value="Wabal">Wabal</option>
        </select>
        { !isPending && <button>ADD DATA</button> }
        { isPending && <button disabled>Adding data...</button> }
      </form>
    </div>
   );
}
 
export default Create;