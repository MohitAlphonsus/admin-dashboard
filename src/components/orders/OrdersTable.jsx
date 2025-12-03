import { useState } from "react";
import { motion } from "motion/react";
import { Search, Eye } from "lucide-react";
import { ORDER__DATA } from "../../constant";

const tableHeadingClasses =
	"px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider";

export default function OrdersTable() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(ORDER__DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = ORDER__DATA.filter(
			(order) =>
				order.id.toLowerCase().includes(term) ||
				order.customer.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
		<motion.div
			className="bg-zinc-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-700"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-semibold text-zinc-100">Order List</h2>
				<div className="relative">
					<input
						type="text"
						placeholder="Search orders..."
						className="bg-zinc-700 text-white placeholder-zinc-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className="absolute left-3 top-2.5 text-zinc-400" size={18} />
				</div>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-zinc-700">
					<thead>
						<tr>
							<th className={tableHeadingClasses}>Order ID</th>
							<th className={tableHeadingClasses}>Customer</th>
							<th className={tableHeadingClasses}>Total</th>
							<th className={tableHeadingClasses}>Status</th>
							<th className={tableHeadingClasses}>Date</th>
							<th className={tableHeadingClasses}>Actions</th>
						</tr>
					</thead>

					<tbody className="divide divide-zinc-700">
						{filteredOrders.map((order) => (
							<motion.tr
								key={order.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-100">
									{order.id}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-100">
									{order.customer}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-100">
									${order.total.toFixed(2)}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.status === "Delivered"
												? "bg-green-100 text-green-800"
												: order.status === "Processing"
												? "bg-yellow-100 text-yellow-800"
												: order.status === "Shipped"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.status}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
									{order.date}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">
									<button className="text-indigo-400 hover:text-indigo-300 mr-2">
										<Eye size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
}
