import { motion } from "motion/react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
	Cell,
} from "recharts";
import { SALES__CHANNEL__DATA, COLORS } from "../../constant";
import { Card } from "../ui";
export default function SalesChannelChart() {
	return (
		<Card className="col-span-2">
			<h2 className="text-lg font-medium mb-4 text-zinc-100">
				Sales by Channel
			</h2>

			<div className="h-80">
				<ResponsiveContainer>
					<BarChart data={SALES__CHANNEL__DATA}>
						<CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
						<XAxis dataKey="name" stroke="#9CA3AF" />
						<YAxis stroke="#9CA3AF" />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey={"value"} fill="#8884d8">
							{SALES__CHANNEL__DATA.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</Card>
	);
}
