import { Minimize2, Settings, Zap, Aperture, Battery, ChevronRight } from 'lucide-react';

export default function Design7() {
  return (
    <div className="min-h-screen bg-[#02040a] text-cyan-500 font-mono selection:bg-cyan-900 selection:text-white overflow-x-hidden">
      {/* Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial Gradient overlay for depth */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#02040a_90%)]" />

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">
        
        {/* Top HUD */}
        <header className="flex justify-between items-start mb-20 border-b border-cyan-900/50 pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Aperture className="w-8 h-8 animate-spin-slow text-cyan-400" />
              <h1 className="text-3xl font-bold tracking-[0.2em] text-white">SME<span className="text-cyan-600">.SYS</span></h1>
            </div>
            <div className="text-xs text-cyan-700 uppercase tracking-widest pl-11">
              Autonomous Robotics Division
            </div>
          </div>
          
          <div className="flex gap-12 text-xs font-bold tracking-widest text-cyan-800">
            <div className="flex flex-col items-end">
              <span>COORD_X</span>
              <span className="text-cyan-400">39.0997° N</span>
            </div>
            <div className="flex flex-col items-end">
              <span>COORD_Y</span>
              <span className="text-cyan-400">94.5786° W</span>
            </div>
            <div className="flex flex-col items-end">
              <span>STATUS</span>
              <span className="text-emerald-500 animate-pulse">LIVE</span>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Display Area */}
          <div className="lg:col-span-8 relative">
            {/* Corner Markers */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-500" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-500" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-500" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-500" />

            <div className="bg-[#050a14] border border-cyan-900/30 p-8 md:p-12 h-full min-h-[500px] flex flex-col justify-center relative overflow-hidden group">
              {/* Scanning Line Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-[scan_4s_linear_infinite]" />
              
              <div className="relative z-10">
                <div className="inline-block border border-cyan-500/50 px-3 py-1 text-xs font-bold text-cyan-300 mb-6 bg-cyan-900/10 backdrop-blur-md">
                  PROJECT: DECODE
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                  ENGINEERING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">PRECISION</span>
                </h2>
                <p className="text-lg text-cyan-600/80 max-w-lg mb-12 leading-relaxed">
                  Initializing interface for teams 21692, 26855, and 20181. 
                  Optimizing mechanical systems for the 2025 season.
                </p>

                <div className="flex gap-6">
                   <button className="group relative px-6 py-3 bg-cyan-900/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all overflow-hidden">
                     <span className="relative z-10 font-bold tracking-widest text-sm flex items-center gap-2">
                       ACCESS TEAMS <ChevronRight className="w-4 h-4" />
                     </span>
                     <div className="absolute inset-0 bg-cyan-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                   </button>
                   <button className="px-6 py-3 text-cyan-700 hover:text-cyan-400 font-bold tracking-widest text-sm transition-colors flex items-center gap-2">
                     <Minimize2 className="w-4 h-4" /> VIEW SPECS
                   </button>
                </div>
              </div>

              {/* Decorative Schematic Elements behind text */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                 <Zap className="w-64 h-64 stroke-1" />
              </div>
            </div>
          </div>

          {/* Right Control Panel */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              { label: "ALPHA UNIT", id: "21692", val: 87 },
              { label: "BETA UNIT", id: "26855", val: 64 },
              { label: "GAMMA UNIT", id: "20181", val: 92 },
            ].map((team) => (
              <div key={team.id} className="bg-[#050a14] border border-cyan-900/30 p-6 relative hover:border-cyan-500/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-[10px] text-cyan-800 font-bold tracking-widest mb-1">{team.label}</div>
                    <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{team.id}</div>
                  </div>
                  <Battery className="w-5 h-5 text-cyan-700" />
                </div>
                
                {/* Custom Progress Bar */}
                <div className="w-full h-1 bg-cyan-900/30 mt-2">
                  <div 
                    className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] relative" 
                    style={{ width: `${team.val}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="text-right text-[10px] text-cyan-600 mt-2 font-bold">
                  EFFICIENCY: {team.val}%
                </div>
              </div>
            ))}

            <div className="mt-auto border-t border-cyan-900/50 pt-6">
               <div className="flex items-center gap-4 text-cyan-800 text-xs font-bold tracking-widest">
                 <Settings className="w-4 h-4 animate-spin-slow" />
                 <span>SYSTEM CONFIGURATION</span>
               </div>
               <div className="mt-4 grid grid-cols-4 gap-1">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className={`h-1 w-full ${Math.random() > 0.5 ? 'bg-cyan-800' : 'bg-cyan-900/30'}`} />
                 ))}
               </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
