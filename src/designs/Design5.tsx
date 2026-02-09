import { motion } from 'framer-motion';
import { Box, Target, Map, Flag, Compass, Anchor } from 'lucide-react';

const IsoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-white border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-6 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all ${className}`}
  >
    {children}
  </motion.div>
);

export default function Design5() {
  return (
    <div className="min-h-screen bg-[#e2e2e2] text-slate-900 font-sans selection:bg-yellow-400">
      <div className="fixed inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="relative z-10 p-8 md:p-16 max-w-7xl mx-auto">
        <header className="flex justify-between items-start mb-24">
          <div className="bg-slate-900 text-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
             <h1 className="text-4xl font-black italic tracking-tighter">SME.BOTS</h1>
             <div className="text-xs font-mono mt-1 text-yellow-400">EST. 2025</div>
          </div>
          
          <nav className="hidden md:flex gap-4">
             {['Mission', 'Strategy', 'Teams', 'Log'].map((item) => (
               <a key={item} href="#" className="bg-white border-2 border-slate-900 px-4 py-2 font-bold hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-y-1 active:shadow-none">
                 {item}
               </a>
             ))}
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
             <IsoCard className="mb-8 bg-yellow-400 border-slate-900" delay={0.1}>
               <div className="flex items-center gap-2 mb-4 border-b-2 border-slate-900 pb-2">
                 <Compass className="w-6 h-6" />
                 <span className="font-bold uppercase tracking-wider">Directive</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9]">
                 NAVIGATE THE <br/>
                 COMPLEXITY.
               </h2>
               <p className="text-lg font-medium max-w-lg mb-8">
                 We are Shawnee Mission East Robotics. Three teams designing custom engineered solutions for the DECODE challenge.
               </p>
               <button className="bg-slate-900 text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-slate-900 border-2 border-transparent hover:border-slate-900 transition-all">
                 View Field Map
               </button>
             </IsoCard>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <IsoCard delay={0.2}>
                  <div className="flex justify-between items-start mb-8">
                    <Target className="w-8 h-8" />
                    <span className="bg-slate-100 px-2 py-1 text-xs font-bold border border-slate-200">ACCURACY</span>
                  </div>
                  <div className="text-4xl font-black mb-2">98.5%</div>
                  <div className="text-sm text-slate-500 font-medium">Autonomous Mode Success Rate</div>
               </IsoCard>
               <IsoCard delay={0.3}>
                  <div className="flex justify-between items-start mb-8">
                    <Map className="w-8 h-8" />
                    <span className="bg-slate-100 px-2 py-1 text-xs font-bold border border-slate-200">COVERAGE</span>
                  </div>
                  <div className="text-4xl font-black mb-2">3 TEAMS</div>
                  <div className="text-sm text-slate-500 font-medium">21692, 26855, 20181</div>
               </IsoCard>
             </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <IsoCard className="bg-blue-600 text-white border-slate-900" delay={0.4}>
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-2xl font-black italic">ROSTER</h3>
                 <Box className="w-6 h-6" />
              </div>
              <ul className="space-y-4">
                {[
                  { id: "21692", name: "Alpha", color: "bg-white text-slate-900" },
                  { id: "26855", name: "Beta", color: "bg-white text-slate-900" },
                  { id: "20181", name: "Gamma", color: "bg-white text-slate-900" },
                ].map((team) => (
                  <li key={team.id} className="flex items-center justify-between bg-black/20 p-4 rounded border border-white/20">
                     <span className="font-mono font-bold text-xl">{team.id}</span>
                     <span className={`text-xs font-bold px-2 py-1 ${team.color} uppercase`}>{team.name}</span>
                  </li>
                ))}
              </ul>
            </IsoCard>
            
            <IsoCard className="min-h-[300px] relative overflow-hidden" delay={0.5}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Flag className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-900 text-white p-2 font-mono text-center min-w-[60px]">
                    <div className="text-xs uppercase">OCT</div>
                    <div className="text-xl font-bold">12</div>
                  </div>
                  <div>
                    <div className="font-bold">Qualifying Round 1</div>
                    <div className="text-sm text-slate-500">Olathe Northwest High School</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-900 text-white p-2 font-mono text-center min-w-[60px]">
                    <div className="text-xs uppercase">NOV</div>
                    <div className="text-xl font-bold">04</div>
                  </div>
                  <div>
                    <div className="font-bold">League Championship</div>
                    <div className="text-sm text-slate-500">Shawnee Mission South</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-sm font-bold text-slate-500">
                <span>View Full Calendar</span>
                <Anchor className="w-4 h-4" />
              </div>
            </IsoCard>
          </div>
        </div>
      </div>
    </div>
  );
}
