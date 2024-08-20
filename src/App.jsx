import Intro from './components/Intro.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <div className='flex items-center w-full flex-col'>
      <Header />
      <Intro />
      <Footer />
    </div>
  )
}

export default App
