import { Activity, Database, Wifi, Zap, Hexagon, Terminal } from 'lucide-react';

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl ${className}`}>
    {children}
  </div>
);

export default function Design2() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 p-4 md:p-8 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        
        {/* Sidebar / Nav */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <GlassPanel className="h-full flex flex-col justify-between min-h-[80vh]">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Hexagon className="w-8 h-8 text-cyan-400 fill-cyan-400/20" />
                <div className="font-bold tracking-wider text-sm leading-tight">
                  SME<br/><span className="text-cyan-400">ROBOTICS</span>
                </div>
              </div>
              
              <nav className="flex flex-col gap-2">
                {['Dashboard', 'Telemetry', 'Logistics', 'Protocol'].map((item, i) => (
                  <button key={item} className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${i === 0 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}>
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <div className="bg-black/40 rounded-lg p-4 border border-white/5">
                <div className="text-xs text-gray-500 mb-2">NETWORK STATUS</div>
                <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                  <Wifi className="w-4 h-4" />
                  ONLINE
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Header Panel */}
          <GlassPanel className="relative overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-3xl rounded-full" />
             <div className="relative">
               <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                 <Terminal className="w-4 h-4" />
                 <span>/root/init_sequence_2025.exe</span>
               </div>
               <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                 PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DECODE</span>
               </h1>
               <p className="text-gray-400 max-w-lg leading-relaxed">
                 Establishing connection with teams 21692, 26855, and 20181. 
                 Shawnee Mission East High School Robotics interface v2.5.
               </p>
             </div>
          </GlassPanel>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassPanel className="flex flex-col justify-between min-h-[200px]">
               <div className="flex justify-between items-start">
                 <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                   <Activity className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-mono text-gray-500">AVG_OPR</span>
               </div>
               <div>
                 <div className="text-4xl font-bold">142.8</div>
                 <div className="text-sm text-green-400 mt-1">+12% vs last match</div>
               </div>
            </GlassPanel>
            <GlassPanel className="flex flex-col justify-between min-h-[200px]">
               <div className="flex justify-between items-start">
                 <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                   <Database className="w-6 h-6" />
                 </div>
                 <span className="text-xs font-mono text-gray-500">DATA_POINTS</span>
               </div>
               <div>
                 <div className="text-4xl font-bold">2,048</div>
                 <div className="text-sm text-gray-400 mt-1">Telemetry logs archived</div>
               </div>
            </GlassPanel>
          </div>

          {/* Team Roster */}
          <GlassPanel>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              ACTIVE UNITS
            </h3>
            <div className="space-y-4">
              {[
                { id: "21692", role: "Striker", status: "Active", battery: 98 },
                { id: "26855", role: "Support", status: "Charging", battery: 45 },
                { id: "20181", role: "Defense", status: "Maintenance", battery: 12 },
              ].map((team) => (
                <div key={team.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                   <div className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: team.battery > 50 ? '#4ade80' : team.battery > 20 ? '#facc15' : '#ef4444' }} />
                     <div>
                       <div className="font-bold font-mono">#{team.id}</div>
                       <div className="text-xs text-gray-400">{team.role} Class</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="text-xs font-mono text-cyan-400">{team.status}</div>
                     <div className="text-[10px] text-gray-500">{team.battery}% ENERGY</div>
                   </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-3 flex flex-col gap-6">
           <GlassPanel className="h-full bg-gradient-to-b from-cyan-900/20 to-transparent">
             <div className="mb-6">
               <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Live Feed</h3>
               <div className="aspect-video bg-black rounded-lg border border-white/10 relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 mix-blend-screen" alt="Robot" />
               </div>
             </div>

             <div className="space-y-4">
               <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Recent Events</h3>
               {[1,2,3].map(i => (
                 <div key={i} className="flex gap-3 text-sm">
                   <div className="text-cyan-500 font-mono text-xs mt-1">10:4{i}</div>
                   <div className="text-gray-300">Autonomous routine calibration completed successfully.</div>
                 </div>
               ))}
             </div>
           </GlassPanel>
        </div>
      </div>
    </div>
  );
}
