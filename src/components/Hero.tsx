"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "@/assets/obi-hero.png";
import slide2 from "@/assets/obi-hero-2.png";

const slides = [
	{
		image: slide2,
		title: (
			<>
				<span className="block text-gradient">Winter Carnival</span>
			</>
		),
		subtitle:
			"Experience games, workshops, food stalls and holiday magic at Obi’s Winter Carnival.",
		buttonText: "Book Carnival Tickets",
		buttonLink: "https://obi.life/carnival",
	},
	{
		image: slide1,
		title: (
			<>
				<span className="block text-gradient">Where Celebrations,</span>
				<span className="block text-primary-foreground">
					Nature & Community Come Together
				</span>
			</>
		),
		subtitle:
			"Escape from the noise and reconnect with nature at Bengaluru's favourite outdoor venue.",
		buttonText: "Plan an Event",
		buttonLink:
			"https://wa.me/917676816124?text=Hi%2C%20Looking%20forward%20to%20explore%20Obi%20Space",
	},
];

const Hero = () => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(
			() => setCurrent((prev) => (prev + 1) % slides.length),
			9000
		);
		return () => clearInterval(timer);
	}, []);

	const next = () => setCurrent((prev) => (prev + 1) % slides.length);
	const prev = () =>
		setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* IMAGE CAROUSEL */}
			<div className="absolute inset-0 w-full h-full">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
							index === current ? "opacity-100" : "opacity-0"
						}`}
					>
						<img
							src={slide.image}
							alt="Obi Space Carousel Slide"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
					</div>
				))}
			</div>

			{/* TEXT CONTENT PER SLIDE */}
			<div className="relative z-10 container mx-auto px-4 sm:px-6 text-center -mt-10 sm:-mt-16 md:-mt-24">
				<div className="animate-on-scroll visible">
					<h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
						{slides[current].title}
					</h1>

					<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
						{slides[current].subtitle}
					</p>

					<div className="flex justify-center">
						<a
							href={slides[current].buttonLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								size="lg"
								className="gradient-sunset text-primary-foreground hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group"
							>
								{slides[current].buttonText}
								<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
							</Button>
						</a>
					</div>
				</div>
			</div>

			{/* LEFT + RIGHT ARROWS */}
			<button
				onClick={prev}
				className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 transition"
			>
				<ChevronLeft className="text-white w-6 h-6" />
			</button>

			<button
				onClick={next}
				className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur hover:bg-black/60 transition"
			>
				<ChevronRight className="text-white w-6 h-6" />
			</button>

			{/* PAGINATION DOTS */}
			<div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
				{slides.map((_, i) => (
					<div
						key={i}
						onClick={() => setCurrent(i)}
						className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
							current === i ? "bg-white scale-125" : "bg-white/50"
						}`}
					/>
				))}
			</div>

			{/* Bottom Fade */}
			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
		</section>
	);
};

export default Hero;
