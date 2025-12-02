export default function Header({ title }) {
	return (
		<header className="bg-zinc-800 backdrop-blur-md shadow-lg border-b border-zinc-700">
			<div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
				<h1 className="text-2xl font-semibold text-zinc-100">{title}</h1>
			</div>
		</header>
	);
}
