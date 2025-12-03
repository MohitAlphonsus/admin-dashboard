import { motion } from "motion/react";
export default function Card({ children, className }) {
	return (
		<motion.div
			className={`bg-zinc-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-700 ${className}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			{children}
		</motion.div>
	);
}
