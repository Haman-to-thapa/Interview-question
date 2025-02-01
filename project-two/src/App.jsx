// import React from "react";

// const App = () => {
//   let str1 = "krishna";
//   let str2 = "menu";

//   // Find the max length to iterate safely
//   let maxLength = Math.max(str1.length, str2.length);

//   // Merge characters from both strings
//   let mergedArray = [];
//   for (let i = 0; i < maxLength; i++) {
//     if (i < str1.length) mergedArray.push(str1[i]);
//     if (i < str2.length) mergedArray.push(str2[i]);
//   }

//   return (
//     <div>
//       {mergedArray.map((char, index) => (
//         <p key={index}>{char}</p>
//       ))}
//     </div>
//   );
// };

// export default App;

import React from 'react'

const App = () => {

  let str1 = "krishna";
  let str2 = "menu";

  let maxLength = Math.max(str1.length, str2.length)

  let mergedArray = [];

  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) mergedArray.push(str1[i])
    if (i < str2.length) mergedArray.push(str2[i])
  }

  return (
    <div>
      {
        mergedArray.map((char, index) => {
          return <p key={index}>
            {char}
          </p>
        })
      }
    </div>
  )
}

export default App