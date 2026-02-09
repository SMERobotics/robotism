import { motion } from 'framer-motion';
import { Activity, Radio, Cpu, ChevronRight, Hash, Users, Globe } from 'lucide-react';

const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
       style={{ 
         backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
         backgroundSize: '40px 40px' 
       }} 
  />
);

export default function Design1() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] text-[#0F172A] font-mono selection:bg-blue-200 overflow-x-hidden">
      <BlueprintGrid />
      
      {/* Header / Nav */}
      <header className="border-b-2 border-slate-900 sticky top-0 bg-[#F0F4F8]/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold">
              SM
            </div>
            <span className="text-sm tracking-widest uppercase font-bold">Shawnee Mission East Robotics</span>
          </div>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
            <span className="cursor-pointer hover:underline decoration-2 underline-offset-4">Teams</span>
            <span className="cursor-pointer hover:underline decoration-2 underline-offset-4">Season</span>
            <span className="cursor-pointer hover:underline decoration-2 underline-offset-4">Outreach</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 border-b border-slate-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-block px-3 py-1 border border-slate-900 text-xs font-bold uppercase tracking-wider mb-4">
              System Status: Operational
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
              DECODE <br />
              <span className="text-blue-600">THE FUTURE</span>
            </h1>
            <p className="text-xl max-w-2xl border-l-4 border-blue-600 pl-6 py-2">
              Engineering solutions for the 2025-2026 FIRST Tech Challenge season. 
              Three teams. One mission.
            </p>
            
            <div className="flex gap-4 pt-8">
              {[21692, 26855, 20181].map((team) => (
                <div key={team} className="border border-slate-900 px-6 py-4 hover:bg-slate-900 hover:text-white transition-colors cursor-pointer group">
                  <div className="text-xs uppercase opacity-60 mb-1">Team ID</div>
                  <div className="text-2xl font-bold flex items-center gap-2">
                    {team}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 relative border-2 border-slate-900 p-2 min-h-[300px] flex flex-col">
            <div className="absolute top-0 left-0 bg-slate-900 text-white px-2 py-1 text-xs font-bold">FIG 1.0</div>
            <div className="flex-1 flex items-center justify-center bg-blue-50 relative overflow-hidden">
               {/* Abstract decorative element representing a robot part */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-48 h-48 border-4 border-slate-900 rounded-full border-dashed"
               />
               <motion.div 
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute w-24 h-24 bg-blue-600 rounded-full opacity-20"
               />
            </div>
            <div className="mt-2 flex justify-between text-xs font-bold uppercase">
              <span>Sensor Array</span>
              <span>Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-b border-slate-300 bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Matches Played", value: "42", icon: Activity },
            { label: "Opr Average", value: "185.4", icon: Hash },
            { label: "Students", value: "35", icon: Users },
            { label: "Outreach Hours", value: "240+", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase tracking-wider">
                <stat.icon className="w-4 h-4" />
                {stat.label}
              </div>
              <div className="text-4xl font-black">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Module */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 border-b border-slate-900 pb-4">
          <h2 className="text-4xl font-bold tracking-tight">PERFORMANCE LOGS</h2>
          <div className="text-sm font-bold uppercase">Last Updated: 14:02:55</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-slate-900">
          {[
            { id: "21692", name: "ALPHA", status: "Ranking #3", score: 98 },
            { id: "26855", name: "BETA", status: "Ranking #12", score: 85 },
            { id: "20181", name: "GAMMA", status: "Ranking #8", score: 92 },
          ].map((team, idx) => (
            <div key={team.id} className={`p-8 border-b md:border-b-0 ${idx !== 2 ? 'md:border-r border-slate-900' : ''} hover:bg-blue-50 transition-colors`}>
              <div className="flex justify-between items-start mb-8">
                <span className="text-6xl font-black opacity-10">{idx + 1}</span>
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">TEAM {team.id}</h3>
              <div className="text-sm font-bold text-blue-600 mb-6 uppercase tracking-wider">{team.name} UNIT</div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-slate-300 pb-2">
                  <span>Current Rank</span>
                  <span className="font-bold">{team.status}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-300 pb-2">
                  <span>Efficiency</span>
                  <span className="font-bold">{team.score}%</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-300 pb-2">
                  <span>Signal Strength</span>
                  <span className="font-bold text-green-600">GOOD</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4">SHAWNEE MISSION EAST</div>
            <div className="text-sm opacity-60 max-w-xs font-mono">
              7500 Mission Rd, Prairie Village, KS 66208<br/>
              Robotics Program
            </div>
          </div>
          <div className="text-right flex flex-col justify-between">
             <div className="flex justify-end gap-6">
               <Radio className="w-6 h-6 animate-pulse" />
             </div>
             <div className="text-xs uppercase tracking-widest opacity-40 mt-8">
               Designed for DECODE 2025-2026
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
