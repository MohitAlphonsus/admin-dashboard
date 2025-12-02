import { motion } from "motion/react";
import { Header } from "../components/ui";
import { StatCard, CategoryDistributionChart } from "../components/overview";
import { SalesTrendChart, ProductsTable } from "../components/products";
import { PRODUCTS__STATCARD__DATA } from "../constant";
export default function ProductsPage() {
	return (
		<div className="relative z-10 flex-1 overflow-auto">
			<Header title="Products" />

			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				<motion.div
					className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					{PRODUCTS__STATCARD__DATA.map(({ id, name, icon, value, color }) => (
						<StatCard
							key={id}
							name={name}
							icon={icon}
							value={value}
							color={color}
						/>
					))}
				</motion.div>

				<ProductsTable />

				<div className="grid grid-col-1 lg:grid-cols-2 gap-8">
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
}
