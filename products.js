(() => {
	const imagePools = {
		earrings: [
			"https://images.unsplash.com/photo-1684616290775-9b1722dbe9b7?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1701777892740-88419a701472?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1671644730555-916aa8d8157f?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1727990865600-91f8cb8b0168?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1653227907864-560dce4c252d?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1588891805983-fee12d508e31?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1608508644127-ba99d7732fee?auto=format&fit=crop&w=720&q=85"
		],
		rings: [
			"https://images.unsplash.com/photo-1783061339627-37483d51349c?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1705326455036-0fab8ecba04d?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1731586249471-82bb9b2f769a?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1626784214536-d859187e0bd0?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1654521883301-070279dd0ae1?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1724896732926-cad47e0080a2?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1724896730911-c3b6078d6ace?auto=format&fit=crop&w=720&q=85"
		],
		necklaces: [
			"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1596187262703-c13003fbfac1?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1705326452390-3ecf6070595f?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1623321673989-830eff0fd59f?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1599475211349-f4c81b3216bc?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1721103418312-b0057a8c31c2?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1685970731194-e27b477e87ba?auto=format&fit=crop&w=720&q=85"
		],
		bracelets: [
			"https://images.unsplash.com/photo-1731406322274-fb018de6fa97?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1633810543462-77c4a3b13f07?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1689367436442-76c859315008?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1721206624492-3d05631471ea?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1679156271456-d6068c543ee7?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1689397136362-dce64e557fcc?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1617191880362-aac615de3c26?auto=format&fit=crop&w=720&q=85"
		],
		"jewellery-sets": [
			"https://images.unsplash.com/photo-1682823544433-aae34df4e3da?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1722410180687-b05b50922362?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1694062045776-f48d9b6de57e?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1600862754152-80a263dd564f?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1601121141499-17ae80afc03a?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1641290748359-1d944fc8359a?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1721034917345-d17c5405ead0?auto=format&fit=crop&w=720&q=85",
			"https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?auto=format&fit=crop&w=720&q=85"
		]
	};
	const detailSpecs = {
		earrings: { material: "18K Gold Plated", color: "Gold", dimensions: "Approx. 2–4.5 cm", care: "Keep dry and store separately to protect the finish." },
		rings: { material: "18K Gold Plated", color: "Gold", dimensions: "Band width approx. 2 mm", sizes: ["5", "6", "7", "8"], care: "Remove before washing hands and store in a soft pouch." },
		necklaces: { material: "18K Gold Plated", color: "Gold", dimensions: "45 cm chain with 5 cm extender", sizes: ["40 cm", "45 cm", "50 cm"], care: "Fasten before storing and keep away from perfume and water." },
		bracelets: { material: "18K Gold Plated", color: "Gold", dimensions: "17 cm with 4 cm extender", care: "Wipe gently with a soft, dry cloth after wearing." },
		"jewellery-sets": { material: "18K Gold Plated", color: "Gold", dimensions: "Dimensions vary by piece", care: "Store each piece separately and avoid contact with moisture." }
	};
	const reviewSamples = [
		{ name: "Ayesha R.", text: "Beautiful quality and exactly as shown." },
		{ name: "Sana M.", text: "The finish feels thoughtful and lovely to wear." },
		{ name: "Zoya K.", text: "A lovely keepsake. The details are even better in person." },
		{ name: "Mariam H.", text: "Arrived beautifully packed and made a perfect gift." }
	];
	const slugify = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

	const categorySeeds = [
		{
			slug: "earrings",
			name: "Earrings",
			description: "Discover elegant earrings designed to add a refined touch to every look.",
			products: [
				["Golden Pearl Drop Earrings", 3499, "Luminous freshwater pearls fall from a fine gold-plated setting.", 4.8, 24, "Bestseller", true],
				["Aurelia Sculpted Hoops", 4299, "Sculptural polished hoops with a softly rounded silhouette.", 4.9, 18, "New", true],
				["Dainty Star Stud Earrings", 2799, "Delicate star-shaped studs finished with subtle crystal details.", 4.7, 31, null, true],
				["Celeste Huggie Hoops", 3199, "Everyday huggies with a fine row of light-catching stones.", 4.8, 16, null, true],
				["Petite Pearl Cluster Studs", 3899, "A graceful cluster of pearls for a soft, feminine finish.", 4.6, 12, "New", true],
				["Luna Gold Threaders", 2999, "Lightweight chain threaders that move beautifully with you.", 4.5, 9, null, true],
				["Marquise Crystal Drops", 4799, "Elegant marquise stones set in warm, polished gold.", 4.9, 27, "Bestseller", true],
				["Classic Mini Gold Hoops", 2499, "A timeless pair of understated hoops for effortless styling.", 4.4, 8, null, true]
			]
		},
		{
			slug: "rings",
			name: "Rings",
			description: "Find a little meaning in every detail with rings made to be treasured.",
			products: [
				["Solitaire Glow Ring", 5999, "A luminous centre stone set on a slender gold-plated band.", 4.9, 36, "Bestseller", true],
				["Twisted Promise Band", 4299, "Two delicate gold lines intertwine in a modern keepsake ring.", 4.7, 19, "New", true],
				["Pearl Signet Ring", 4799, "A petite pearl brings a refined note to this sculpted signet.", 4.8, 21, null, true],
				["Celestial Stack Ring", 3299, "A fine star-set band designed to layer or wear on its own.", 4.6, 14, null, true],
				["Lumiere Pavé Band", 5499, "A delicate row of pavé stones adds an understated sparkle.", 4.9, 28, "Bestseller", true],
				["Golden Hour Dome Ring", 3999, "A softly rounded dome with a mirror-polished finish.", 4.5, 11, "New", true],
				["Willow Open Ring", 3599, "An adjustable open silhouette inspired by graceful willow leaves.", 4.6, 13, null, true],
				["Eternity Slim Band", 2999, "A slim, comfortable band made for everyday layering.", 4.4, 7, null, true]
			]
		},
		{
			slug: "necklaces",
			name: "Necklaces",
			description: "Discover delicate layers and meaningful pendants made for every day.",
			products: [
				["Solstice Pendant Necklace", 6499, "A radiant pendant on a fine chain, finished in warm gold.", 4.9, 32, "Bestseller", true],
				["Pearl Line Necklace", 7299, "Small luminous pearls trace a graceful, delicate line.", 4.8, 22, "New", true],
				["Everyday Fine Chain", 3999, "A versatile fine-link chain that layers beautifully.", 4.6, 17, null, true],
				["Luna Crescent Necklace", 5799, "A softly sculpted crescent pendant with a polished glow.", 4.7, 20, null, true],
				["Golden Keepsake Locket", 7999, "A classic locket pendant designed to hold a little memory.", 4.9, 25, "Bestseller", true],
				["Dewdrop Crystal Necklace", 5199, "A single crystal drop adds an elegant touch to a fine chain.", 4.5, 10, "New", true],
				["Layered Grace Necklace", 8499, "Two fine chains create an effortless layered look.", 4.8, 15, null, true],
				["Tiny Initial Pendant", 4499, "A personal initial charm on a dainty everyday chain.", 4.4, 8, null, true]
			]
		},
		{
			slug: "bracelets",
			name: "Bracelets",
			description: "Finish every gesture with a refined bracelet crafted for lasting wear.",
			products: [
				["Aurelia Slim Cuff", 6999, "A polished open cuff with a clean, sculptural profile.", 4.9, 26, "Bestseller", true],
				["Fine Link Chain Bracelet", 4299, "A delicate chain bracelet with an adjustable fit.", 4.7, 18, "New", true],
				["Pearl Charm Bracelet", 5599, "A petite freshwater pearl rests on a fine gold chain.", 4.8, 23, null, true],
				["Golden Knot Bangle", 6299, "A graceful knot detail gives this smooth bangle meaning.", 4.6, 12, null, true],
				["Celeste Tennis Bracelet", 8999, "A refined row of clear stones catches the light softly.", 4.9, 34, "Bestseller", true],
				["Twilight Bead Bracelet", 3799, "Tiny gold beads add a subtle texture to your everyday stack.", 4.5, 9, "New", true],
				["Dainty Heart Chain Bracelet", 4599, "A small heart charm brings a personal touch to a fine chain.", 4.6, 16, null, true],
				["Classic Polished Bangle", 5799, "A timeless hinged bangle with a smooth, luminous finish.", 4.4, 7, null, true]
			]
		},
		{
			slug: "jewellery-sets",
			name: "Jewellery Sets",
			description: "Explore thoughtfully matched pieces that make getting ready feel effortless.",
			products: [
				["Pearl Grace Jewellery Set", 9999, "A coordinated pearl necklace and earring set for special moments.", 4.9, 29, "Bestseller", true],
				["Golden Bloom Set", 11499, "Floral-inspired earrings and pendant finished in soft gold.", 4.8, 21, "New", true],
				["Celeste Crystal Set", 12999, "Matching crystal drops and pendant bring a refined evening glow.", 4.9, 33, null, true],
				["Minimalist Chain Set", 8499, "A fine chain necklace paired with matching understated studs.", 4.6, 12, null, true],
				["Aurelia Occasion Set", 15499, "An elegant statement necklace and earring pairing for celebrations.", 4.9, 38, "Bestseller", true],
				["Moonlight Pearl Set", 10999, "Soft pearl accents unite a pendant and petite drop earrings.", 4.7, 17, "New", true],
				["Eternal Shine Set", 13999, "A luminous bracelet, necklace, and earring trio in warm gold.", 4.8, 24, null, true],
				["Everyday Gold Trio", 7499, "Coordinated fine-chain necklace and earrings for daily wear.", 4.5, 10, null, true]
			]
		}
	];

	const categories = categorySeeds.map(({ products: categoryProducts, ...category }) => category);
	const collections = [
		{ slug: "timeless-gold", title: "TIMELESS GOLD", description: "Classic pieces designed to remain beautiful beyond the moment.", imageCategory: "necklaces" },
		{ slug: "pearl-elegance", title: "PEARL ELEGANCE", description: "Delicate pearls with a refined modern touch.", imageCategory: "earrings" },
		{ slug: "statement-edit", title: "THE STATEMENT EDIT", description: "Bold pieces made to make an entrance.", imageCategory: "bracelets" }
	];
	const products = categorySeeds.flatMap((category, categoryIndex) => category.products.map((details, productIndex) => {
		const [name, price, description, rating, reviewCount, badge, available] = details;
		const imagePool = imagePools[category.slug];
		const images = Array.from({ length: 4 }, (_, imageIndex) => imagePool[(productIndex + imageIndex) % imagePool.length]);
		const specs = detailSpecs[category.slug];
		const sizes = specs.sizes;
		const materials = [specs.material];
		if (/pearl/i.test(`${name} ${description}`)) materials.push("Pearl");
		if (/crystal/i.test(`${name} ${description}`)) materials.push("Crystal");
		const collections = [];
		if (materials.includes("18K Gold Plated")) collections.push("timeless-gold");
		if (materials.includes("Pearl")) collections.push("pearl-elegance");
		if (badge === "Bestseller" || /sculpted|marquise|statement|occasion|cuff/i.test(`${name} ${description}`)) collections.push("statement-edit");
		return {
			id: `${category.slug}-${String(productIndex + 1).padStart(2, "0")}`,
			name,
			slug: slugify(name),
			category: category.slug,
			price,
			image: images[0],
			images,
			shortDescription: description,
			description: `${description} Thoughtfully finished for comfortable wear, this design brings a refined touch to everyday moments and special occasions.`,
			...(badge === "Bestseller" ? { oldPrice: Math.round(price * 1.18 / 100) * 100 } : {}),
			material: specs.material,
			materials,
			collections,
			color: specs.color,
			size: sizes ? sizes[Math.floor(sizes.length / 2)] : "One Size",
			...(sizes ? { sizes } : {}),
			dimensions: specs.dimensions,
			rating,
			reviewCount,
			badge,
			available,
			stock: available,
			stockStatus: available ? "In stock" : "Out of stock",
			careInstructions: specs.care,
			shippingInfo: "Free delivery on orders above PKR 5,000. Standard delivery takes 3–5 business days.",
			returnInfo: "Unused pieces may be returned within 14 days in their original packaging.",
			reviews: reviewSamples.map((review, reviewIndex) => ({
				id: `${category.slug}-${productIndex + 1}-review-${reviewIndex + 1}`,
				name: review.name,
				text: review.text,
				rating: Math.max(4, rating - (reviewIndex === 3 ? 0.1 : 0)),
				verified: true
			})),
			createdAt: 20260101 + categoryIndex * 100 + productIndex
		};
	}));

	window.ELAN_STORE = { categories, collections, products };
})();
