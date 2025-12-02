import {
	AlertTriangle,
	BarChart2,
	DollarSign,
	Package,
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

export const PRODUCTS__STATCARD__DATA = [
	{
		id: 1,
		name: "Total Products",
		icon: Package,
		value: 1234,
		color: "#6366F1",
	},
	{ id: 2, name: "Top Selling", icon: TrendingUp, value: 89, color: "#10B981" },
	{
		id: 3,
		name: "Low Stock",
		icon: AlertTriangle,
		value: 23,
		color: "#F59E0B",
	},
	{
		id: 4,
		name: "Total Revenue",
		icon: DollarSign,
		value: "$543,210",
		color: "#EF4444",
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

export const SALES__TREND__DATA = [
	{ name: "Jan", sales: 4000 },
	{ name: "Feb", sales: 3000 },
	{ name: "Mar", sales: 5000 },
	{ name: "Apr", sales: 4500 },
	{ name: "May", sales: 6000 },
	{ name: "Jun", sales: 5500 },
];

export const SALES__CHANNEL__DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];

export const CATEGORY__DATA = [
	{ name: "Electronics", value: 4500 },
	{ name: "Clothing", value: 3200 },
	{ name: "Home & Garden", value: 2800 },
	{ name: "Books", value: 2100 },
	{ name: "Sports & Outdoors", value: 1900 },
];

export const PRODUCT__DATA = [
	{
		id: 1,
		name: "Wireless Earbuds",
		category: "Electronics",
		price: 59.99,
		stock: 143,
		sales: 1200,
	},
	{
		id: 2,
		name: "Leather Wallet",
		category: "Accessories",
		price: 39.99,
		stock: 89,
		sales: 800,
	},
	{
		id: 3,
		name: "Smart Watch",
		category: "Electronics",
		price: 199.99,
		stock: 56,
		sales: 650,
	},
	{
		id: 4,
		name: "Yoga Mat",
		category: "Fitness",
		price: 29.99,
		stock: 210,
		sales: 950,
	},
	{
		id: 5,
		name: "Coffee Maker",
		category: "Home",
		price: 79.99,
		stock: 78,
		sales: 720,
	},
];

export const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
