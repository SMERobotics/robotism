import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamLancers from "./pages/TeamLancers";
import TeamCavalry from "./pages/TeamCavalry";
import TeamKnights from "./pages/TeamKnights";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="teams" element={<Teams />} />
                <Route path="teams/lancers" element={<TeamLancers />} />
                <Route path="teams/cavalry" element={<TeamCavalry />} />
                <Route path="teams/knights" element={<TeamKnights />} />
            </Route>
        </Routes>
    );
}
