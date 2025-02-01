// import React, { useState } from 'react'

// const App = () => {

//   const [todo, setTodo] = useState([])
//   const [inputValue, setInputValue] = useState('')
//   const handleChange = (e) => {
//     setInputValue(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setTodo([...todo, inputValue])
//     setInputValue('')

//   }

//   return (
//     <div>
//       <form>
//         <input type="text" onChange={handleChange} value={inputValue} />
//         <button onClick={handleSubmit}>Add</button>
//       </form>
//       <ul>
//         {
//           todo.map((val) => {
//             return <li>{val}</li>
//           })
//         }
//       </ul>

//     </div>
//   )
// }

// export default App











// import React, { useState } from 'react'

// const App = () => {



//   const [todo, setTodo] = useState([])
//   const [inputVal, setInutVal] = useState()

//   const handleChange = (e) => {
//     setInutVal(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setTodo([...todo, inputVal])
//     setInutVal('')


//   }
//   return (
//     <div>
//       <form  >
//         <input type="text" onChange={handleChange} value={inputVal} />
//         <button onClick={handleSubmit}>Add</button>

//         <ul>
//           {
//             todo.map((val) => {
//               return <li>{val}</li>
//             })
//           }
//         </ul>
//       </form>

//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState([])
  const [inputVal, setInputVal] = useState('')

  const inputChange = (e) => {
    setInputVal(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodo([...todo, inputVal])
    setInputVal('')
  }

  return (
    <div>
      <form action="">
        <input type="text" onChange={inputChange} value={inputVal} />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {
          todo.map((val, index) => {
            return <li key={index}>
              {val}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default App










































