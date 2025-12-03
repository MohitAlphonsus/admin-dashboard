import Header from "./Header";

export default function SectionContainer({ title, children }) {
	return (
		<div className="relative z-10 flex-1 overflow-auto">
			<Header title={title} />
			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">{children}</main>
		</div>
	);
}
