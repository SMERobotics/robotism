import { Triangle, AlertTriangle, ChevronDown, Radio, Activity, Server } from 'lucide-react';

export default function Design8() {
  return (
    <div className="min-h-screen bg-[#111] text-neutral-200 font-sans selection:bg-yellow-500 selection:text-black">
      {/* Hazard Striping */}
      <div className="h-2 w-full bg-[repeating-linear-gradient(45deg,#EAB308,#EAB308_20px,#000_20px,#000_40px)]" />

      <nav className="border-b border-neutral-800 bg-[#151515] sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 text-black px-3 py-1 font-black text-sm tracking-tighter">SME.ROBOTICS</div>
            <div className="h-4 w-px bg-neutral-700" />
            <div className="text-xs font-mono text-neutral-500">SECURE FIELD MONITOR</div>
          </div>
          <div className="flex gap-1">
             {['Overview', 'Telemetry', 'Safety', 'Logs'].map(item => (
               <button key={item} className="px-4 py-1 text-sm font-bold text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors uppercase tracking-wider">
                 {item}
               </button>
             ))}
          </div>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Col - Team Roster */}
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-[#1a1a1a] border border-neutral-800 p-1">
             <div className="bg-neutral-900 p-3 flex justify-between items-center mb-1">
               <span className="text-xs font-bold text-neutral-500 uppercase">Deployed Units</span>
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             </div>
             {[
               { id: "21692", name: "Alpha", role: "Offense" },
               { id: "26855", name: "Beta", role: "Support" },
               { id: "20181", name: "Gamma", role: "Defense" }
             ].map((team) => (
               <div key={team.id} className="p-4 hover:bg-neutral-800 transition-colors cursor-pointer group border-b border-neutral-800 last:border-0">
                 <div className="flex justify-between items-center mb-2">
                   <span className="font-mono text-xl font-bold group-hover:text-yellow-500 transition-colors">{team.id}</span>
                   <ChevronDown className="w-4 h-4 text-neutral-600 -rotate-90 group-hover:rotate-0 transition-transform" />
                 </div>
                 <div className="flex justify-between items-end">
                   <span className="text-xs text-neutral-500 uppercase font-bold">{team.name} Squad</span>
                   <span className="text-[10px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-400 border border-neutral-700">{team.role}</span>
                 </div>
               </div>
             ))}
           </div>

           <div className="bg-yellow-500/10 border border-yellow-500/20 p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0" />
                <div>
                  <h3 className="font-bold text-yellow-500 text-sm uppercase mb-1">Field Advisory</h3>
                  <p className="text-xs text-yellow-200/70 leading-relaxed">
                    Qualification matches approaching. Ensure all autonomous routines are validated against updated field parameters.
                  </p>
                </div>
              </div>
           </div>
        </div>

        {/* Center - Main Viz */}
        <div className="lg:col-span-6">
           <div className="h-full min-h-[500px] bg-[#0a0a0a] border border-neutral-800 relative overflow-hidden flex flex-col items-center justify-center p-12 text-center group">
              {/* Background Grid */}
              <div 
                className="absolute inset-0 opacity-10" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }} 
              />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-yellow-500 font-mono text-xs mb-6 border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 rounded-full">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>SIGNAL_STRENGTH: 100%</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
                  2025<br/>
                  <span className="text-neutral-700 group-hover:text-yellow-500 transition-colors duration-500">DECODE</span>
                </h1>
                <p className="max-w-md mx-auto text-neutral-400 mb-8">
                  Shawnee Mission East Robotics Program.
                  Engineering solutions for complex challenges.
                </p>
                
                <button className="bg-yellow-500 text-black font-bold px-8 py-4 hover:bg-white transition-colors flex items-center gap-2 mx-auto">
                   <Triangle className="w-4 h-4 rotate-90 fill-current" />
                   INITIATE SEQUENCE
                </button>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 p-4 border-l-2 border-t-2 border-neutral-700 w-16 h-16" />
              <div className="absolute bottom-0 right-0 p-4 border-r-2 border-b-2 border-neutral-700 w-16 h-16" />
           </div>
        </div>

        {/* Right - Stats */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-6 content-start">
           {[
             { label: "Server Load", val: "12%", icon: Server },
             { label: "Active Threads", val: "84", icon: Activity },
             { label: "Uptime", val: "99.9%", icon: Radio },
           ].map((stat, i) => (
             <div key={i} className="bg-[#151515] border border-neutral-800 p-6 flex items-center justify-between group hover:border-neutral-600 transition-colors">
                <div>
                  <div className="text-xs text-neutral-500 font-bold uppercase mb-1">{stat.label}</div>
                  <div className="text-3xl font-mono font-bold text-white group-hover:text-yellow-500 transition-colors">{stat.val}</div>
                </div>
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-600 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <stat.icon className="w-6 h-6" />
                </div>
             </div>
           ))}
           
           <div className="mt-auto pt-12 text-center">
             <div className="text-[10px] text-neutral-600 uppercase font-bold tracking-[0.2em] mb-2">Presented By</div>
             <div className="text-2xl font-black text-neutral-800 uppercase tracking-tighter">RTX Corp</div>
           </div>
        </div>

      </main>
    </div>
  );
}
