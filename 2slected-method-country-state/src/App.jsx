// import React, { useState } from "react"


// const countries = [
//   {
//     name: "India",
//     value: "IN",
//     cities: [
//       "Delhi",
//       "Mumbai"
//     ]
//   },
//   {
//     name: "Pakistan",
//     value: "PK",
//     cities: [
//       "Karachi",
//       "Lahore"
//     ]
//   },
//   {
//     name: "Bangladesh",
//     value: "BD",
//     cities: [
//       "Dhaka",
//       "Chittagong"
//     ]
//   },
//   {
//     name: "China",
//     value: "CN",
//     cities: [
//       "Beijing",
//       "Shanghai"
//     ]
//   }
// ];

// function App() {

//   const [country, setCountry] = useState({ name: "", value: "", cities: [] })

//   return (
//     <div>
//       <select
//         value={country}
//         onChange={(e) => (
//           setCountry(e.target.value)
//         )}>
//         {
//           countries.map((item, index) => {
//             return (<option value={index} key={index} >
//               {item.name}
//             </option>)
//           })
//         }
//       </select>

//       {/* ==second step to dropdown data */}

//       <select
//         value={country}
//       > {
//           countries[country].cities.map((item, index) => {
//             return <option value={index}>{item}</option>
//           })
//         }

//       </select>

//     </div>
//   )
// }

// export default App



import React, { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"]
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Karachi", "Lahore"]
  },
  {
    name: "Bangladesh",
    value: "BD",
    cities: ["Dhaka", "Chittagong"]
  },
  {
    name: "China",
    value: "CN",
    cities: ["Beijing", "Shanghai"]
  }
];

function App() {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(""); // Store index
  const [selectedCity, setSelectedCity] = useState(""); // Store selected city

  const handleCountryChange = (e) => {
    const index = e.target.value;
    setSelectedCountryIndex(index);
    setSelectedCity(""); // Reset city selection
  };

  return (
    <div>
      {/* Country Dropdown */}
      <select value={selectedCountryIndex} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>

      {/* City Dropdown (Only show when country is selected) */}
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={selectedCountryIndex === ""}>
        <option value="">Select a city</option>
        {selectedCountryIndex !== "" &&
          countries[selectedCountryIndex].cities.map((city, index) => (
            <option value={city} key={index}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
}

export default App;
