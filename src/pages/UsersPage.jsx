import { motion } from "motion/react";
import { USERS__STATCARD__DATA } from "../constant";
import { Header } from "../components/ui";
import { StatCard } from "../components/overview";

import {
	UsersTable,
	UserGrowthChart,
	UserDemographicsChart,
	UserActivityHeatmap,
} from "../components/users";

export default function UsersPage() {
	return (
		<div className="flex-1 overflow-auto relative z-10">
			<Header title="Users" />

			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				{/* STATS */}
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
        {USERS__STATCARD__DATA.map(({ id, name, icon, value, color }) => (
          <StatCard key={id} name={name} icon={icon} value={value} color={color} />
        ))}
				</motion.div>

				<UsersTable />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
					<UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
				</div>
			</main>
		</div>
	);
}
