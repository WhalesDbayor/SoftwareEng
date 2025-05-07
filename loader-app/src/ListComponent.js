const ListComponent = ({ files, handleDelete }) => {

  return ( 
    <div className="list-component">
      {
        files.map((file) => (
          <div className="list-component-preview" key={file.id}>
            {
              file.length === 0 ? (
                <p>No items found</p>
              ) : 
              (
                <ul>
                  <li><h4>{ file.title }</h4></li>
                  <li><p>{ file.body }</p></li>
                  <li><button onClick={() => handleDelete(file.id)}>Delete</button></li>
                </ul>
              )
            }
          </div>
        ))
      }
    </div>
   );
}
 
export default ListComponent;