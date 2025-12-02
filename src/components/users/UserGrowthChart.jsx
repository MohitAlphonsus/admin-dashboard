import { motion } from "motion/react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { USER__GROWTH__DATA } from "../../constant";
export default function UserGrowthChart() {
	return (
		<motion.div
			className="bg-zinc-800 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className="text-xl font-semibold text-zinc-100 mb-4">User Growth</h2>
			<div className="h-80">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={USER__GROWTH__DATA}>
						<CartesianGrid strokeDasharray="3 3" stroke="#374151" />
						<XAxis dataKey="month" stroke="#9CA3AF" />
						<YAxis stroke="#9CA3AF" />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type="monotone"
							dataKey="users"
							stroke="#8B5CF6"
							strokeWidth={2}
							dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
}
