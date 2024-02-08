import react from 'react'
import './App.css'

function App() {
  const [count, setCount] = react.useState(0)

  return (
    <div className='landing-container'>
      <div className='landing-wrapper'>
        <img src="src/images/some.png" alt="image of something, idk" className='landing-wrapper-img' />
        <div className="landing">
          {count}
          <div onClick={() => setCount(count + 1)}>aaaaaaaa</div>
          <a href="/lox">nigga</a>
        </div>
      </div>
    </div>
  )
}

export default App
