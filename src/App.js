// import React, { createContext, useEffect, useState } from 'react';
// import GetData from './component/GetData';
// // import ContextApi from './component/ContextApi';
// // import { Route, Routes } from 'react-router-dom';
// // import WelcomeComponent from './component/WelcomeComponent';
// // import LogInForm from './component/From';
// // const FirstName = createContext();
// const FetchApi = createContext();
// function App() {
//   const [api1,setApi1]=useState();
  
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products/')
//     .then((response) => response.json())
//     .then((api1) => setApi1(api1))
//     .catch((error) => console.error('Error fetching API data:', error));
//   },[])
//   return (
//     <>
//       {/* <Routes>
//         <Route path="/" element={<LogInForm />} />
//         <Route
//           path="/welcome"
//           element={<WelcomeComponent />} // Pass data as props
//         />
//       </Routes> */}
//       {/* <div>
//         <FirstName.Provider value={'Naman'}>
//           <ContextApi/>
//         </FirstName.Provider>
        
//       </div> */}
//       <div>
//           <FetchApi.Provider>
//             <GetData/>
//           </FetchApi.Provider>
//       </div>
//     </>
//   );
// }

// export default App;
// // export {FirstName};
// export {FetchApi};


// import React, { createContext, useEffect, useState } from 'react';
// import GetData from './component/GetData';

// const FetchApi = createContext();

// function App() {
//   const [api1, setApi1] = useState();
//   useEffect(() => {
//     // Replace the empty string with your API endpoint
//     fetch('https://fakestoreapi.com/products/')
//       .then((response) => response.json()) 
//       .then((api1) => setApi1(api1))
//       .catch((error) => console.error('Error fetching API data:', error));
//   }, []);

//   return (
//     <div>
//       <FetchApi.Provider value={api1}>
//         <GetData />
//       </FetchApi.Provider>
//     </div>
//   );
// }

// export default App;
// export {FetchApi};

import React from "react";
import FormDataInConsole from "./component/FormDataInConsole";
function App(){
  return(
    <>
    {/* <Search/> */}
    <FormDataInConsole/>
    </>
  )
}
export default App;