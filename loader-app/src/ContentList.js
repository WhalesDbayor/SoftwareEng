import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ContentList = () => {
  const { id } = useParams();
  const [files, setFiles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
    }, [id]);

  return ( 
    <div className="content-list">
      {error && <div className="error">{ error }</div>}
      {isLoading && <div className="loading">Loading...</div>}
      <h2>Content list - { id }</h2>

      { files && <ul>
          <li><h4>{ files.title }</h4></li>
          <li><p>{ files.body }</p></li>
      </ul> }
      
    </div>
  );
}
 
export default ContentList;