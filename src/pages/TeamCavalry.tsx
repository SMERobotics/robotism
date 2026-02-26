import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ChessKnight,
    Activity,
    Hash,
    Users,
    Zap,
    Globe,
    Cpu,
} from "lucide-react";

export default function TeamCavalry() {
    return (
        <div className="py-24 max-w-7xl mx-auto px-6">
            {/* Header Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
                <div className="lg:col-span-8">
                    <Link
                        to="/teams"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors mb-6 font-oxanium"
                    >
                        ← Back to Directory
                    </Link>
                    <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter mb-4 font-oxanium text-slate-900">
                        CAVALRY
                    </h1>
                    <div className="text-xl font-bold text-blue-600 mb-8 uppercase tracking-[0.2em] font-oxanium">
                        TEAM 26855
                    </div>
                    <p className="text-xl max-w-2xl border-l-4 border-blue-600 pl-6 py-2 text-slate-600 leading-relaxed">
                        Specializing in precision autonomous routines and robust
                        defensive strategies. They analyze and adapt to field
                        conditions.
                    </p>
                </div>

                <div className="lg:col-span-4 flex justify-center lg:justify-end items-start">
                    <div className="w-48 h-48 border-4 border-slate-900 bg-white flex items-center justify-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        <ChessKnight className="w-24 h-24 text-slate-900 group-hover:text-blue-600 transition-colors relative z-10" />
                    </div>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {[
                    { label: "Matches", value: "54", icon: Activity },
                    { label: "Opr Avg", value: "71.37", icon: Hash },
                    { label: "Members", value: "14", icon: Users },
                    { label: "Outreach", value: "30+", icon: Globe },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="border-2 border-slate-900 bg-white p-6 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4 font-oxanium">
                            <stat.icon className="w-4 h-4 text-blue-600" />
                            {stat.label}
                        </div>
                        <div className="text-4xl font-bold tabular-nums tracking-tighter font-oxanium">
                            {stat.value}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Robot Profile Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border-2 border-slate-900 bg-slate-900 text-white p-10 relative overflow-hidden"
                >
                    {/* Blueprint background over dark */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                        }}
                    />
                    <h2 className="text-3xl font-bold mb-8 font-oxanium relative z-10 flex items-center gap-3">
                        <Cpu className="w-8 h-8 text-blue-400" />
                        HARDWARE PROFILE
                    </h2>
                    <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-center border-b border-lime-500 pb-4">
                            <span className="text-sm uppercase tracking-wider text-slate-400 font-bold font-oxanium">
                                Codename
                            </span>
                            <span className="text-xl font-bold">Charger</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-lime-500 pb-4">
                            <span className="text-sm uppercase tracking-wider text-slate-400 font-bold font-oxanium">
                                Drivetrain
                            </span>
                            <span className="text-xl font-bold">X-Drive</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-lime-500 pb-4">
                            <span className="text-sm uppercase tracking-wider text-slate-400 font-bold font-oxanium">
                                Status
                            </span>
                            <span className="text-emerald-400 font-bold flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Operational
                            </span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border-2 border-slate-900 bg-white p-10 relative group"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                    <h2 className="text-3xl font-bold mb-8 font-oxanium">
                        SENSOR ARRAY
                    </h2>
                    <ul className="space-y-4">
                        {["IMU", "Vision Camera", "Touch Sensor"].map(
                            (sensor, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-4 text-lg border-l-4 border-slate-200 pl-4 py-2"
                                >
                                    <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                                    {sensor}
                                </li>
                            ),
                        )}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
