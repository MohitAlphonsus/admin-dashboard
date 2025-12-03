import { SectionContainer } from "../components/ui";
import {
	SalesOverviewChart,
	CategoryDistributionChart,
	StatCard,
	SalesChannelChart,
} from "../components/overview";
import { motion } from "motion/react";
import { STATCARD__DATA } from "../constant";

export default function OverviewPage() {
	return (
		<SectionContainer title="Overview">
			<motion.div
				className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				{STATCARD__DATA.map(({ id, name, icon, value, color }) => (
					<StatCard
						key={id}
						name={name}
						icon={icon}
						value={value}
						color={color}
					/>
				))}
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<SalesOverviewChart />
				<CategoryDistributionChart />
				<SalesChannelChart />
			</div>
		</SectionContainer>
	);
}
