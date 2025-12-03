import { motion } from "motion/react";
import { Header } from "../components/ui";
import { StatCard } from "../components/overview";

import { ORDER__STATCARD__DATA } from "../constant";
import {
	DailyOrders,
	OrderDistribution,
	OrdersTable,
} from "../components/orders";

export default function OrdersPage() {
	return (
		<div className="flex-1 relative z-10 overflow-auto">
			<Header title="Orders" />

			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{ORDER__STATCARD__DATA.map(({ id, name, icon, value, color }) => (
						<StatCard
							key={id}
							name={name}
							icon={icon}
							value={value}
							color={color}
						/>
					))}
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />
			</main>
		</div>
	);
}
