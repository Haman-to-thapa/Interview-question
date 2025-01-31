// import { useState } from "react";

// const PasswordInput = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="relative w-64">
//       <input
//         type={showPassword ? "text" : "password"}
//         className="w-full p-2 border rounded-lg"
//         placeholder="Enter your password"
//       />
//       <button
//         type="button"
//         className="absolute right-3 top-2 text-gray-500"
//         onClick={() => setShowPassword(!showPassword)}
//       >
//         {showPassword ? "🙈" : "👁️"}
//       </button>
//     </div>
//   );
// };

// export default PasswordInput;




// import React from 'react'
// import { useState } from 'react'

// const Password = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <div>
//       <input type={showPassword ? "text" : "password"} />
//       <button onClick={() => setShowPassword(!showPassword)}>
//         {showPassword ? "🙈" : "👁️"}
//       </button>
//     </div>
//   )
// }

// export default Password




import React from 'react'
import { useState } from 'react'

const Password = () => {

  const [showPassword, setShowPassword] = useState(false)
  return (

    <div>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? "🙈" : "👁️"}</button>
    </div>
  )
}

export default Password