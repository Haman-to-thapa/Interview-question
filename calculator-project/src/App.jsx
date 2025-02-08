import { useState } from 'react'


function App() {
  const [count, setCount] = useState('')

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div>
              <input type="text" value={count} />
            </div>
            <div>
              <input type="button" value="AC" onClick={(e) => setCount("")} />
              <input type="button" value="DE" onClick={(e) => setCount(count.slice(0, -1))} />
              <input type="button" value="." onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="/" onClick={(e) => setCount(count + e.target.value)} />
            </div>

            <div>
              <input type="button" value="7" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="8" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="9" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="*" onClick={(e) => setCount(count + e.target.value)} />
            </div>

            <div>
              <input type="button" value="4" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="5" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="6" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="+" onClick={(e) => setCount(count + e.target.value)} />
            </div>

            <div>
              <input type="button" value="1" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="2" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="3" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="-" onClick={(e) => setCount(count + e.target.value)} />
            </div>

            <div>
              <input type="button" value="00" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="0" onClick={(e) => setCount(count + e.target.value)} />
              <input type="button" value="=" onClick={(e) => setCount(eval(count))} />

            </div>

          </form>
        </div>
      </div>

    </>
  )
}

export default App

