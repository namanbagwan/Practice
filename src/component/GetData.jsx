import React, { useContext } from 'react';
import { FetchApi } from "../App"; // Import the context

function GetData() {
  const api = useContext(FetchApi); 
  return (
    <>
    {api?.map((item) => {
  console.log(item); // Log each item
  return (
    <div key={item.id}>
      {item.id}
      {item.title}
      <img src={item.image} alt={item.title} width="50px" />
    </div>
  );
})}

    </>
  );
}

export default GetData;
