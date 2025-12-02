import {
	BarChart2,
	DollarSign,
	Settings,
	ShoppingBag,
	ShoppingCart,
	TrendingUp,
	Users,
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
		id: 2,
		name: "Users",
		icon: Users,
		href: "/users",
		color: "#EC4899",
	},
	{ id: 3, name: "Sales", icon: DollarSign, href: "/sales", color: "#10B981" },
	{
		id: 4,
		name: "Orders",
		icon: ShoppingCart,
		href: "/orders",
		color: "#F59E0B",
	},
	{
		id: 5,
		name: "Analytics",
		icon: TrendingUp,
		href: "/analytics",
		color: "#3B82F6",
	},
	{
		id: 6,
		name: "Settings",
		icon: Settings,
		href: "/settings",
		color: "#6EE7B7",
	},
];
