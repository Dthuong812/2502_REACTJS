// import React from 'react'

// const App = () => {
//   const [count, setCount] = React.useState(0) // react hook cuar react, ban chat la 1 ham viet san ma react da viet san cho minh
//   // useState la 1 hook, no tra ve 1 mang co 2 phan tu
//   // phan tu 1 la state, phan tu 2 la ham setState
//   // useState(0) la khoi tao state ban dau la 0
//   // setCount la ham de cap nhat state
//   // count la state, setCount la ham de cap nhat state
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count + 1)// ban chat la 1 ham, no se duoc goi khi button duoc click , so sanh giua 2 gia tri previous va next
//         console.log(count)
//       }}>Click Me {count}</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import FormComponent from './components/FormComponent';
// import MenuComponent from './components/MenuComponent';

// const App = () => {
//   const [showForm, setShowForm] = useState(false); 
//   const [userName, setUserName] = useState(""); 
//   return (
//     <div>
//       {!showForm ? (
//         <MenuComponent onShowForm={() => setShowForm(true)} 
//           userName={userName}
//         />
//       ) : (
//         <FormComponent onHideForm={() => setShowForm(false)}
//          onSaveUserName={(name) => setUserName(name)} />
//       )}
//     </div>
//   );
// };

// export default App;

import React from 'react'
import MenuComponent from './components/MenuComponent'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import './App.css'

const App = () => {
  return (
    <>
      <HeaderComponent/>
      <Outlet/>
      <FooterComponent/>
    </>
  )
}

export default App