import { motion } from 'framer-motion';
import { Activity, Hash, Users, Globe, ChevronRight, Cpu, Radio, Zap } from 'lucide-react';

const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
       style={{ 
         backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
         backgroundSize: '40px 40px' 
       }} 
  />
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#0F172A] font-mono selection:bg-blue-200 overflow-x-hidden relative">
      <BlueprintGrid />
      
      {/* Header / Nav */}
      <header className="border-b-2 border-slate-900 sticky top-0 bg-[#F0F4F8]/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold relative group overflow-hidden">
               <span className="relative z-10">SM</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm tracking-[0.2em] font-bold uppercase">Shawnee Mission East</span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase">Robotics Program</span>
            </div>
          </div>
          <div className="flex gap-8 text-xs font-bold tracking-[0.15em] uppercase text-slate-600">
            {['[TEAMS]', '[SEASON]', '[OUTREACH]'].map((item) => (
              <span key={item} className="cursor-pointer hover:text-blue-600 transition-colors hover:underline decoration-2 underline-offset-8 decoration-blue-600">
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1 border border-slate-900 bg-white text-xs font-bold uppercase tracking-wider"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
              System Status: Operational
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              DECODE <br />
              <span className="text-blue-600">THE FUTURE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-2xl border-l-4 border-blue-600 pl-6 py-2 text-slate-600"
            >
              Engineering solutions for the 2025-2026 FIRST Tech Challenge season. 
              Three teams. One mission.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pt-8"
            >
              {[20181, 26855, 21692].map((team) => (
                <div key={team} className="border border-slate-900 bg-white px-8 py-5 hover:bg-slate-900 hover:text-white transition-all cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-xl">
                  {/* The requested animation line */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                  <div className="text-[10px] uppercase text-slate-500 group-hover:text-slate-300 mb-1 tracking-widest transition-colors">Unit ID</div>
                  <div className="text-3xl font-bold flex items-center gap-2 transition-colors">
                    {team}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 relative border-2 border-slate-900 bg-white p-2 min-h-[300px] flex flex-col"
          >
            <div className="absolute top-0 left-0 bg-slate-900 text-white px-3 py-1 text-[10px] font-bold">FIG 1.0</div>
            
            <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-blue-50">
               {/* Animated Elements */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="w-56 h-56 border-4 border-slate-900 rounded-full border-dashed"
               />
               <motion.div 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute w-24 h-24 bg-blue-600 rounded-full opacity-20"
               />
               <div className="absolute w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            
            <div className="mt-2 flex justify-between text-[10px] font-bold uppercase text-slate-700 tracking-wider px-2">
              <span>Sensor Array</span>
              <span className="text-emerald-600">Online</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-b border-slate-300 bg-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Matches Played", value: "42", icon: Activity },
            { label: "Opr Average", value: "185.4", icon: Hash },
            { label: "Students", value: "35", icon: Users },
            { label: "Outreach Hours", value: "240+", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3 group">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                <stat.icon className="w-4 h-4" />
                {stat.label}
              </div>
              <div className="text-5xl font-black tabular-nums tracking-tighter">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Module */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-12 border-b border-slate-900 pb-6">
          <h2 className="text-4xl font-bold tracking-tight">PERFORMANCE LOGS</h2>
          <div className="text-xs font-bold uppercase text-slate-500 tracking-widest">Last Sync: 14:02:55</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-slate-900 bg-white">
          {[
            { id: "20181", name: "ALPHA", status: "Ranking #3", score: 98 },
            { id: "26855", name: "BETA", status: "Ranking #8", score: 92 },
            { id: "21692", name: "GAMMA", status: "Ranking #12", score: 85 },
          ].map((team, idx) => (
            <div key={team.id} className={`p-10 border-b md:border-b-0 ${idx !== 2 ? 'md:border-r border-slate-900' : ''} hover:bg-blue-50 transition-colors group relative overflow-hidden`}>
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <span className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">0{idx + 1}</span>
                <Cpu className="w-8 h-8 text-slate-700 group-hover:text-blue-600 transition-colors" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-1">TEAM {team.id}</h3>
                <div className="text-xs font-bold text-blue-600 mb-8 uppercase tracking-[0.2em]">{team.name} UNIT</div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-slate-200 pb-3 text-slate-600">
                    <span>Current Rank</span>
                    <span className="font-bold text-slate-900">{team.status}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-slate-200 pb-3 text-slate-600">
                    <span>Efficiency</span>
                    <span className="font-bold text-slate-900">{team.score}%</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-slate-200 pb-3 text-slate-600">
                    <span>Signal Strength</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-2">
                      <Zap className="w-3 h-3" /> GOOD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-300 bg-slate-900 text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-2xl font-bold mb-6 tracking-tight">SHAWNEE MISSION EAST</div>
            <div className="text-sm opacity-60 max-w-xs font-mono leading-relaxed">
              7500 Mission Rd, Prairie Village, KS 66208<br/>
              Robotics Program / Kansas City
            </div>
          </div>
          <div className="text-right flex flex-col justify-between items-end">
             <div className="flex justify-end gap-6 mb-8">
               <Radio className="w-6 h-6 animate-pulse text-blue-400" />
             </div>
             <div className="text-[10px] uppercase tracking-[0.2em] opacity-40">
               Designed for DECODE 2025-2026
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
