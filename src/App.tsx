import react from 'react'
import './App.css'

function App() {
  const [count, setCount] = react.useState(0)

  return (
    <>
      {count}
      <div onClick={() => setCount(count + 1)}>aaaaaaaa</div>
      <a href="/lox">nigga</a>
    </>
  )
}

export default App
