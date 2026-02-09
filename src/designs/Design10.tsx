import { Database, HardDrive, Cpu, Network, Lock, Power } from 'lucide-react';

export default function Design10() {
  return (
    <div className="min-h-screen bg-[#0d0221] text-purple-100 font-mono selection:bg-purple-500/30 overflow-hidden">
      {/* Background Lights */}
      <div className="fixed top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-1/3 h-1/3 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1800px] mx-auto p-8 h-screen flex flex-col">
        
        {/* Top Bar */}
        <header className="flex justify-between items-end border-b border-purple-900/50 pb-6 mb-8">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/50 flex items-center justify-center rounded">
               <Cpu className="w-6 h-6 text-purple-400" />
             </div>
             <div>
               <h1 className="text-2xl font-bold tracking-tight text-white mb-1">MAINFRAME.SME</h1>
               <div className="flex gap-4 text-xs text-purple-400 uppercase tracking-widest">
                 <span>Mem: 64TB</span>
                 <span>CPU: 12%</span>
                 <span>Temp: 42°C</span>
               </div>
             </div>
           </div>
           
           <div className="flex gap-2">
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className={`w-1 h-8 ${i < 5 ? 'bg-purple-500' : 'bg-purple-900'} rounded-full animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}></div>
             ))}
           </div>
        </header>

        {/* Main Interface Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-0">
          
          {/* Col 1: Server Racks */}
          <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            <h2 className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Database className="w-4 h-4" />
              Active Nodes
            </h2>
            
            {[21692, 26855, 20181].map((team, i) => (
              <div key={team} className="bg-[#13042e] border border-purple-900/50 p-4 rounded hover:border-purple-500 transition-colors group cursor-pointer">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                    <span className="font-bold text-white">NODE_{team}</span>
                  </div>
                  <span className="text-[10px] bg-purple-900/50 px-2 py-0.5 rounded text-purple-300">v2.5.{i}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-purple-400/60">
                    <span>Processing</span>
                    <span className="text-white">Idle</span>
                  </div>
                  <div className="w-full bg-purple-900/30 h-1 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[20%] group-hover:w-[60%] transition-all duration-1000 ease-in-out"></div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-4 bg-purple-500/5 border border-purple-500/20 rounded">
              <div className="text-xs text-purple-300 mb-2 font-bold">SYSTEM LOG</div>
              <div className="font-mono text-[10px] text-purple-400/70 space-y-1">
                <div>{'>'} Initializing connection...</div>
                <div>{'>'} Handshake successful</div>
                <div>{'>'} Loading DECODE_PROTOCOL</div>
                <div>{'>'} 3 teams detected</div>
                <div className="text-green-400">{'>'} System Ready</div>
              </div>
            </div>
          </div>

          {/* Col 2 & 3: Main Viz */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex-1 bg-[#13042e] border border-purple-900/50 rounded-lg p-8 relative overflow-hidden group">
               {/* Animated Background Lines */}
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-[scan_3s_linear_infinite]"></div>
                 <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-[scan_5s_linear_infinite]"></div>
                 <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-[scan_4s_linear_infinite]"></div>
               </div>

               <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                 <div className="w-32 h-32 mb-8 relative">
                   <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute inset-2 border-4 border-t-purple-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-[spin_3s_linear_infinite]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                     <Lock className="w-8 h-8 text-white" />
                   </div>
                 </div>
                 
                 <h2 className="text-4xl font-bold text-white mb-4">DECRYPTING...</h2>
                 <p className="text-purple-300 max-w-md">
                   Accessing robotics performance data for the 2025-2026 season. Please authenticate.
                 </p>
                 
                 <button className="mt-8 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all flex items-center gap-2">
                   <Power className="w-4 h-4" /> Initialize
                 </button>
               </div>
            </div>
          </div>

          {/* Col 4: Data Blocks */}
          <div className="space-y-4">
             <h2 className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Network className="w-4 h-4" />
              Network Stats
            </h2>

            {[
              { label: "Matches", val: "100+" },
              { label: "Opr Avg", val: "145.2" },
              { label: "Outreach", val: "Active" },
              { label: "Awards", val: "12" },
            ].map((stat, i) => (
              <div key={i} className="flex justify-between items-center p-4 border-b border-purple-900/30 hover:bg-purple-500/5 transition-colors">
                <span className="text-sm text-purple-400">{stat.label}</span>
                <span className="text-xl font-bold text-white font-mono">{stat.val}</span>
              </div>
            ))}

            <div className="mt-8 bg-[#13042e] p-6 rounded border border-purple-900/50">
               <div className="flex items-center gap-3 mb-4">
                 <HardDrive className="w-6 h-6 text-purple-400" />
                 <div className="font-bold text-white">Storage</div>
               </div>
               <div className="flex gap-1 h-12 items-end">
                 {[40, 70, 45, 90, 60, 80, 50, 75].map((h, i) => (
                   <div key={i} className="flex-1 bg-purple-900/50 hover:bg-purple-500 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[10px] bg-white text-purple-900 px-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                       {h}%
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
