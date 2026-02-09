import { PenTool, Pencil, Ruler, ClipboardList, Paperclip } from 'lucide-react';

export default function Design9() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E50] font-serif selection:bg-blue-100 overflow-x-hidden">
      {/* Dot Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(#2C3E50 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} 
      />

      {/* Main Content Container acting as a sheet of paper */}
      <div className="max-w-5xl mx-auto my-12 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] min-h-[90vh] relative border-t-8 border-[#34495E]">
        
        {/* Header Area */}
        <header className="p-12 pb-6 border-b-2 border-[#E5E7EB] relative">
          <div className="absolute top-8 right-8 text-right opacity-50 font-mono text-xs">
            <div>DATE: 02/06/2026</div>
            <div>REF: SME-ROBOTICS-V1</div>
            <div>PAGE: 01/01</div>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 border-4 border-[#2C3E50] flex items-center justify-center rounded-full">
              <PenTool className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50] font-sans">
                ENGINEERING LOG
              </h1>
              <p className="text-[#7F8C8D] italic font-serif text-lg">
                Shawnee Mission East Robotics Program
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-sm font-bold tracking-widest uppercase text-[#34495E] font-sans">
             <a href="#" className="border-b-2 border-[#E74C3C] pb-1">Overview</a>
             <a href="#" className="hover:border-b-2 border-[#BDC3C7] pb-1 transition-all">Schematics</a>
             <a href="#" className="hover:border-b-2 border-[#BDC3C7] pb-1 transition-all">Components</a>
             <a href="#" className="hover:border-b-2 border-[#BDC3C7] pb-1 transition-all">Observations</a>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           <div className="lg:col-span-8 space-y-12">
             <section>
               <div className="flex items-center gap-3 mb-4 text-[#E74C3C]">
                 <Pencil className="w-5 h-5" />
                 <h2 className="font-bold font-sans uppercase tracking-wider text-sm">Design Intent</h2>
               </div>
               <p className="text-xl leading-relaxed font-serif text-[#2C3E50]">
                 The primary objective for the DECODE 2025-2026 season is to maximize autonomous efficiency. 
                 <span className="bg-yellow-100 px-1 mx-1 transform -rotate-1 inline-block border-b border-black/10 shadow-sm">
                    Teams 21692, 26855, and 20181
                 </span> 
                 will focus on modular chassis designs to allow for rapid iteration during competition cycles.
               </p>
               
               <div className="mt-8 border-l-4 border-[#34495E] pl-6 py-2 bg-gray-50">
                 <h3 className="font-bold font-sans text-sm mb-2 uppercase">Key Parameters:</h3>
                 <ul className="list-disc list-inside space-y-1 font-mono text-sm text-[#555]">
                   <li>Max Velocity: 2.4 m/s</li>
                   <li>Lift Capacity: 1.5 kg</li>
                   <li>Vision Processing: 60 FPS</li>
                 </ul>
               </div>
             </section>

             <section>
               <div className="flex items-center gap-3 mb-6 text-[#E74C3C]">
                 <Ruler className="w-5 h-5" />
                 <h2 className="font-bold font-sans uppercase tracking-wider text-sm">Performance Data</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { id: "21692", name: "Alpha", rank: "03" },
                   { id: "26855", name: "Beta", rank: "12" },
                   { id: "20181", name: "Gamma", rank: "08" },
                 ].map((team) => (
                   <div key={team.id} className="border-2 border-[#2C3E50] p-6 relative hover:shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] transition-all cursor-pointer bg-white">
                      <div className="absolute top-0 right-0 w-8 h-8 bg-[#2C3E50] text-white flex items-center justify-center font-mono text-xs font-bold">
                        {team.rank}
                      </div>
                      <div className="text-3xl font-bold font-sans mb-1">{team.id}</div>
                      <div className="text-sm font-serif italic text-gray-500">{team.name} Unit</div>
                      
                      <div className="mt-6 pt-4 border-t border-dashed border-gray-300 flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Status</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                   </div>
                 ))}
               </div>
             </section>
           </div>

           <div className="lg:col-span-4 border-l-2 border-[#E5E7EB] pl-12 -ml-6 lg:ml-0 relative">
              <div className="absolute top-0 left-[-7px] w-3 h-3 bg-[#E74C3C] rounded-full hidden lg:block"></div>
              
              <div className="sticky top-12 space-y-12">
                 <div>
                   <h3 className="font-bold font-sans uppercase tracking-wider text-xs mb-6 text-gray-400">Notes</h3>
                   <div className="font-handwriting text-lg leading-loose text-blue-800 rotate-1 transform">
                     "Check servo calibration on Unit Alpha before next Tuesday's scrim!"
                   </div>
                 </div>

                 <div>
                    <h3 className="font-bold font-sans uppercase tracking-wider text-xs mb-6 text-gray-400">Resources</h3>
                    <ul className="space-y-4">
                      {['Game Manual Part 1', 'Game Manual Part 2', 'Field Setup Guide', 'Code Repository'].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-medium hover:text-[#E74C3C] transition-colors cursor-pointer group">
                          <Paperclip className="w-4 h-4 text-gray-400 group-hover:text-[#E74C3C]" />
                          <span className="border-b border-transparent group-hover:border-[#E74C3C] pb-0.5 transition-all">{item}</span>
                        </li>
                      ))}
                    </ul>
                 </div>

                 <div className="bg-[#2C3E50] text-white p-6 rounded-sm shadow-xl transform rotate-2">
                    <ClipboardList className="w-6 h-6 mb-4 opacity-50" />
                    <div className="text-2xl font-bold font-sans mb-2">Join Us</div>
                    <p className="text-sm opacity-80 mb-4 font-serif">
                      Open lab hours every Wednesday at 3:30 PM. Room 402.
                    </p>
                    <button className="w-full bg-white text-[#2C3E50] font-bold py-2 text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors">
                      Sign Up
                    </button>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}
