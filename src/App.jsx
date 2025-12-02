import { Routes, Route } from "react-router";
import { Sidebar } from "./components/layout";
import { OverviewPage } from "./pages";
export default function App() {
	return (
		<div className="h-screen bg-zinc-900 text-zinc-100 flex overflow-hidden">
			<div className="fixed inset-0 z-0">
				<div className="absolute inset-0 bg-linear-to-br from-zinc-90 via-zinc-800 to-zinc-900 opacity-80" />
				<div className="absolute inset-0 backdrop-blur-sm" />
			</div>
			<Sidebar />
			<Routes>
				<Route path="/" element={<OverviewPage />} />
				<Route path="/products" element={<h1>ProductsPage</h1>} />
			</Routes>
		</div>
	);
}
