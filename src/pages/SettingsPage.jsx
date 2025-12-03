import { SectionContainer } from "../components/ui";
import {
	ConnectedAccounts,
	DangerZone,
	Notifications,
	Profile,
	Security,
} from "../components/settings";
export default function SettingsPage() {
	return (
		<SectionContainer title="Settings">
			<Security />
			<Profile />
			<Notifications />
			<ConnectedAccounts />
			<DangerZone />
		</SectionContainer>
	);
}
