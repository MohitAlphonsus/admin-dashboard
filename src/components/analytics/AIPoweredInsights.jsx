import { motion } from "motion/react";
import { INSIGHTS__DATA } from "../../constant";

export default function AIPoweredInsights() {
	return (
		<motion.div
			className="bg-zinc-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-zinc-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className="text-xl font-semibold text-zinc-100 mb-4">
				AI-Powered Insights
			</h2>
			<div className="space-y-4">
				{INSIGHTS__DATA.map((item, index) => (
					<div key={index} className="flex items-center space-x-3">
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className="text-zinc-300">{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
}
