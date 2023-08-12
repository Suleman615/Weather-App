
import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { BackgroundLayout, MiniCard, WeatherCard } from './components'
import { useStateContext } from './context'

function App() {
  const [input, setInput] = useState('')

  const { weather, thisLocation, values, setPlace } = useStateContext()
  const submitCity = () => {
    setPlace(input)
    setInput('')
  }


  return (

    <div className='w-full h-screen text-white '>
      <nav className='w-full p-3 flex justify-center md:justify-between items-center '>
        <h1 className='font-bold tracking-wide text-3xl hidden md:block'>Weather</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl  rounded-full flex items-center p-2 gap-2 '>
          <img src={search} alt="search" className='w=[1.5rem] h-[1.5rem]' />
          <input placeholder='Search City...' onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCity()
            }
          }} type="text" className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4 px-2 md:px-[10%] items-center justify-center'>
        <WeatherCard place={thisLocation} windSpeed={weather.wspd} humidity={weather.humidity} temperature={weather.temp} heatindex={weather.heatindex} iconString={weather.conditions} Precipitation={weather.pop} />
        <div className=' flex justify-center gap-8 flex-wrap w-[100%] md:w-[60%]'>

          {
            values?.slice(1, 7).map((curr) => {
              return (<MiniCard key={curr.datetime} time={curr.datetime} temp={curr.temp} iconString={curr.conditions} />)
            })
          }
        </div>
      </main>
    </div>
  )
}

export default App
