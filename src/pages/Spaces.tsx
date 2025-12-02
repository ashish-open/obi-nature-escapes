import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Sparkles,
	Palette,
	Activity,
	Users,
	Music,
	Camera,
	PartyPopper,
	Trees,
	Building2,
	GraduationCap,
	Heart,
	Grid3x3,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import celebrationImage from "@/assets/celebration-garden.jpg";
import pavilionImage from "@/assets/green-pavilion.jpg";
import picnicImage from "@/assets/picnic-lawns.jpg";
import trailsImage from "@/assets/nature-trails.jpeg";
import sportsImage from "@/assets/sports.jpeg";

type FilterType = "all" | "event-venue" | "art" | "movement" | "other";

interface SpaceItem {
	id: string;
	title: string;
	description: string;
	image?: string;
	icon?: React.ComponentType<{ className?: string }>;
	tags?: string[];
	ageGroups?: string[];
	category: FilterType;
	type: "space" | "program" | "activity";
}

const Spaces = () => {
	const navigate = useNavigate();
	const [activeFilter, setActiveFilter] = useState<FilterType>("all");
	const contentAnimation = useScrollAnimation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, []);

	// All items in a unified structure
	const allItems: SpaceItem[] = [
		// Event Venues
		{
			id: "celebration-garden",
			title: "Celebration Garden",
			description:
				"Open lawn ideal for birthdays, engagements, intimate events.",
			image: celebrationImage,
			tags: ["20-500 guests", "Open-air", "Games-friendly"],
			category: "event-venue",
			type: "space",
		},
		{
			id: "pavilion",
			title: "Pavilion",
			description:
				"Semi-covered space perfect for workshops, meetups & gatherings.",
			image: pavilionImage,
			tags: ["Family-friendly", "Shaded", "Tent setups"],
			category: "event-venue",
			type: "space",
		},
		{
			id: "picnic-lawns",
			title: "Picnic Lawns & Play Zones",
			description:
				"Relaxation spaces with shade, seating, farm views & kids' play.",
			image: picnicImage,
			tags: ["Air-conditioned", "Professional", "Wi-Fi enabled"],
			category: "event-venue",
			type: "space",
		},
		{
			id: "nature-trails",
			title: "Nature Trails & Activity Areas",
			description: "Perfect for photoshoots, nature walks and family outings.",
			image: trailsImage,
			tags: ["Wi-Fi", "Quiet spaces", "Day passes"],
			category: "event-venue",
			type: "space",
		},
		// Art Spaces & Programs
		{
			id: "art-village",
			title: "Art Village & Clay Studio",
			description:
				"Creative spaces for art jams, clay sessions, kids & adult workshops.",
			image: celebrationImage,
			tags: ["Creative", "Workshops", "All ages"],
			category: "art",
			type: "space",
		},
		{
			id: "art-workshops",
			title: "Art Workshops",
			description:
				"Painting, pottery, clay modeling, and creative expression sessions for all ages.",
			icon: Palette,
			ageGroups: ["Kids (5-12)", "Teens (13-17)", "Adults (18+)"],
			category: "art",
			type: "program",
		},
		{
			id: "music-performance",
			title: "Music & Performance",
			description:
				"Music lessons, drum circles, and performance arts workshops.",
			icon: Music,
			ageGroups: ["Kids (6-12)", "Teens (13-17)", "Adults (18+)"],
			category: "art",
			type: "program",
		},
		{
			id: "photography",
			title: "Creative Photography",
			description:
				"Nature photography, storytelling through images, and visual arts.",
			icon: Camera,
			ageGroups: ["Teens (13-17)", "Adults (18+)"],
			category: "art",
			type: "program",
		},
		{
			id: "mixed-media",
			title: "Mixed Media Art",
			description:
				"Combining various art forms, crafts, and creative techniques.",
			icon: Sparkles,
			ageGroups: ["Kids (8-12)", "Teens (13-17)", "Adults (18+)"],
			category: "art",
			type: "program",
		},
		// Movement Spaces & Programs
		{
			id: "sports-ground",
			title: "Sports Ground & Court",
			description:
				"Outdoor half basketball court for pickleball, basketball, skating, and more.",
			image: sportsImage,
			tags: ["Multi-sport", "Outdoor", "Hourly bookings"],
			category: "movement",
			type: "space",
		},
		{
			id: "yoga-wellness",
			title: "Yoga & Wellness",
			description:
				"Outdoor yoga sessions, meditation, and wellness programs in nature.",
			icon: Activity,
			ageGroups: ["Teens (13-17)", "Adults (18+)"],
			category: "movement",
			type: "program",
		},
		{
			id: "outdoor-fitness",
			title: "Outdoor Fitness",
			description: "Fitness classes, boot camps, and active movement sessions.",
			icon: Heart,
			ageGroups: ["Kids (7-12)", "Teens (13-17)", "Adults (18+)"],
			category: "movement",
			type: "program",
		},
		{
			id: "dance-movement",
			title: "Dance & Movement",
			description: "Dance workshops, movement therapy, and expressive arts.",
			icon: Activity,
			ageGroups: ["Kids (5-12)", "Teens (13-17)", "Adults (18+)"],
			category: "movement",
			type: "program",
		},
		{
			id: "sports-games",
			title: "Sports & Games",
			description:
				"Organized sports activities, team games, and recreational activities.",
			icon: Users,
			ageGroups: ["Kids (7-12)", "Teens (13-17)", "Adults (18+)"],
			category: "movement",
			type: "program",
		},
		// Other Activities
		{
			id: "birthday-parties",
			title: "Birthday Parties & Celebrations",
			description:
				"Beautiful outdoor setups for birthdays, milestones, and intimate gatherings.",
			icon: PartyPopper,
			category: "other",
			type: "activity",
		},
		{
			id: "team-offsites",
			title: "Team Offsites & Workspaces",
			description:
				"Calm, nature-backed spaces for collaboration, strategy sessions, and deep work.",
			icon: Building2,
			category: "other",
			type: "activity",
		},
		{
			id: "farm-nature",
			title: "Farm & Nature Activities",
			description:
				"Trail walks, hands-on farm experiences, green play zones, and open exploration.",
			icon: Trees,
			category: "other",
			type: "activity",
		},
		{
			id: "afterschool",
			title: "After-School Programs",
			description:
				"Engaging physical, creative, and nature-based activities for children & youth.",
			icon: GraduationCap,
			category: "other",
			type: "activity",
		},
	];

	const filters = [
		{ id: "all" as FilterType, label: "All Activities", icon: Grid3x3 },
		{ id: "event-venue" as FilterType, label: "Event Venue", icon: Sparkles },
		{ id: "art" as FilterType, label: "Art", icon: Palette },
		{ id: "movement" as FilterType, label: "Movement", icon: Activity },
		{ id: "other" as FilterType, label: "Other", icon: Users },
	];

	const filteredItems =
		activeFilter === "all"
			? allItems
			: allItems.filter((item) => item.category === activeFilter);

	const renderItem = (item: SpaceItem, index: number) => {
		if (item.type === "space" && item.image) {
			return (
				<div
					key={item.id}
					className={`group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-subtle)] transition-all duration-300 cursor-pointer animate-scale-in stagger-${
						(index % 4) + 1
					} ${
						contentAnimation.isVisible ? "visible" : ""
					} hover:shadow-[var(--shadow-warm)] hover:-translate-y-2 hover:scale-[1.02]`}
				>
					<div className="relative h-48 sm:h-52 overflow-hidden">
						<img
							src={item.image}
							alt={item.title}
							className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>

					<div className="p-4 sm:p-5">
						<h3 className="font-display text-lg sm:text-xl font-bold mb-2 text-primary group-hover:text-primary transition-colors">
							{item.title}
						</h3>
						<p className="text-muted-foreground leading-relaxed mb-3 text-sm">
							{item.description}
						</p>
						{item.tags && (
							<div className="flex flex-wrap gap-1.5">
								{item.tags.map((tag, tagIndex) => (
									<Badge
										key={tagIndex}
										variant="secondary"
										className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs"
									>
										{tag}
									</Badge>
								))}
							</div>
						)}
					</div>
				</div>
			);
		}

		// Program or Activity card - matching image card structure
		const IconComponent = item.icon || Users;
		const gradientClass =
			item.category === "movement" ? "gradient-nature" : "gradient-sunset";

		return (
			<div
				key={item.id}
				className={`group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-subtle)] transition-all duration-300 cursor-pointer animate-scale-in stagger-${
					(index % 4) + 1
				} ${
					contentAnimation.isVisible ? "visible" : ""
				} hover:shadow-[var(--shadow-warm)] hover:-translate-y-2 hover:scale-[1.02]`}
			>
				<div
					className={`relative h-48 sm:h-52 overflow-hidden ${gradientClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
				>
					<IconComponent className="w-16 h-16 sm:w-20 sm:h-20 text-primary-foreground opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
					<div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				</div>

				<div className="p-4 sm:p-5">
					<h3 className="font-display text-lg sm:text-xl font-bold mb-2 text-primary group-hover:text-primary transition-colors">
						{item.title}
					</h3>
					<p className="text-muted-foreground leading-relaxed mb-3 text-sm">
						{item.description}
					</p>
					{item.ageGroups && (
						<div className="flex flex-wrap gap-1.5">
							{item.ageGroups.map((age, idx) => (
								<Badge
									key={idx}
									variant="secondary"
									className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs"
								>
									{age}
								</Badge>
							))}
						</div>
					)}
					{item.tags && (
						<div className="flex flex-wrap gap-1.5">
							{item.tags.map((tag, tagIndex) => (
								<Badge
									key={tagIndex}
									variant="secondary"
									className="bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs"
								>
									{tag}
								</Badge>
							))}
						</div>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className="min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 bg-gradient-to-b from-background via-muted/20 to-background">
				<div className="container mx-auto px-4 sm:px-6">
					<div className="text-center max-w-4xl mx-auto">
						<h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient">
							All Our Spaces & Activities
						</h1>
						<p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
							Discover the diverse range of spaces and programs we offer for
							events, creativity, movement, and community building.
						</p>
					</div>
				</div>
			</section>

			{/* Filter Section */}
			<section className="py-4 sm:py-6 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-background/95">
				<div className="container mx-auto px-4 sm:px-6">
					<div className="flex flex-wrap justify-start gap-2 sm:gap-3">
						{filters.map((filter) => {
							const IconComponent = filter.icon;
							const isActive = activeFilter === filter.id;
							return (
								<Button
									key={filter.id}
									onClick={() => setActiveFilter(filter.id)}
									variant={isActive ? "default" : "outline"}
									className={`
                    ${
											isActive
												? "gradient-sunset text-primary-foreground border-0 shadow-[var(--shadow-warm)] scale-105"
												: "border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary/20 hover:text-primary hover:shadow-[0_4px_12px_-2px_hsl(var(--primary)/0.3)] hover:scale-105 hover:-translate-y-0.5"
										}
                    transition-all duration-300 ease-out font-medium px-3 sm:px-5 py-2 text-sm sm:text-base relative overflow-hidden group
                  `}
								>
									<IconComponent
										className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-colors duration-300 ${
											!isActive ? "group-hover:text-primary" : ""
										}`}
									/>
									<span
										className={`text-sm sm:text-base transition-colors duration-300 ${
											!isActive ? "group-hover:text-primary" : ""
										}`}
									>
										{filter.label}
									</span>
									{!isActive && (
										<span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
									)}
								</Button>
							);
						})}
					</div>
				</div>
			</section>

			{/* Filtered Content Section */}
			<section className="py-8 sm:py-12 md:py-16 bg-background">
				<div className="container mx-auto px-4 sm:px-6">
					<div ref={contentAnimation.ref} className="mb-6 sm:mb-8">
						<h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black mb-1 text-center">
							{activeFilter === "all"
								? "All Activities"
								: activeFilter === "event-venue"
								? "Event Venues"
								: activeFilter === "art"
								? "Art Programs & Spaces"
								: activeFilter === "movement"
								? "Movement & Fitness"
								: "Other Activities"}
						</h2>
						<p className="text-muted-foreground text-sm text-center">
							{filteredItems.length}{" "}
							{filteredItems.length === 1 ? "item" : "items"} found
						</p>
					</div>

					{filteredItems.length > 0 ? (
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-7xl mx-auto">
							{filteredItems.map((item, index) => renderItem(item, index))}
						</div>
					) : (
						<div className="text-center py-16">
							<p className="text-muted-foreground text-lg">
								No items found in this category.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 sm:py-16 md:py-20 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-gradient">
							Ready to Explore Our Spaces?
						</h2>
						<p className="text-base sm:text-lg text-muted-foreground mb-6">
							Get in touch with us to book a space or learn more about our
							programs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="gradient-sunset hover:scale-105 transition-all duration-300"
								onClick={() => {
									navigate("/");
									setTimeout(() => {
										const element = document.getElementById("contact");
										if (element) {
											element.scrollIntoView({ behavior: "smooth" });
										}
									}, 100);
								}}
							>
								Contact Us
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
								onClick={() => navigate("/")}
							>
								Back to Home
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Spaces;
