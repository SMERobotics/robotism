import { Link, Outlet } from "react-router-dom";
import { BlueprintGrid } from "../components/BlueprintGrid";
import { Radio } from "lucide-react";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-[#F0F4F8] text-[#0F172A] font-ibm selection:bg-blue-200 overflow-x-hidden relative">
            <BlueprintGrid />

            {/* Header / Nav */}
            <header className="border-b-2 border-slate-900 sticky top-0 bg-[#F0F4F8]/90 backdrop-blur-md z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold relative group overflow-hidden">
                            <span className="relative z-10 font-oxanium">
                                SM
                            </span>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-sm tracking-[0.2em] font-bold uppercase font-oxanium">
                                Shawnee Mission East
                            </span>
                            <span className="text-[10px] tracking-widest text-slate-500 uppercase font-oxanium">
                                Robotics Program
                            </span>
                        </div>
                    </Link>
                    <div className="flex gap-8 text-xs font-bold tracking-[0.15em] text-slate-600 font-oxanium">
                        {[
                            { label: "[teams]", path: "/teams" },
                            { label: "[season]", path: "/" },
                            { label: "[outreach]", path: "/" },
                        ].map((item) => (
                            <Link
                                to={item.path}
                                key={item.label}
                                className="relative group overflow-hidden cursor-pointer py-1"
                            >
                                <span className="relative z-10 group-hover:text-blue-600 transition-colors">
                                    {item.label}
                                </span>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="relative z-10">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-300 bg-slate-900 text-white py-16 relative z-10 mt-auto">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="text-2xl font-bold mb-6 tracking-tight font-oxanium">
                            SHAWNEE MISSION EAST
                        </div>
                        <div className="text-sm opacity-60 max-w-xs font-mono leading-relaxed">
                            7500 Mission Rd
                            <br />
                            Prairie Village, KS 66208
                            <br />
                            Robotics Program / Kansas City
                        </div>
                    </div>
                    <div className="text-right flex flex-col justify-between items-end">
                        <div className="flex justify-end gap-6 mb-8">
                            <Radio className="w-6 h-6 animate-pulse text-blue-400" />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-oxanium">
                            Innovated for DECODE 2025-2026
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
