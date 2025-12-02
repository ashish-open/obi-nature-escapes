import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { supabase } from "@/integrations/supabase/client";
import celebrationImage from "@/assets/celebration-garden.jpg";
import picnicImage from "@/assets/picnic-lawns.jpeg";
import afterschoolImage from "@/assets/afterschool.jpg";
import trailsImage from "@/assets/nature-trails.jpeg";
import pavilionImage from "@/assets/green-pavilion.jpeg";
import heroImage from "@/assets/hero-sunset.jpg";

interface GalleryImage {
	id: string;
	src: string;
	alt: string;
	title?: string;
	description?: string;
	category?: string;
}

const Gallery = () => {
	const navigate = useNavigate();
	const [images, setImages] = useState<GalleryImage[]>([]);
	const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
	const [activeCategory, setActiveCategory] = useState<string>("all");
	const [loading, setLoading] = useState(true);
	const titleAnimation = useScrollAnimation();
	const gridAnimation = useScrollAnimation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
		fetchGalleryImages();
	}, []);

	const fetchGalleryImages = async () => {
		try {
			// Try to fetch from Supabase
			const { data, error } = await supabase
				.from("gallery_images")
				.select("*")
				.order("display_order", { ascending: true });

			if (error) throw error;

			if (data && data.length > 0) {
				// Use Supabase images
				const galleryImages: GalleryImage[] = data.map((img) => ({
					id: img.id,
					src: img.image_url,
					alt: img.title || img.description || "OBI Gallery Image",
					title: img.title || undefined,
					description: img.description || undefined,
					category: img.category || undefined,
				}));
				setImages(galleryImages);
			} else {
				// Fallback to local images
				setImages(getLocalImages());
			}
		} catch (error) {
			console.error("Error fetching gallery images:", error);
			// Fallback to local images
			setImages(getLocalImages());
		} finally {
			setLoading(false);
		}
	};

	const getLocalImages = (): GalleryImage[] => {
		return [
			{
				id: "1",
				src: celebrationImage,
				alt: "Event setup at OBI",
				title: "Celebration Garden",
				description: "Beautiful outdoor event setup",
				category: "events",
			},
			{
				id: "2",
				src: picnicImage,
				alt: "Picnic scene at OBI",
				title: "Picnic Lawns",
				description: "Family picnic time",
				category: "activities",
			},
			{
				id: "3",
				src: afterschoolImage,
				alt: "Kids play activities",
				title: "Afterschool Programs",
				description: "Children enjoying activities",
				category: "programs",
			},
			{
				id: "4",
				src: trailsImage,
				alt: "Nature landscape",
				title: "Nature Trails",
				description: "Scenic nature walks",
				category: "nature",
			},
			{
				id: "5",
				src: pavilionImage,
				alt: "Green Pavilion",
				title: "Pavilion",
				description: "Semi-covered gathering space",
				category: "spaces",
			},
			{
				id: "6",
				src: heroImage,
				alt: "Family day-out",
				title: "Family Time",
				description: "Quality family moments",
				category: "activities",
			},
		];
	};

	const categories = [
		{ id: "all", label: "All" },
		{ id: "events", label: "Events" },
		{ id: "spaces", label: "Spaces" },
		{ id: "activities", label: "Activities" },
		{ id: "programs", label: "Programs" },
		{ id: "nature", label: "Nature" },
	];

	const filteredImages =
		activeCategory === "all"
			? images
			: images.filter((img) => img.category === activeCategory);

	const uniqueCategories = Array.from(
		new Set(images.map((img) => img.category).filter(Boolean))
	);

	const availableCategories = categories.filter(
		(cat) => cat.id === "all" || uniqueCategories.includes(cat.id)
	);

	return (
		<div className="min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 bg-gradient-to-b from-background via-muted/20 to-background">
				<div className="container mx-auto px-4 sm:px-6">
					<div
						ref={titleAnimation.ref}
						className={`text-center max-w-4xl mx-auto animate-on-scroll ${
							titleAnimation.isVisible ? "visible" : ""
						}`}
					>
						<h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gradient">
							Gallery
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
							A glimpse into life at OBI — moments of joy, connection, and
							nature.
						</p>
					</div>
				</div>
			</section>

			{/* Filter Section */}
			{availableCategories.length > 1 && (
				<section className="py-4 sm:py-6 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-background/95">
					<div className="container mx-auto px-4 sm:px-6">
						<div className="flex flex-wrap justify-start gap-2 sm:gap-3">
							{availableCategories.map((category) => {
								const isActive = activeCategory === category.id;
								return (
									<Button
										key={category.id}
										onClick={() => setActiveCategory(category.id)}
										variant={isActive ? "default" : "outline"}
										className={`
                      ${
												isActive
													? "gradient-sunset text-primary-foreground border-0 shadow-[var(--shadow-warm)] scale-105"
													: "border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 hover:scale-105 hover:text-primary"
											}
                      transition-all duration-300 font-medium px-3 sm:px-5 py-2 text-sm sm:text-base relative overflow-hidden group
                    `}
									>
										<span className="text-sm sm:text-base">
											{category.label}
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
			)}

			{/* Gallery Grid */}
			<section className="py-8 sm:py-12 md:py-16 bg-background">
				<div className="container mx-auto px-4 sm:px-6">
					{loading ? (
						<div className="text-center py-16">
							<p className="text-muted-foreground">Loading gallery...</p>
						</div>
					) : filteredImages.length > 0 ? (
						<div
							ref={gridAnimation.ref}
							className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto"
						>
							{filteredImages.map((image, index) => (
								<div
									key={image.id}
									onClick={() => setSelectedImage(image)}
									className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-[var(--shadow-subtle)] transition-all duration-300 h-48 sm:h-56 md:h-64 cursor-pointer hover:shadow-[var(--shadow-warm)] hover:-translate-y-2 hover:scale-[1.02] animate-scale-in stagger-${
										(index % 8) + 1
									} ${gridAnimation.isVisible ? "visible" : ""}`}
								>
									<img
										src={image.src}
										alt={image.alt}
										className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									{image.title && (
										<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
											<h3 className="font-display text-lg font-bold text-primary-foreground mb-1">
												{image.title}
											</h3>
											{image.description && (
												<p className="text-sm text-primary-foreground/90">
													{image.description}
												</p>
											)}
										</div>
									)}
								</div>
							))}
						</div>
					) : (
						<div className="text-center py-16">
							<p className="text-muted-foreground text-lg">
								No images found in this category.
							</p>
						</div>
					)}
				</div>
			</section>

			{/* Image Modal */}
			<Dialog
				open={!!selectedImage}
				onOpenChange={() => setSelectedImage(null)}
			>
				<DialogContent className="max-w-5xl p-0 bg-background border-0">
					{selectedImage && (
						<div className="relative">
							<button
								onClick={() => setSelectedImage(null)}
								className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-foreground/80 hover:bg-foreground text-background flex items-center justify-center transition-colors"
							>
								<X className="w-5 h-5" />
							</button>
							<img
								src={selectedImage.src}
								alt={selectedImage.alt}
								className="w-full h-auto max-h-[80vh] object-contain"
							/>
							{(selectedImage.title || selectedImage.description) && (
								<div className="p-6 bg-card">
									{selectedImage.title && (
										<h3 className="font-display text-2xl font-bold text-primary mb-2">
											{selectedImage.title}
										</h3>
									)}
									{selectedImage.description && (
										<p className="text-muted-foreground">
											{selectedImage.description}
										</p>
									)}
								</div>
							)}
						</div>
					)}
				</DialogContent>
			</Dialog>

			{/* CTA Section */}
			<section className="py-12 sm:py-16 md:py-20 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-gradient">
							Experience OBI Yourself
						</h2>
						<p className="text-base sm:text-lg text-muted-foreground mb-8">
							Ready to create your own memories at OBI?
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="gradient-sunset hover:scale-105 transition-all duration-300"
								onClick={() => navigate("/spaces")}
							>
								Explore Our Spaces
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Gallery;
