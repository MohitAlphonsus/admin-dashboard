import { motion } from "motion/react";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { SALES__DATA } from "../../constant";
import { Card } from "../ui";
export default function SalesOverviewChart() {
	return (
		<Card>
			<h2 className="text-lg font-medium mb-4 text-zinc-100">Sales Overview</h2>
			<div className="h-80">
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={SALES__DATA}>
						<CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
						<XAxis dataKey={"name"} stroke="#9ca3af" />
						<YAxis stroke="#9ca3af" />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type="monotone"
							dataKey="sales"
							stroke="#6366F1"
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</Card>
	);
}
