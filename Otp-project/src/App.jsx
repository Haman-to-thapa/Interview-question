
import './App.css'
import PhoneOtpLogin from './components/PhoneOtpLogin'

function App() {


  return (
    <div className=' flex  flex-col  items-center justify-center min-h-screen gap-10 text-center gap-y-10'>
      <p className='text-3xl font-bold '>Login With Phone</p>
      <PhoneOtpLogin />
    </div>
  )
}

export default App
