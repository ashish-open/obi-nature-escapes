import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import celebrationImage from "@/assets/celebration-garden.jpg";
import pavilionImage from "@/assets/green-pavilion.jpeg";
import picnicImage from "@/assets/picnic-lawns.jpeg";
import trailsImage from "@/assets/nature-trails.jpeg";
import sportsImage from "@/assets/sports.jpeg";
import artVillage from "@/assets/art-village.jpeg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const EventSpaces = () => {
	const titleAnimation = useScrollAnimation();
	const cardsAnimation = useScrollAnimation();
	const spaces = [
		{
			title: "Celebration Garden",
			description:
				"Open lawn ideal for birthdays, engagements, intimate events.",
			image: celebrationImage,
			tags: ["20-500 guests", "Open-air", "Games-friendly"],
		},
		{
			title: "Pavilion",
			description:
				"Semi-covered space perfect for workshops, meetups & gatherings.",
			image: pavilionImage,
			tags: ["Family-friendly", "Shaded", "Tent setups"],
		},
		{
			title: "Picnic Lawns & Play Zones",
			description:
				"Relaxation spaces with shade, seating, farm views & kids' play.",
			image: picnicImage,
			tags: ["Air-conditioned", "Professional", "Wi-Fi enabled"],
		},
		{
			title: "Nature Trails & Activity Areas",
			description: "Perfect for photoshoots, nature walks and family outings.",
			image: trailsImage,
			tags: ["Wi-Fi", "Quiet spaces", "Day passes"],
		},
		{
			title: "Art Village & Clay Studio",
			description:
				"Creative spaces for art jams, clay sessions, kids & adult workshops.",
			image: artVillage,
			tags: ["Creative", "Workshops", "All ages"],
		},
		{
			title: "Sports Ground & Court",
			description:
				"Outdoor half basketball court for pickleball, basketball, skating, and more.",
			image: sportsImage,
			tags: ["Multi-sport", "Outdoor", "Hourly bookings"],
		},
	];

	return (
		<section className="py-16 sm:py-20 md:py-32 bg-background">
			<div className="container mx-auto px-4 sm:px-6">
				<div
					ref={titleAnimation.ref}
					className={`text-center mb-12 sm:mb-16 animate-on-scroll ${
						titleAnimation.isVisible ? "visible" : ""
					}`}
				>
					<div className="flex justify-center mb-4">
						<Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
					</div>
					<h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 px-2">
						<span className="text-foreground">Spaces to Celebrate, Work,</span>
						<br />
						<span className="text-primary italic">and Play</span>
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
						Flexible indoor and outdoor spaces for every kind of gathering.
					</p>
				</div>

				<div
					ref={cardsAnimation.ref}
					className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12"
				>
					{spaces.map((space, index) => (
						<div
							key={index}
							className={`group bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-subtle)] transition-all duration-700 hover-lift cursor-pointer animate-scale-in stagger-${
								(index % 4) + 1
							} ${cardsAnimation.isVisible ? "visible" : ""}`}
						>
							<div className="relative h-56 overflow-hidden">
								<img
									src={space.image}
									alt={space.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
							</div>

							<div className="p-6">
								<h3 className="font-display text-xl font-bold mb-3 text-primary">
									{space.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed mb-4">
									{space.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{space.tags.map((tag, tagIndex) => (
										<Badge
											key={tagIndex}
											variant="secondary"
											className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
										>
											{tag}
										</Badge>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center">
					<Button
						size="lg"
						className="gradient-sunset hover:scale-105 transition-all duration-300 text-base px-10"
					>
						Explore Packages & Pricing
					</Button>
				</div>
			</div>
		</section>
	);
};

export default EventSpaces;
