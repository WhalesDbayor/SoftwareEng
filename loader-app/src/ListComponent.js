import { useState } from "react";

const ListComponent = ({ files, handleDelete }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // Calculate start & end index for slicing
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = files.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(files.length / itemsPerPage);

  // Handle Page Changes
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container">

      <div className="list-component">
        {
          currentItems.map((file) => (
            <div className="list-component-preview" key={file.id}>
              {
                files.length === 0 ? (
                  <p>No items found here. Thanks</p>
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

      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
        {[...Array(totalPages).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => goToPage(number + 1)}
            style={{ fontWeight: currentPage === number + 1 ? 'bold' : 'normal' }}
          >
            {number + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>

    </div> 
   );
}
 
export default ListComponent;