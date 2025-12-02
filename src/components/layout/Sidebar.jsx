import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu } from "lucide-react";

import { SIDEBAR__LINKS } from "../../constant";

export default function Sidebar() {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	return (
		<motion.div
			className={`relative z-10 shrink-0 transition-all duration-300 ease-in-out ${
				sidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: sidebarOpen ? 256 : 80 }}
		>
			<div className="h-full bg-zinc-800 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setSidebarOpen(!sidebarOpen)}
					className="ml-2 p-2 rounded-full hover:bg-zinc-700 transition-colors max-w-fit"
				>
					<Menu size={24} />
				</motion.button>
				<nav className="mt-8 grow">
					{SIDEBAR__LINKS.map((link) => (
						<Link key={link.id} to={link.href}>
							<motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors mb-2">
								<link.icon
									size={20}
									style={{ color: link.color, minWidth: "20px" }}
								/>
								<AnimatePresence>
									{sidebarOpen && (
										<motion.span
											className="ml-4 whitespace-nowrap"
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{link.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
}
