import { Header } from "../components/ui";
import {
	ConnectedAccounts,
	DangerZone,
	Notifications,
	Profile,
	Security,
} from "../components/settings";
export default function SettingsPage() {
	return (
		<div className="flex-1 overflow-auto relative z-10 bg-zinc-900">
			<Header title="Settings" />
			<main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
				<Security />
				<Profile />
				<Notifications />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
}
