import { SectionContainer } from "../components/ui";
import {
	AIPoweredInsights,
	ChannelPerformance,
	CustomerSegmentation,
	OverviewCards,
	ProductPerformance,
	RevenueChart,
	UserRetention,
} from "../components/analytics";

export default function AnalyticsPage() {
	return (
		<SectionContainer title="Analytics Dashboard">
			<OverviewCards />
			<RevenueChart />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
				<ChannelPerformance />
				<ProductPerformance />
				<UserRetention />
				<CustomerSegmentation />
			</div>

			<AIPoweredInsights />
		</SectionContainer>
	);
}
