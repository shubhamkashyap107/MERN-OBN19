// import React from 'react'
// import Card from './Components/Card'

// const App = () => {


// const people = [
//   {
//     name: "John Doe",
//     imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
//   },
//   {
//     name: "Jane Smith",
//     imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//   },
//   {
//     name: "Michael Johnson",
//     imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
//   },
//   {
//     name: "Emily Davis",
//     imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
//   },
//   {
//     name: "Chris Brown",
//     imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598"
//   }
// ];

//   return (
//     <div>
//       {
//         people.map((item) => {

//           return <Card imgSrc={item.imageUrl} name={item.name} />
//           // return (
//           //   <div>
//           //     <img src={item.imageUrl} alt="" />
//           //     <p>{item.name}</p>
//           //   </div>
//           // )
//         })
//       }
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {


  function btnClickHandler()
  {
    console.log("Button CLicked")
  }


  return (
    <div>
      <button onClick={btnClickHandler}>Click Me 2</button>


      <button onClick={() => {
        console.log("Btn 3 clicked")
      }}>Click Me 3</button>

      
    </div>
  )
}

export default App