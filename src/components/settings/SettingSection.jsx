import { Card } from "../ui";

export default function SettingSection({ icon: Icon, title, children }) {
	return (
		<Card className="mb-8">
			<div className="flex items-center mb-4">
				<Icon className="text-indigo-400 mr-4" size="24" />
				<h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
			</div>
			{children}
		</Card>
	);
}
