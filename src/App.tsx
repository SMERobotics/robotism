import { Routes, Route, Link } from 'react-router-dom'
import Design1 from './designs/Design1'
import Design2 from './designs/Design2'
import Design3 from './designs/Design3'
import Design4 from './designs/Design4'
import Design5 from './designs/Design5'
import Design6 from './designs/Design6'
import Design7 from './designs/Design7'
import Design8 from './designs/Design8'
import Design9 from './designs/Design9'
import Design10 from './designs/Design10'
import FinalDesign from './designs/FinalDesign'

function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-8 font-mono">
      <h1 className="text-4xl mb-12 font-bold tracking-tighter">ROBOTISM PROTOTYPES</h1>
      
      <div className="mb-12">
        <Link 
            to="/final"
            className="group relative block p-8 border-2 border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all bg-neutral-900 overflow-hidden text-center max-w-md mx-auto"
        >
          <div className="text-2xl font-bold text-cyan-400 group-hover:text-white mb-2">FINAL DESIGN</div>
          <div className="text-sm text-cyan-600/80 uppercase tracking-widest">Blueprint x Deep Ocean</div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <Link 
            key={num} 
            to={`/${num}`}
            className="group relative block p-4 border border-neutral-800 hover:border-neutral-500 transition-colors bg-neutral-900/50 overflow-hidden"
          >
            <div className="text-xl font-bold text-neutral-600 group-hover:text-white transition-colors">
              {num < 10 ? `0${num}` : num}
            </div>
            <div className="text-xs text-neutral-500 group-hover:text-neutral-300 mt-2">
              Variant
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/final" element={<FinalDesign />} />
      <Route path="/1" element={<Design1 />} />
      <Route path="/2" element={<Design2 />} />
      <Route path="/3" element={<Design3 />} />
      <Route path="/4" element={<Design4 />} />
      <Route path="/5" element={<Design5 />} />
      <Route path="/6" element={<Design6 />} />
      <Route path="/7" element={<Design7 />} />
      <Route path="/8" element={<Design8 />} />
      <Route path="/9" element={<Design9 />} />
      <Route path="/10" element={<Design10 />} />
    </Routes>
  )
}

export default App
