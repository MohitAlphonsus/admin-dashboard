import {
	BarChart2,
	DollarSign,
	Settings,
	ShoppingBag,
	ShoppingCart,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";

export const SIDEBAR__LINKS = [
	{ id: 1, name: "Overview", icon: BarChart2, href: "/", color: "#6366f1" },
	{
		id: 2,
		name: "Products",
		icon: ShoppingBag,
		href: "/products",
		color: "#885cf6",
	},
	{
		id: 3,
		name: "Users",
		icon: Users,
		href: "/users",
		color: "#EC4899",
	},
	{ id: 4, name: "Sales", icon: DollarSign, href: "/sales", color: "#10B981" },
	{
		id: 5,
		name: "Orders",
		icon: ShoppingCart,
		href: "/orders",
		color: "#F59E0B",
	},
	{
		id: 6,
		name: "Analytics",
		icon: TrendingUp,
		href: "/analytics",
		color: "#3B82F6",
	},
	{
		id: 7,
		name: "Settings",
		icon: Settings,
		href: "/settings",
		color: "#6EE7B7",
	},
];

export const STATCARD__DATA = [
	{ id: 1, name: "Total Sales", icon: Zap, value: "$12,345", color: "#6366F1" },
	{ id: 2, name: "New Users", icon: Users, value: "1,234", color: "#8B5CF6" },
	{
		id: 3,
		name: "Total Products",
		icon: ShoppingBag,
		value: "567",
		color: "#EC4899",
	},
	{
		id: 4,
		name: "Conversion Rate",
		icon: BarChart2,
		value: "12.5%",
		color: "#10B981",
	},
];

export const SALES__DATA = [
	{ name: "Jul", sales: 4200 },
	{ name: "Aug", sales: 3800 },
	{ name: "Sep", sales: 5100 },
	{ name: "Oct", sales: 4600 },
	{ name: "Nov", sales: 5400 },
	{ name: "Dec", sales: 7200 },
	{ name: "Jan", sales: 6100 },
	{ name: "Feb", sales: 5900 },
	{ name: "Mar", sales: 6800 },
	{ name: "Apr", sales: 6300 },
	{ name: "May", sales: 7100 },
	{ name: "Jun", sales: 7500 },
];

export const CATEGORY__DATA = [
	{ name: "Electronics", value: 4500 },
	{ name: "Clothing", value: 3200 },
	{ name: "Home & Garden", value: 2800 },
	{ name: "Books", value: 2100 },
	{ name: "Sports & Outdoors", value: 1900 },
];
