import { ArrowRight, Beaker, FileText, Settings, Share2, Layers, Cpu } from 'lucide-react';

export default function Design3() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* Top Navigation */}
      <nav className="border-b border-slate-200 px-8 h-20 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-sm"></div>
            SME ROBOTICS
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Overview</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Teams</a>
            <a href="#" className="text-orange-600">Performance</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Resources</a>
          </div>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
          Partner Login
        </button>
      </nav>

      {/* Hero */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-b border-slate-200">
        <div className="p-12 lg:p-24 flex flex-col justify-center border-r border-slate-200">
          <div className="text-orange-600 font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
            Season 2025-2026 Active
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            Advanced Robotics <br/>
            <span className="text-slate-400">Initiative.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-md leading-relaxed">
            Participating in the FIRST Tech Challenge DECODE season. 
            Presented by RTX. Developing autonomous systems and mechanical solutions.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300 transform hover:-translate-y-1">
              View Data
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 rounded-lg font-bold text-slate-600 hover:bg-slate-50 transition-colors border border-slate-200">
              Documentation
            </button>
          </div>
        </div>
        <div className="bg-slate-50 relative overflow-hidden flex items-center justify-center p-12">
          {/* Abstract representation of the game/robot */}
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-slate-100 transform rotate-3"></div>
            <div className="absolute inset-0 bg-slate-900 rounded-3xl shadow-xl transform -rotate-3 translate-x-4 translate-y-4 flex items-center justify-center text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <Cpu className="w-32 h-32 opacity-50" />
            </div>
            
            <div className="absolute -bottom-12 -right-12 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 text-green-700 p-2 rounded-lg">
                  <Share2 className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-slate-900">Telemetry Active</div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[75%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Laboratory Metrics</h2>
            <div className="h-1 w-24 bg-orange-600"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Design Iterations", value: "128", icon: Layers, desc: "Prototypes tested across all three teams." },
              { title: "Code Commits", value: "3,402", icon: FileText, desc: "Lines of Java and Kotlin deployed." },
              { title: "Hardware Efficiency", value: "94%", icon: Settings, desc: "Average operational uptime during matches." },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="mb-6 p-4 bg-slate-50 w-fit rounded-2xl group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-5xl font-bold text-slate-900 mb-4">{item.value}</h3>
                <h4 className="text-lg font-bold text-slate-700 mb-2">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-[1400px] mx-auto px-12">
           <div className="flex justify-between items-end mb-16">
             <div>
               <h2 className="text-3xl font-bold mb-4">Active Units</h2>
               <div className="h-1 w-24 bg-orange-600"></div>
             </div>
             <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
               View All Rosters <ArrowRight className="w-4 h-4" />
             </button>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {[21692, 26855, 20181].map((team) => (
               <div key={team} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-colors relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors"></div>
                 <div className="relative">
                   <div className="text-orange-500 font-mono text-sm mb-2">FTC TEAM</div>
                   <h3 className="text-4xl font-bold mb-6">{team}</h3>
                   <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="bg-slate-900/50 p-3 rounded-lg">
                       <div className="text-xs text-slate-400 mb-1">Rank</div>
                       <div className="font-bold">Top 10</div>
                     </div>
                     <div className="bg-slate-900/50 p-3 rounded-lg">
                       <div className="text-xs text-slate-400 mb-1">Status</div>
                       <div className="font-bold text-green-400">Ready</div>
                     </div>
                   </div>
                   <div className="border-t border-slate-700 pt-6 mt-6 flex justify-between items-center">
                     <span className="text-sm text-slate-400">Latest Build: v2.4.1</span>
                     <Beaker className="w-5 h-5 text-slate-500 group-hover:text-orange-500 transition-colors" />
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
