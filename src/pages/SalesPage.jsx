import { motion } from "motion/react";
import { SectionContainer } from "../components/ui";

import { StatCard } from "../components/overview";
import { SALES__STATCARD__DATA } from "../constant";
import {
	DailySalesTrend,
	SalesByCategoryChart,
	SalesOverviewChart,
} from "../components/sales";

export default function SalesPage() {
	return (
		<SectionContainer title="Sales Dashboard">
			<motion.div
				className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				{SALES__STATCARD__DATA.map(({ id, name, icon, value, color }) => (
					<StatCard
						key={id}
						name={name}
						icon={icon}
						value={value}
						color={color}
					/>
				))}
			</motion.div>

			<SalesOverviewChart />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
				<SalesByCategoryChart />
				<DailySalesTrend />
			</div>
		</SectionContainer>
	);
}
