import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Shield, Code, Terminal } from 'lucide-react';

const GlitchText = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -ml-1 opacity-0 group-hover:opacity-100 text-red-500 animate-pulse z-0">{text}</span>
      <span className="absolute top-0 left-0 ml-1 opacity-0 group-hover:opacity-100 text-cyan-500 animate-pulse delay-75 z-0">{text}</span>
    </div>
  );
};

export default function Design4() {
  const [decoded, setDecoded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDecoded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-400 font-mono selection:bg-red-900/50 selection:text-white overflow-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Nav */}
        <header className="flex justify-between items-center py-8 border-b border-neutral-800 mb-20">
          <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl">
             <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
             SME_ROBOTICS
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Mission</a>
            <a href="#" className="hover:text-white transition-colors">Operatives</a>
            <a href="#" className="hover:text-white transition-colors">Intel</a>
            <div className="flex items-center gap-2 text-red-500">
               <Lock className="w-3 h-3" />
               SECURE
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-8">
             <div className="mb-8 font-bold text-xs uppercase tracking-[0.2em] text-neutral-600">
               Transmission_ID: 2025-RTX-DECODE
             </div>
             <h1 className="text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
               <GlitchText text="DECODE" /> THE <br/>
               <span className="text-neutral-700">UNKNOWN.</span>
             </h1>
             <p className="text-lg max-w-2xl leading-relaxed text-neutral-500 mb-12">
               We are the robotics division of Shawnee Mission East. 
               Intercepting signals. decoding challenges. Engineering victory.
             </p>

             <div className="flex gap-1">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-neutral-200 transition-colors"
               >
                 Initialize Protocol
               </motion.button>
               <div className="w-12 h-auto bg-red-600 flex items-center justify-center text-black">
                 <Shield className="w-5 h-5" />
               </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 flex items-end justify-end">
             <div className="w-full bg-neutral-900 border border-neutral-800 p-6 font-mono text-xs leading-loose text-green-500/80 rounded-sm">
               <div className="flex items-center gap-2 text-neutral-500 mb-4 border-b border-neutral-800 pb-2">
                 <Terminal className="w-4 h-4" />
                 <span>System Output</span>
               </div>
               {decoded ? (
                 <div className="space-y-1">
                   <div>{'>'} Accessing teams...</div>
                   <div className="text-white">{'>'} Found: [21692, 26855, 20181]</div>
                   <div>{'>'} Loading performance metrics...</div>
                   <div>{'>'} STATUS: OPTIMAL</div>
                   <div className="animate-pulse">{'>'} Awaiting input_</div>
                 </div>
               ) : (
                 <div className="break-all opacity-50">
                   01001000 01100101 01101100 01101100 01101111 
                   00100000 01010111 01101111 01110010 01101100 01100100
                 </div>
               )}
             </div>
          </div>
        </section>

        {/* Content Modules */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
             { id: "21692", type: "ASSAULT", desc: "High velocity scoring mechanisms." },
             { id: "26855", type: "RECON", desc: "Advanced autonomous navigation." },
             { id: "20181", type: "SUPPORT", desc: "Robust defense and utility." }
          ].map((team, i) => (
            <div key={team.id} className="group relative bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors min-h-[300px] p-8 flex flex-col justify-between overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-neutral-800/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               
               <div>
                 <div className="text-5xl font-bold text-neutral-800 group-hover:text-white transition-colors mb-4">{team.id}</div>
                 <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">{team.type}</div>
                 <h3 className="text-xl font-bold text-white mb-4">Unit {i+1}</h3>
                 <p className="text-sm text-neutral-500">{team.desc}</p>
               </div>

               <div className="flex justify-between items-center border-t border-neutral-800 pt-4 mt-8">
                 <Code className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                 <span className="text-[10px] uppercase font-bold text-neutral-600 group-hover:text-white transition-colors">View Source</span>
               </div>
            </div>
          ))}
        </section>

        <section className="mt-32 border-t border-neutral-900 pt-12 flex justify-between text-xs text-neutral-600 font-bold uppercase tracking-widest">
           <div>© 2025 SME Robotics</div>
           <div className="flex items-center gap-2">
             <Unlock className="w-3 h-3" />
             Encrypted Connection
           </div>
        </section>
      </div>
    </div>
  );
}
