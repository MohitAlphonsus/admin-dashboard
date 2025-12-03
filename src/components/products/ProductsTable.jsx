import { useState } from "react";
import { motion } from "motion/react";
import { Edit, Search, Trash2 } from "lucide-react";
import { PRODUCT__DATA } from "../../constant";
import { Card } from "../ui";
const tableHeadingClasses =
	"px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider";
const tableBodyClasses = "px-6 py-4 whitespace-nowrap text-sm text-zinc-300";

export default function ProductsTable() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT__DATA);

	function handleSearch(event) {
		const term = event.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT__DATA.filter(
			(product) =>
				product.name.toLowerCase().includes(term) ||
				product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	}

	return (
		<Card>
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-semibold text-zinc-100">Product List</h2>
				<div className="relative">
					<input
						type="text"
						placeholder="Search products..."
						className="bg-zinc-700 text-white placeholder-zinc-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className="absolute left-3 top-2.5 text-zinc-400" size={18} />
				</div>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-zinc-700">
					<thead>
						<tr>
							<th className={tableHeadingClasses}>Name</th>
							<th className={tableHeadingClasses}>Category</th>
							<th className={tableHeadingClasses}>Price</th>
							<th className={tableHeadingClasses}>Stock</th>
							<th className={tableHeadingClasses}>Sales</th>
							<th className={tableHeadingClasses}>Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-zinc-700">
						{filteredProducts.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-100 flex gap-2 items-center">
									<img
										src="https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww"
										alt="Product img"
										className="size-10 rounded-full"
									/>
									{product.name}
								</td>

								<td className={tableBodyClasses}>{product.category}</td>

								<td className={tableBodyClasses}>
									${product.price.toFixed(2)}
								</td>
								<td className={tableBodyClasses}>{product.stock}</td>
								<td className={tableBodyClasses}>{product.sales}</td>
								<td className={tableBodyClasses}>
									<button className="text-indigo-400 hover:text-indigo-300 mr-2">
										<Edit size={18} />
									</button>
									<button className="text-red-400 hover:text-red-300">
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</Card>
	);
}
