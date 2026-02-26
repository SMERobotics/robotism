import { motion } from "framer-motion";
import { Shield, ChessKnight, Swords, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Teams() {
    const teams = [
        {
            id: "20181",
            name: "LANCERS",
            icon: Swords,
            path: "/teams/lancers",
            description:
                "The vanguard of our program, focusing on innovative drive systems and rapid point scoring. They set the pace for competition.",
            members: 15,
        },
        {
            id: "26855",
            name: "CAVALRY",
            icon: ChessKnight,
            path: "/teams/cavalry",
            description:
                "Specializing in precision autonomous routines and robust defensive strategies. They analyze and adapt to field conditions.",
            members: 14,
        },
        {
            id: "21692",
            name: "KNIGHTS",
            icon: Shield,
            path: "/teams/knights",
            description:
                "Our defensive powerhouse, heavily focused on structurally impenetrable robot designs and consistent endgame execution. They learn to last.",
            members: 16,
        },
    ];

    return (
        <div className="py-24 max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <div className="inline-flex items-center gap-3 px-4 py-1 border border-slate-900 bg-white text-xs font-bold tracking-wider mb-6">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                    directory: /teams
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 font-oxanium uppercase">
                    Program <span className="text-blue-600">Overview</span>
                </h1>
                <p className="text-xl max-w-3xl border-l-4 border-blue-600 pl-6 py-2 text-slate-600">
                    Shawnee Mission East Robotics operates three distinct First
                    Tech Challenge teams. Each operates autonomously but shares
                    knowledge, resources, and code within the overarching
                    program structure.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teams.map((team, idx) => (
                    <motion.div
                        key={team.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Link
                            to={team.path}
                            className="block h-full border-2 border-slate-900 bg-white p-8 hover:shadow-xl transition-all group relative overflow-hidden"
                        >
                            {/* Hover Line */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                            <div className="flex justify-between items-start mb-8">
                                <team.icon className="w-12 h-12 text-slate-900 group-hover:text-blue-600 transition-colors" />
                                <span className="text-4xl font-black text-slate-200 group-hover:text-blue-100 transition-colors font-oxanium">
                                    0{idx + 1}
                                </span>
                            </div>

                            <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-[0.2em] font-oxanium">
                                TEAM {team.id}
                            </div>
                            <h2 className="text-3xl font-bold mb-4 font-oxanium group-hover:text-blue-600 transition-colors">
                                {team.name}
                            </h2>

                            <p className="text-slate-600 mb-8 min-h-[80px]">
                                {team.description}
                            </p>

                            <div className="flex items-center justify-between text-sm font-bold uppercase tracking-wider text-slate-900 border-t-2 border-slate-100 pt-6">
                                <span className="font-oxanium">
                                    {team.members} ACTIVE ROSTER
                                </span>
                                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-blue-600" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
