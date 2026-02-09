import { motion } from 'framer-motion';
import { Activity, Hash, Users, Globe, ChevronRight, Cpu, Radio, Zap } from 'lucide-react';

const CyberGrid = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div 
      className="absolute inset-0 opacity-20"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#02040a_90%)]" />
  </div>
);

export default function FinalDesign() {
  return (
    <div className="min-h-screen bg-[#02040a] text-cyan-500 font-mono selection:bg-cyan-900 selection:text-white overflow-x-hidden relative">
      <CyberGrid />
      
      {/* Header / Nav - Design 1 Layout, Design 7 Colors */}
      <header className="border-b border-cyan-900/50 sticky top-0 bg-[#02040a]/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-cyan-950 border border-cyan-500/50 text-cyan-400 flex items-center justify-center font-bold relative group overflow-hidden">
               <div className="absolute inset-0 bg-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
               <span className="relative z-10">SM</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm tracking-[0.2em] font-bold text-white uppercase">Shawnee Mission East</span>
              <span className="text-[10px] tracking-widest text-cyan-600 uppercase">Robotics Program</span>
            </div>
          </div>
          <div className="flex gap-8 text-xs font-bold tracking-[0.15em] uppercase text-cyan-700">
            {['Teams', 'Season', 'Outreach'].map((item) => (
              <span key={item} className="cursor-pointer hover:text-cyan-400 transition-colors hover:underline decoration-2 underline-offset-8 decoration-cyan-500/50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section - Design 1 Layout, Design 7 Colors */}
      <section className="relative pt-24 pb-32 border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1 border border-cyan-500/30 bg-cyan-950/30 text-xs font-bold uppercase tracking-wider text-cyan-300"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
              System Status: Operational
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white"
            >
              DECODE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">THE FUTURE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-2xl border-l-4 border-cyan-500 pl-6 py-2 text-cyan-100/70"
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
              {[21692, 26855, 20181].map((team) => (
                <div key={team} className="border border-cyan-900/50 bg-[#050a14] px-8 py-5 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all cursor-pointer group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <div className="text-[10px] uppercase text-cyan-700 group-hover:text-cyan-400 mb-1 tracking-widest transition-colors">Unit ID</div>
                  <div className="text-3xl font-bold text-white group-hover:text-cyan-50 flex items-center gap-2 transition-colors">
                    {team}
                    <ChevronRight className="w-4 h-4 text-cyan-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Graphic - Design 1 Structure, Design 7 Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 relative border border-cyan-500/30 bg-cyan-950/10 p-2 min-h-[300px] flex flex-col backdrop-blur-sm"
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-cyan-400"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-cyan-400"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-cyan-400"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-cyan-400"></div>

            <div className="absolute top-0 left-0 bg-cyan-950/80 text-cyan-400 px-3 py-1 text-[10px] font-bold border-r border-b border-cyan-500/30">FIG 1.0</div>
            
            <div className="flex-1 flex items-center justify-center relative overflow-hidden">
               {/* Animated Elements */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="w-56 h-56 border border-cyan-500/20 rounded-full border-dashed"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-40 h-40 border-2 border-cyan-500/10 rounded-full border-dotted"
               />
               <div className="absolute w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
               <div className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)]"></div>
            </div>
            
            <div className="mt-2 flex justify-between text-[10px] font-bold uppercase text-cyan-700 tracking-wider px-2">
              <span>Sensor Array</span>
              <span className="text-emerald-500">Online</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Strip - Design 1 Layout, Design 7 Colors */}
      <section className="border-b border-cyan-900/30 bg-[#030610] py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Matches Played", value: "42", icon: Activity },
            { label: "Opr Average", value: "185.4", icon: Hash },
            { label: "Students", value: "35", icon: Users },
            { label: "Outreach Hours", value: "240+", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3 group">
              <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                <stat.icon className="w-4 h-4" />
                {stat.label}
              </div>
              <div className="text-5xl font-bold text-white tabular-nums tracking-tighter">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Module - Design 1 Layout, Design 7 Colors */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-12 border-b border-cyan-900/50 pb-6">
          <h2 className="text-4xl font-bold tracking-tight text-white">PERFORMANCE LOGS</h2>
          <div className="text-xs font-bold uppercase text-cyan-600 tracking-widest">Last Sync: 14:02:55</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-cyan-900/30 bg-[#050a14]">
          {[
            { id: "21692", name: "ALPHA", status: "Ranking #3", score: 98 },
            { id: "26855", name: "BETA", status: "Ranking #12", score: 85 },
            { id: "20181", name: "GAMMA", status: "Ranking #8", score: 92 },
          ].map((team, idx) => (
            <div key={team.id} className={`p-10 border-b md:border-b-0 ${idx !== 2 ? 'md:border-r border-cyan-900/30' : ''} hover:bg-cyan-900/10 transition-colors group relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <span className="text-6xl font-black text-cyan-900/40 group-hover:text-cyan-500/20 transition-colors">0{idx + 1}</span>
                <Cpu className="w-8 h-8 text-cyan-700 group-hover:text-cyan-400 transition-colors" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-1 text-white">TEAM {team.id}</h3>
                <div className="text-xs font-bold text-cyan-500 mb-8 uppercase tracking-[0.2em]">{team.name} UNIT</div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-cyan-900/30 pb-3 text-cyan-200/60">
                    <span>Current Rank</span>
                    <span className="font-bold text-white">{team.status}</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-cyan-900/30 pb-3 text-cyan-200/60">
                    <span>Efficiency</span>
                    <span className="font-bold text-white">{team.score}%</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-cyan-900/30 pb-3 text-cyan-200/60">
                    <span>Signal Strength</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-2">
                      <Zap className="w-3 h-3" /> GOOD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - Design 1 Layout, Design 7 Colors */}
      <footer className="border-t border-cyan-900/30 bg-[#02040a] text-cyan-500 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-2xl font-bold mb-6 text-white tracking-tight">SHAWNEE MISSION EAST</div>
            <div className="text-sm opacity-60 max-w-xs font-mono leading-relaxed">
              7500 Mission Rd, Prairie Village, KS 66208<br/>
              Robotics Program / Kansas City
            </div>
          </div>
          <div className="text-right flex flex-col justify-between items-end">
             <div className="flex justify-end gap-6 mb-8">
               <Radio className="w-6 h-6 animate-pulse text-cyan-400" />
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
