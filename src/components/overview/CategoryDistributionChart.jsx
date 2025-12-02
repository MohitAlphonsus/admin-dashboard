import { motion } from "motion/react";
import { CATEGORY__DATA } from "../../constant";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

export default function CategoryDistributionChart() {
	return (
		<motion.div
			className="bg-zinc-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className="text-lg font-medium mb-4 text-zinc-100">
				Category Distribution
			</h2>
			<div className="h-80">
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={CATEGORY__DATA}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
							label={({ name, percent }) =>
								`${name} ${(percent * 100).toFixed(0)}%`
							}
						>
							{CATEGORY__DATA.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
}
