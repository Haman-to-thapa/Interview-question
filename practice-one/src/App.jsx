import React, { useState } from 'react'

const App = () => {




  let [newFriend, setNewFriend] = useState('')
  let [allFriends, setFriends] = useState([{}])
  let [isAssign, setAssign] = useState(false)
  let gifts = ["Decoration", "firecrackers", "Anar", "bombs"]

  let handleNewFriend = (event) => {
    setNewFriend(event.target.value)

  }


  let handleSubmit = (event) => {
    event.preventDefault();

    setFriends((arr) => {
      return [...arr, { name: newFriend, gift: "No gifts assigned" }]
    });
    setNewFriend('')
  }



  let handleAssign = () => {
    if (!isAssign) {
      setFriends((arr) => {
        let newArr = arr.map((el) => {
          el.gift = gifts[Math.floor(Math.random() * gifts.length)];
          return { ...el };
        })
        return [...newArr]
      })
    }
    setAssign(true)

  }

  let handleSuffer = () => {
    setFriends((arr) => {
      let newArr = arr.map((el) => {
        el.gift = gifts[Math.floor(Math.random() * gifts.length)]
        return { ...el }
      })
      return [...newArr]
    })
  }

  let handleReset = () => {
    setFriends((arr) => {
      let newArr = arr.map((el) => {
        el.gift = "No gifts assigned"
        return { ...el }
      })
      return [...newArr]
    })
  }


  return (<div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter your friend name' onChange={handleNewFriend} value={newFriend} />
      <button>Gift</button>
    </form>
    <div>
      {allFriends.map((el, index) => {
        return (
          <li key={index}>{el.name} - {el.gift} </li>

        )
      })}

      <div className='btns'>
        <button onClick={handleAssign}>assign Gifts</button>
        <button onClick={handleSuffer}>Suffer gifts</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  </div>
  )
}

export default App

