import { motion } from 'framer-motion';
import { GitCommit, GitBranch, GitMerge, Share2, Users, Radio } from 'lucide-react';

export default function Design6() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Dynamic Network Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg className="w-full h-full">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="2" fill="currentColor" />
             <path d="M2 2 H 102" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
             <path d="M2 2 V 102" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <nav className="fixed left-0 top-0 h-screen w-20 border-r border-neutral-200 bg-white/50 backdrop-blur-sm hidden md:flex flex-col items-center py-12 z-50">
        <div className="mb-12">
          <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold">SM</div>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <div className="p-3 hover:bg-neutral-100 rounded-xl cursor-pointer transition-colors"><GitCommit className="w-6 h-6" /></div>
          <div className="p-3 hover:bg-neutral-100 rounded-xl cursor-pointer transition-colors"><Users className="w-6 h-6" /></div>
          <div className="p-3 hover:bg-neutral-100 rounded-xl cursor-pointer transition-colors"><Share2 className="w-6 h-6" /></div>
        </div>
        <div className="mt-auto">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </nav>

      <main className="md:pl-20">
        <div className="max-w-7xl mx-auto p-8 md:p-16 lg:p-24">
          <section className="mb-32 relative">
             {/* Decorative lines */}
             <div className="absolute top-0 left-[-40px] w-px h-full bg-gradient-to-b from-transparent via-neutral-300 to-transparent hidden lg:block"></div>
             <div className="absolute top-[-40px] left-0 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-bold uppercase tracking-wider mb-8">
                 <Radio className="w-4 h-4 text-blue-600" />
                 Signal Detected: DECODE_2026
               </div>
               
               <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">
                 Shawnee Mission<br/>
                 <span className="text-neutral-400">East Robotics</span>
               </h1>
               
               <div className="flex flex-col md:flex-row gap-12 items-start max-w-4xl">
                 <p className="text-xl leading-relaxed text-neutral-600 flex-1">
                   A collaborative network of three FTC teams pushing the boundaries of autonomous systems and mechanical design.
                 </p>
                 <div className="flex-1 space-y-4">
                   <div className="flex items-center gap-4">
                     <span className="text-4xl font-light">3</span>
                     <span className="text-sm text-neutral-500 uppercase font-bold tracking-wider">Active Teams</span>
                   </div>
                   <div className="w-full h-px bg-neutral-200"></div>
                   <div className="flex items-center gap-4">
                     <span className="text-4xl font-light">100+</span>
                     <span className="text-sm text-neutral-500 uppercase font-bold tracking-wider">Matches</span>
                   </div>
                 </div>
               </div>
             </motion.div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-neutral-200 bg-white shadow-sm rounded-3xl overflow-hidden">
            {[
              { id: "21692", icon: GitBranch, color: "text-blue-600" },
              { id: "26855", icon: GitMerge, color: "text-purple-600" },
              { id: "20181", icon: GitCommit, color: "text-orange-600" }
            ].map((team, idx) => (
              <div key={team.id} className={`p-12 hover:bg-neutral-50 transition-colors group border-b lg:border-b-0 ${idx !== 2 ? 'lg:border-r border-neutral-200' : ''}`}>
                 <div className={`mb-8 p-4 rounded-2xl bg-neutral-50 w-fit group-hover:scale-110 transition-transform ${team.color}`}>
                   <team.icon className="w-8 h-8" />
                 </div>
                 <h2 className="text-4xl font-medium mb-2">{team.id}</h2>
                 <p className="text-neutral-500 mb-8">Performance optimization and strategic analysis unit.</p>
                 
                 <div className="space-y-3">
                   <div className="flex justify-between text-sm">
                     <span>Design</span>
                     <div className="flex gap-1">
                       {[1,2,3,4,5].map(n => <div key={n} className={`w-1 h-3 rounded-full ${n < 4 ? 'bg-neutral-900' : 'bg-neutral-200'}`}></div>)}
                     </div>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span>Software</span>
                     <div className="flex gap-1">
                       {[1,2,3,4,5].map(n => <div key={n} className={`w-1 h-3 rounded-full ${n < 5 ? 'bg-neutral-900' : 'bg-neutral-200'}`}></div>)}
                     </div>
                   </div>
                 </div>

                 <div className="mt-8 pt-8 border-t border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                   <button className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">
                     View Data <span className="text-lg">→</span>
                   </button>
                 </div>
              </div>
            ))}
          </section>

          <section className="mt-32">
            <div className="flex justify-between items-end mb-12">
               <h3 className="text-2xl font-medium">Recent Activity Log</h3>
               <button className="text-sm font-bold text-neutral-500 hover:text-neutral-900">View Full History</button>
            </div>
            
            <div className="space-y-4">
               {[
                 { date: "Oct 24", event: "Code Refactor: Vision Pipeline Optimization", team: "21692" },
                 { date: "Oct 22", event: "Chassis Prototype v3 Assembly", team: "20181" },
                 { date: "Oct 20", event: "Outreach: Elementary School Demo", team: "All Teams" },
                 { date: "Oct 18", event: "Strategy Meeting: Decode Game Analysis", team: "26855" },
               ].map((log, i) => (
                 <div key={i} className="flex items-center gap-6 p-6 rounded-xl border border-neutral-100 hover:border-neutral-300 transition-colors bg-white">
                    <div className="font-mono text-sm text-neutral-400 w-16">{log.date}</div>
                    <div className="w-px h-8 bg-neutral-200"></div>
                    <div className="font-medium flex-1">{log.event}</div>
                    <div className="text-xs font-bold bg-neutral-100 px-3 py-1 rounded-full">{log.team}</div>
                 </div>
               ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
