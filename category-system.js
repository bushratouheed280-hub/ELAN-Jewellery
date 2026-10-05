
(() => {
	const store = window.ELAN_STORE;
	const main = document.querySelector("main");
	if (!store || !main) return;

	const homeMarkup = main.innerHTML;
	const categoryBySlug = new Map(store.categories.map((category) => [category.slug, category]));
	const collectionBySlug = new Map((store.collections || []).map((collection) => [collection.slug, collection]));
	const priceRanges = [
		{ value: "under-3000", label: "Under PKR 3,000", min: 0, max: 2999 },
		{ value: "3000-5000", label: "PKR 3,000 – 5,000", min: 3000, max: 5000 },
		{ value: "5000-10000", label: "PKR 5,000 – 10,000", min: 5001, max: 10000 },
		{ value: "above-10000", label: "Above PKR 10,000", min: 10001, max: Infinity }
	];
	const materialFilters = ["18K Gold Plated", "Sterling Silver", "Pearl", "Crystal"];
	const availabilityFilters = [
		{ value: "in-stock", label: "In Stock" },
		{ value: "out-of-stock", label: "Out of Stock" }
	];
	const whyShopBenefits = [
		{ number: "01", icon: "diamond", title: "QUALITY CRAFTSMANSHIP", description: "Every piece is selected with attention to detail, finish and lasting beauty." },
		{ number: "02", icon: "shield", title: "SECURE SHOPPING", description: "Enjoy a smooth and secure shopping experience from browsing to checkout." },
		{ number: "03", icon: "package", title: "FAST & CAREFUL DELIVERY", description: "Your jewellery is carefully packed and prepared for a safe journey to you." },
		{ number: "04", icon: "heart", title: "CUSTOMER CARE", description: "We're here to make your jewellery experience easy, personal and enjoyable." }
	];
	const customerReviews = [
		{ text: "The earrings were even more beautiful in person. The finishing is delicate and they looked absolutely gorgeous when I wore them.", name: "Ayesha K." },
		{ text: "I ordered a necklace for a special occasion and loved every detail. The packaging was beautiful and the piece felt so elegant.", name: "Sara M." },
		{ text: "Beautiful quality, elegant design and a very smooth shopping experience. I will definitely be coming back for more pieces.", name: "Hira A." }
	];
	const faqCategories = [
		{ title: "SHOPPING", questions: [
			{ question: "How can I place an order?", answer: "Browse our jewellery collection, open the product you love, select the required options, add it to your cart and proceed to checkout." },
			{ question: "Can I add multiple products to my cart?", answer: "Yes. You can add multiple pieces to your cart and review everything together before checkout." }
		] },
		{ title: "ORDERS", questions: [
			{ question: "Can I change my order after placing it?", answer: "If you need to make a change, please contact customer support as soon as possible. Changes may not be possible once an order has been processed." },
			{ question: "How can I check my order details?", answer: "After placing an order, your order confirmation page will display your order number and order details." }
		] },
		{ title: "SHIPPING & DELIVERY", questions: [
			{ question: "Do you offer free shipping?", answer: "Yes. Orders of PKR 5,000 or more qualify for free shipping. Orders below PKR 5,000 have a standard shipping charge." },
			{ question: "How long does delivery take?", answer: "Delivery time can vary depending on the destination and order processing. Your order details will provide the relevant delivery information." },
			{ question: "Do you deliver across Pakistan?", answer: "The website is currently designed for online ordering within Pakistan. Delivery availability may depend on the destination." }
		] },
		{ title: "RETURNS & EXCHANGES", questions: [
			{ question: "Can I return an item?", answer: "Returns and exchanges are subject to the applicable ELAN return policy. Please contact customer support before sending an item back." },
			{ question: "What should I do if my order arrives damaged?", answer: "Please contact customer support as soon as possible and provide your order details and clear photos of the damaged item and packaging." }
		] },
		{ title: "PRODUCT & CARE", questions: [
			{ question: "How should I care for my jewellery?", answer: "Keep jewellery away from water, perfumes, lotions and harsh chemicals. Store each piece in a clean, dry place when not in use." },
			{ question: "Will the colour of jewellery remain the same?", answer: "Jewellery finishes can naturally change over time depending on wear, moisture, chemicals and storage. Following the care instructions can help maintain its appearance." }
		] }
	];
	const footerColumns = [
		{ title: "SHOP", links: [{ label: "Shop All", href: "/shop" }, { label: "Collections", href: "/collections" }, { label: "Earrings", href: "/category/earrings" }, { label: "Rings", href: "/category/rings" }, { label: "Necklaces", href: "/category/necklaces" }, { label: "Bracelets", href: "/category/bracelets" }, { label: "Jewellery Sets", href: "/category/jewellery-sets" }] },
		{ title: "ABOUT", links: [{ label: "Our Story", href: "/about" }, { label: "Why ELAN", href: "/#why-shop-with-us" }, { label: "Customer Reviews", href: "/#reviews" }, { label: "Contact Us", href: "/contact" }] },
		{ title: "CUSTOMER CARE", links: [{ label: "Shipping & Delivery", href: "/shipping-delivery" }, { label: "Returns & Exchanges", href: "/returns-exchanges" }, { label: "FAQs", href: "/faq" }, { label: "Contact Support", href: "/contact" }] }
	];
	const footerInfoPages = {
		"/shipping-delivery": { eyebrow: "CUSTOMER CARE", title: "Shipping & Delivery", paragraphs: ["Complimentary standard delivery is available on orders above PKR 5,000. A delivery charge applies to orders below this amount.", "Orders are carefully prepared and typically arrive within 3–5 business days. Delivery times may vary by destination and during busy periods. Once your order is dispatched, keep your order details available when contacting customer care."] },
		"/returns-exchanges": { eyebrow: "CUSTOMER CARE", title: "Returns & Exchanges", paragraphs: ["If a piece is not quite right, contact ELAN customer care within 14 days of delivery to ask about a return or exchange. Items must be unused and returned in their original packaging.", "For a damaged or incorrect order, please get in touch as soon as possible with your order number and clear photographs. Our team will guide you through the next steps. Return eligibility is subject to inspection and applicable consumer requirements."] },
		"/contact": { eyebrow: "WE'RE HERE TO HELP", title: "Contact ELAN", paragraphs: ["Questions about a piece or an order? Get in touch with our customer care team.", "Demo contact details for this frontend: hello@elanjewellery.com · +92 300 0000000"] },
		"/privacy-policy": { eyebrow: "YOUR PRIVACY", title: "Privacy Policy", paragraphs: ["This website is a frontend demonstration. Your cart, wishlist and demo newsletter preferences are stored in your browser and are not sent to an external service by this page.", "Avoid entering sensitive personal or payment information. If this store is connected to live services, its operator should publish a complete privacy notice explaining what information is collected, how it is used, and how to contact the business about your data."] },
		"/terms-and-conditions": { eyebrow: "IMPORTANT INFORMATION", title: "Terms & Conditions", paragraphs: ["This website demonstrates the ELAN Jewellery shopping experience. Product availability, prices, delivery details and contact information displayed here are illustrative and may not represent a live offer.", "A completed purchase on this demo is stored locally in your browser and is not a payment transaction. Before operating a live store, the business should publish final terms covering orders, pricing, delivery, returns and applicable consumer protections."] }
	};
	const benefitIconPaths = {
		diamond: '<path d="m3 8 3.5-4h11L21 8l-9 12-9-12Z"></path><path d="M3 8h18M6.5 4 9 8l3 12 3-12 2.5-4"></path>',
		shield: '<path d="M12 3 19 6v5.2c0 4.4-2.8 7.8-7 9.8-4.2-2-7-5.4-7-9.8V6l7-3Z"></path><path d="m9 12 2 2 4-4"></path>',
		package: '<path d="m3 7 9-4 9 4v10l-9 4-9-4V7Z"></path><path d="m3.5 7.2 8.5 4 8.5-4M12 11.2V21M8 5.2l8.5 4"></path>',
		heart: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"></path><path d="M4 13H3v4h4v-4H4Zm16 0h1v4h-4v-4h3Z"></path><path d="M12 19h3"></path><path d="M12 8.2c-1.4-1.5-4-.3-2.5 1.6L12 12l2.5-2.2c1.5-1.9-1.1-3.1-2.5-1.6Z"></path>'
	};
	const catalogPageSize = 8;
	let catalogPaginationKey = "";
	let catalogVisibleCount = catalogPageSize;
	let catalogTotalCount = 0;
	let catalogRevealFrom = Infinity;
	const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;"
	})[character]);
	const readStorage = (key, fallback) => {
		try {
			const value = JSON.parse(localStorage.getItem(key));
			return value ?? fallback;
		} catch {
			return fallback;
		}
	};
	const writeStorage = (key, value) => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			if (key === "elan-cart") updateCartCount();
		} catch {
			return;
		}
	};
	const wishlistStorageKey = "elan-wishlist";
	const getWishlist = () => {
		const savedIds = readStorage(wishlistStorageKey, []);
		return Array.isArray(savedIds) ? savedIds : [];
	};
	const formatPrice = (price) => `PKR ${new Intl.NumberFormat("en-PK").format(price)}`;
	let toastTimer;

	const staticPages = new Map([
		["/", "index.html"],
		["/collections", "collections.html"],
		["/about", "about.html"],
		["/contact", "contact.html"],
		["/faq", "faq.html"],
		["/faqs", "faq.html"],
		["/cart", "cart.html"],
		["/checkout", "checkout.html"],
		["/order-confirmation", "order-confirmation.html"],
		["/shipping-delivery", "shipping-delivery.html"],
		["/returns-exchanges", "returns-exchanges.html"],
		["/privacy-policy", "privacy-policy.html"],
		["/terms-and-conditions", "terms-and-conditions.html"]
	]);
	const staticCatalogRoutes = new Set(["/shop", "/search", "/wishlist"]);
	const routeUrl = (path, params = new URLSearchParams(), hash = "") => {
		const normalizedPath = path.replace(/\/+$/, "") || "/";
		const query = new URLSearchParams(params);
		query.delete("route");
		let filename = staticPages.get(normalizedPath);
		if (staticCatalogRoutes.has(normalizedPath) || normalizedPath.startsWith("/category/") || normalizedPath.startsWith("/product/")) {
			filename = "products.html";
			query.set("route", normalizedPath);
		}
		const search = query.toString();
		return `./${filename || "products.html"}${search ? `?${search}` : ""}${hash}`;
	};
	const routeStateUrl = (path, params) => {
		if (window.location.protocol !== "file:") {
			const url = new URL(routeUrl(path, params), window.location.href);
			url.searchParams.set("route", path.replace(/\/+$/, "") || "/");
			return url;
		}
		const url = new URL(window.location.href);
		url.search = "";
		url.searchParams.set("route", path);
		for (const [key, value] of params) {
			if (key !== "route") url.searchParams.set(key, value);
		}
		return url;
	};
	const currentRoute = () => {
		const url = new URL(window.location.href);
		const documentRoute = document.querySelector('meta[name="elan-route"]')?.content;
		const path = url.searchParams.get("route") || documentRoute || url.pathname;
		const params = new URLSearchParams(url.searchParams);
		params.delete("route");
		return { path, params };
	};

	function rewriteInternalLinks() {
		document.querySelectorAll("a[href], form[action]").forEach((element) => {
			const attribute = element.matches("form") ? "action" : "href";
			const value = element.getAttribute(attribute);
			if (!value?.startsWith("/") || value.startsWith("//")) return;
			const target = new URL(value, window.location.href);
			element.setAttribute(attribute, routeUrl(target.pathname, target.searchParams, target.hash));
		});
	}

	const updateCartCount = () => {
		const cart = readStorage("elan-cart", []);
		const count = cart.reduce((total, item) => total + item.quantity, 0);
		const badge = document.querySelector(".cart-count");
		const cartLink = document.querySelector(".cart-link");
		if (badge) badge.textContent = String(count);
		if (cartLink) cartLink.setAttribute("aria-label", `Cart, ${count} ${count === 1 ? "item" : "items"}`);
	};

	function WishlistButton(product) {
		const savedIds = getWishlist();
		const isSaved = savedIds.includes(product.id);
		const label = isSaved ? "Remove from wishlist" : "Add to wishlist";
		return `<button class="catalog-wishlist${isSaved ? " is-saved" : ""}" type="button" data-wishlist="${escapeHtml(product.id)}" aria-label="${label}: ${escapeHtml(product.name)}" aria-pressed="${isSaved}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 8.8c0 4.2-8.2 10-8.2 10s-8.2-5.8-8.2-10a4.3 4.3 0 0 1 8.2-1.7 4.3 4.3 0 0 1 8.2 1.7Z"></path></svg></button>`;
	}

	function BestSellersSection() {
		const markedBestSellers = store.products.filter((product) => product.isBestSeller || product.badge === "Bestseller");
		const preferredCategories = ["earrings", "rings", "necklaces", "bracelets"];
		const selectedProducts = preferredCategories.map((category) => markedBestSellers.find((product) => product.category === category)).filter(Boolean);
		for (const product of markedBestSellers) {
			if (selectedProducts.length >= 4) break;
			if (!selectedProducts.includes(product)) selectedProducts.push(product);
		}
		return `<section class="best-sellers-section" aria-labelledby="best-sellers-title"><div class="categories-inner"><header class="categories-intro best-sellers-intro"><p class="categories-eyebrow">MOST LOVED</p><h2 class="categories-title" id="best-sellers-title">Best Sellers</h2><p class="categories-description">Discover the pieces our customers keep coming back for.</p></header><div class="catalog-product-grid best-sellers-grid">${selectedProducts.slice(0, 4).map(ProductCard).join("")}</div><div class="best-sellers-footer"><a class="best-sellers-view-all" href="/shop">VIEW ALL JEWELLERY <span aria-hidden="true">→</span></a></div></div></section>`;
	}

	function FeaturedCollectionCard(collection) {
		const product = store.products.find((item) => item.category === collection.imageCategory && item.collections?.includes(collection.slug)) || store.products.find((item) => item.collections?.includes(collection.slug));
		if (!product) return "";
		return `<a class="featured-collection-card" href="/shop?collection=${encodeURIComponent(collection.slug)}" aria-label="Explore ${escapeHtml(collection.title)} collection"><img class="featured-collection-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} styled for the ${escapeHtml(collection.title)} collection" loading="lazy" decoding="async"><span class="featured-collection-overlay" aria-hidden="true"></span><span class="featured-collection-content"><span class="featured-collection-accent"></span><h3>${escapeHtml(collection.title)}</h3><p>${escapeHtml(collection.description)}</p><span class="featured-collection-link">EXPLORE COLLECTION <span aria-hidden="true">→</span></span></span></a>`;
	}

	function FeaturedCollectionsSection() {
		const collections = store.collections || [];
		return `<section class="featured-collections-section" aria-labelledby="featured-collections-title"><div class="categories-inner"><header class="categories-intro featured-collections-intro"><p class="categories-eyebrow">CURATED FOR YOU</p><h2 class="categories-title" id="featured-collections-title">Featured Collections</h2><p class="categories-description">Explore thoughtfully curated collections designed for every mood, moment and occasion.</p></header><div class="featured-collections-grid">${collections.map(FeaturedCollectionCard).join("")}</div></div></section>`;
	}

	function BenefitCard(benefit) {
		return `<article class="why-shop-benefit"><div class="why-shop-benefit-top"><span class="why-shop-number">${benefit.number}</span><span class="why-shop-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${benefitIconPaths[benefit.icon]}</svg></span></div><h3>${benefit.title}</h3><p>${benefit.description}</p></article>`;
	}

	function WhyShopSection() {
		return `<section class="why-shop-section" id="why-shop-with-us" aria-labelledby="why-shop-title"><div class="categories-inner"><header class="categories-intro why-shop-intro"><p class="categories-eyebrow">THE ELAN PROMISE</p><h2 class="categories-title" id="why-shop-title">Why Shop With Us</h2><p class="categories-description">Beautiful jewellery, thoughtfully chosen and made to become part of your story.</p></header><div class="why-shop-grid">${whyShopBenefits.map(BenefitCard).join("")}</div></div></section>`;
	}

	function BrandStorySection() {
		return `<section class="brand-story-section" aria-labelledby="brand-story-title"><div class="brand-story-inner"><div class="brand-story-media"><img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1100&h=1250&q=88" alt="A timeless gold necklace worn in soft, warm studio light" loading="lazy" decoding="async"><span class="brand-story-image-note">ELAN, WORN YOUR WAY</span></div><div class="brand-story-copy"><p class="brand-story-eyebrow"><span aria-hidden="true"></span>THE ELAN STORY</p><h2 id="brand-story-title">Jewellery That Becomes Part of Your Story</h2><p>At ELAN, we believe jewellery is more than an accessory. It is a reflection of the moments, memories and confidence that make you who you are.</p><p>From timeless everyday pieces to statement designs, our collection is thoughtfully curated for women who appreciate elegance, individuality and effortless style.</p><a class="brand-story-button" href="/about">DISCOVER OUR STORY <span aria-hidden="true">→</span></a></div></div></section>`;
	}

	function CustomerReviewCard(review) {
		return `<article class="customer-review-card"><span class="customer-review-mark" aria-hidden="true">“</span><div class="customer-review-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>${escapeHtml(review.text)}</blockquote><div class="customer-review-author"><strong>— ${escapeHtml(review.name)}</strong><span>VERIFIED PURCHASE</span></div></article>`;
	}

	function CustomerReviewsSection() {
		return `<section class="customer-reviews-section" id="reviews" aria-labelledby="customer-reviews-title"><div class="customer-reviews-inner"><header class="categories-intro customer-reviews-intro"><p class="categories-eyebrow">LOVED BY OUR CUSTOMERS</p><h2 class="categories-title" id="customer-reviews-title">What Our Customers Say</h2><p class="categories-description">Real words from customers who found a little extra elegance with ELAN.</p><div class="customer-review-summary"><span class="customer-review-summary-stars" aria-hidden="true">★★★★★</span><strong>4.9 out of 5</strong><span>Based on 120+ reviews</span></div></header><div class="customer-reviews-grid">${customerReviews.map(CustomerReviewCard).join("")}</div></div></section>`;
	}

	function NewsletterSection() {
		return `<section class="newsletter-section" aria-labelledby="newsletter-title"><div class="newsletter-inner"><span class="newsletter-diamond" aria-hidden="true">◇</span><p class="newsletter-eyebrow">STAY IN THE KNOW</p><h2 id="newsletter-title">A Little More ELAN</h2><p class="newsletter-description">Subscribe for new collections, exclusive offers and a little inspiration, delivered straight to your inbox.</p><form class="newsletter-form" id="newsletter-form" novalidate><label class="visually-hidden" for="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" autocomplete="email" placeholder="Enter your email address" aria-describedby="newsletter-message newsletter-privacy"><button type="submit">SUBSCRIBE <span aria-hidden="true">→</span></button></form><p class="newsletter-message" id="newsletter-message" role="status" aria-live="polite"></p><p class="newsletter-privacy" id="newsletter-privacy">By subscribing, you agree to receive updates from ELAN Jewellery.</p></div></section>`;
	}

	function FooterLinkColumn(column) {
		return `<section class="site-footer-column"><h2>${escapeHtml(column.title)}</h2><ul>${column.links.map((link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`).join("")}</ul></section>`;
	}

	function FooterSection() {
		const socialLinks = [
			{ name: "Instagram", href: "https://www.instagram.com/", icon: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.6" cy="6.8" r=".7" fill="currentColor" stroke="none"></circle>' },
			{ name: "Facebook", href: "https://www.facebook.com/", icon: '<path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.2V10H8v3h2.6v8H14Z"></path>' },
			{ name: "Pinterest", href: "https://www.pinterest.com/", icon: '<path d="M12 21a9 9 0 1 0-3.2-.6l1.4-5.8s.2.4.7.8c.7.5 1.7.8 2.8.6 2.7-.5 4.5-2.5 4.5-5.7 0-2.7-2.3-5.1-5.9-5.1-4.4 0-6.7 3.2-6.7 6 0 1.7.7 3.2 2.1 3.8.2.1.5 0 .6-.3l.2-.8c.1-.3.1-.4-.2-.7-.4-.5-.7-1.1-.7-2 0-2.6 1.9-4.9 5-4.9 2.7 0 4.2 1.6 4.2 3.8 0 2.9-1.3 5.3-3.3 5.3-1.1 0-2-1-1.7-2.1.3-1.4 1-2.9 1-3.9 0-.9-.5-1.6-1.4-1.6-1.1 0-1.9 1.1-1.9 2.5 0 .9.3 1.5.3 1.5l-1.2 5.1C8.3 18 8.2 19.5 8.5 20.7A9 9 0 0 0 12 21Z"></path>' }
		];
		return `<footer class="site-footer"><div class="site-footer-inner">
			<section class="site-footer-cta"><p class="site-footer-eyebrow">DISCOVER YOUR NEXT PIECE</p><p>Find something beautiful to keep close.</p><a class="site-footer-shop-link" href="/shop">SHOP JEWELLERY <span aria-hidden="true">→</span></a></section>
			<div class="site-footer-brand"><a class="site-footer-logo" href="/" aria-label="ELAN Jewellery home">ELAN</a><p>Timeless jewellery for every story, every moment.</p><div class="site-footer-contact"><span>DEMO CONTACT DETAILS</span><a href="mailto:hello@elanjewellery.com">hello@elanjewellery.com</a><a href="tel:+923000000000">+92 300 0000000</a></div></div>
			<div class="site-footer-main">${footerColumns.map(FooterLinkColumn).join("")}<section class="site-footer-column site-footer-social"><h2>FOLLOW US</h2><p>Follow ELAN</p><div class="site-footer-social-links">${socialLinks.map((social) => `<a href="${social.href}" target="_blank" rel="noopener noreferrer" aria-label="ELAN on ${social.name}" title="${social.name}"><svg viewBox="0 0 24 24" aria-hidden="true">${social.icon}</svg></a>`).join("")}</div></section></div>
			<div class="site-footer-trust">SECURE SHOPPING <span aria-hidden="true">•</span> CAREFULLY PACKED <span aria-hidden="true">•</span> CUSTOMER CARE</div>
			<div class="site-footer-bottom"><p>© 2026 ELAN Jewellery. All rights reserved.</p><nav aria-label="Legal"><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a></nav></div>
		</div></footer>`;
	}

	function ensureFooter() {
		if (document.querySelector(".site-footer")) return;
		main.insertAdjacentHTML("afterend", FooterSection());
	}

	function FooterInfoPage(page) {
		return `<section class="footer-info-page"><div class="footer-info-inner"><nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(page.title)}</span></nav><header><p class="brand-story-eyebrow"><span aria-hidden="true"></span>${escapeHtml(page.eyebrow)}</p><h1>${escapeHtml(page.title)}</h1></header><div class="footer-info-copy">${page.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div><p class="footer-info-demo">Demo contact details: <a href="mailto:hello@elanjewellery.com">hello@elanjewellery.com</a> · <a href="tel:+923000000000">+92 300 0000000</a></p><a class="brand-story-button" href="/shop">SHOP JEWELLERY <span aria-hidden="true">→</span></a></div></section>`;
	}

	function AboutPage() {
		return `<section class="about-page"><div class="about-page-inner"><nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Our Story</span></nav><header class="about-page-intro"><p class="brand-story-eyebrow"><span aria-hidden="true"></span>THE ELAN STORY</p><h1>Jewellery That Becomes Part of Your Story</h1><p>Thoughtfully chosen pieces for the moments, memories and confidence that make you who you are.</p></header><section class="about-editorial about-editorial-story"><div class="about-editorial-image"><img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1100&h=1250&q=88" alt="A fine gold necklace styled in warm, natural light" loading="lazy" decoding="async"></div><div class="about-editorial-copy"><p class="brand-story-eyebrow"><span aria-hidden="true"></span>OUR STORY</p><h2>Made for the Moments That Matter</h2><p>At ELAN, we believe jewellery is more than an accessory. It is a reflection of the moments, memories and confidence that make you who you are.</p><p>From timeless everyday pieces to statement designs, our collection is thoughtfully curated for women who appreciate elegance, individuality and effortless style.</p></div></section><section class="about-editorial about-editorial-philosophy"><div class="about-editorial-copy"><p class="brand-story-eyebrow"><span aria-hidden="true"></span>OUR PHILOSOPHY</p><h2>Elegance, Made Personal</h2><p>We choose pieces that feel considered, versatile and distinctly yours. Jewellery should meet you in everyday rituals and stay close through the occasions worth remembering.</p><p>Our edit brings together quiet essentials and expressive designs, so finding a piece that feels like you is always part of the pleasure.</p></div><div class="about-editorial-image"><img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1100&h=1250&q=88" alt="Delicate gold jewellery arranged with an editorial feel" loading="lazy" decoding="async"></div></section><section class="about-craftsmanship"><p class="brand-story-eyebrow"><span aria-hidden="true"></span>THOUGHTFULLY CHOSEN</p><h2>Quality in Every Detail</h2><p>We look closely at finish, feel and the small details that make a piece a lasting part of your collection. Each design is selected to bring beauty to your day, and care to the way it is presented and delivered.</p></section><div class="about-page-cta"><a class="brand-story-button" href="/shop">SHOP JEWELLERY <span aria-hidden="true">→</span></a></div></div></section>`;
	}

	function FAQCategoryMarkup(category, categoryIndex) {
		const questions = category.questions.map((item, questionIndex) => {
			const answerId = `faq-answer-${categoryIndex}-${questionIndex}`;
			const searchText = `${category.title} ${item.question} ${item.answer}`;
			return `<article class="faq-item" data-faq-item data-faq-search="${escapeHtml(searchText)}"><h3><button class="faq-question" type="button" data-faq-question aria-expanded="false" aria-controls="${answerId}"><span>${escapeHtml(item.question)}</span><span class="faq-toggle-icon" aria-hidden="true"></span></button></h3><div class="faq-answer" id="${answerId}" inert><div class="faq-answer-inner"><p>${escapeHtml(item.answer)}</p></div></div></article>`;
		}).join("");
		return `<section class="faq-category" aria-labelledby="faq-category-${categoryIndex}"><h2 id="faq-category-${categoryIndex}">${escapeHtml(category.title)}</h2><div class="faq-items">${questions}</div></section>`;
	}

	function FAQPage() {
		return `<section class="faq-page" aria-labelledby="faq-title"><div class="faq-page-inner">
			<nav class="catalog-breadcrumbs faq-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">FAQs</span></nav>
			<header class="faq-header"><p class="faq-eyebrow">NEED TO KNOW</p><h1 id="faq-title">Frequently Asked Questions</h1><p>Everything you need to know about shopping with ELAN Jewellery.</p></header>
			<label class="faq-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m15.5 15.5 4.2 4.2"></path></svg><input id="faq-search-input" type="search" placeholder="Search questions..." autocomplete="off" aria-label="Search questions"></label>
			<div class="faq-list" id="faq-list">${faqCategories.map(FAQCategoryMarkup).join("")}</div>
			<div class="faq-empty" id="faq-empty" role="status" aria-live="polite" hidden><h2>NO QUESTIONS FOUND</h2><p>Try searching with a different keyword.</p></div>
			<aside class="faq-contact-cta"><div><p>STILL HAVE QUESTIONS?</p><h2>We're happy to help.</h2></div><a href="/contact">CONTACT US <span aria-hidden="true">→</span></a></aside>
		</div></section>`;
	}

	function CollectionsPage() {
		const collectionRows = store.collections.map((collection, index) => {
			const product = store.products.find((item) => item.category === collection.imageCategory && item.collections?.includes(collection.slug))
				|| store.products.find((item) => item.collections?.includes(collection.slug));
			const imageAlt = product ? `${collection.title.toLocaleLowerCase()} jewellery` : `${collection.title.toLocaleLowerCase()} collection`;
			return `<article class="collection-editorial-row${index % 2 ? " is-reversed" : ""}">
				<div class="collection-editorial-image"><img src="${escapeHtml(product?.image || "")}" alt="${escapeHtml(imageAlt)}" loading="lazy" decoding="async"></div>
				<div class="collection-editorial-copy"><p class="collection-editorial-index">0${index + 1} <span></span> ELAN COLLECTION</p><h2>${escapeHtml(collection.title)}</h2><p>${escapeHtml(collection.description)}</p><a class="collection-editorial-button" href="/shop?collection=${encodeURIComponent(collection.slug)}">EXPLORE COLLECTION <span aria-hidden="true">→</span></a></div>
			</article>`;
		}).join("");
		return `<section class="collections-page" aria-labelledby="collections-title"><div class="collections-page-inner">
			<nav class="catalog-breadcrumbs collections-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Collections</span></nav>
			<header class="collections-page-header"><p>THE ELAN EDIT</p><h1 id="collections-title">Our Collections</h1><span>Explore thoughtfully curated jewellery collections designed to complement every style, mood and moment.</span></header>
			<div class="collections-editorial-list">${collectionRows}</div>
			<aside class="collections-bottom-cta"><p>FIND YOUR NEXT PIECE</p><h2>Explore the complete ELAN Jewellery collection.</h2><a href="/shop">SHOP ALL JEWELLERY <span aria-hidden="true">→</span></a></aside>
		</div></section>`;
	}

	function initializeCollectionsPage() {
		const rows = [...main.querySelectorAll(".collection-editorial-row")];
		if (!("IntersectionObserver" in window)) {
			rows.forEach((row) => row.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add("is-visible");
			observer.unobserve(entry.target);
		}), { threshold: 0.12 });
		rows.forEach((row) => observer.observe(row));
	}

	function initializeFAQPage() {
		const list = main.querySelector("#faq-list");
		const search = main.querySelector("#faq-search-input");
		const emptyState = main.querySelector("#faq-empty");
		if (!list || !search || !emptyState) return;
		const setOpen = (item, open) => {
			const button = item.querySelector("[data-faq-question]");
			const answer = item.querySelector(".faq-answer");
			item.classList.toggle("is-open", open);
			button.setAttribute("aria-expanded", String(open));
			if (open) answer.removeAttribute("inert");
			else answer.setAttribute("inert", "");
		};
		list.addEventListener("click", (event) => {
			const button = event.target.closest("[data-faq-question]");
			if (!button) return;
			const item = button.closest("[data-faq-item]");
			const shouldOpen = button.getAttribute("aria-expanded") !== "true";
			list.querySelectorAll(".faq-item.is-open").forEach((openItem) => setOpen(openItem, false));
			if (shouldOpen) setOpen(item, true);
		});
		search.addEventListener("input", () => {
			const query = search.value.trim().toLocaleLowerCase();
			let visibleCount = 0;
			list.querySelectorAll(".faq-category").forEach((category) => {
				let categoryHasMatches = false;
				category.querySelectorAll("[data-faq-item]").forEach((item) => {
					const matches = !query || item.dataset.faqSearch.toLocaleLowerCase().includes(query);
					item.hidden = !matches;
					if (matches) {
						categoryHasMatches = true;
						visibleCount += 1;
					} else if (item.classList.contains("is-open")) {
						setOpen(item, false);
					}
				});
				category.hidden = !categoryHasMatches;
			});
			emptyState.hidden = visibleCount > 0;
		});
	}

	function ContactPage() {
		return `<section class="contact-page" aria-labelledby="contact-title">
			<div class="contact-page-inner">
				<nav class="catalog-breadcrumbs contact-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Contact</span></nav>
				<header class="contact-intro contact-reveal"><p class="contact-eyebrow">WE'D LOVE TO HEAR FROM YOU</p><h1 id="contact-title">Get In Touch</h1><p>Have a question about an order, a product or anything ELAN? We're here to help.</p></header>
				<div class="contact-columns">
					<section class="contact-information" aria-labelledby="contact-information-title">
						<div class="contact-information-copy contact-reveal"><p class="contact-overline">LET'S TALK</p><h2 id="contact-information-title">A note from you<br>is always welcome.</h2><div class="contact-care"><h3>CUSTOMER CARE</h3><p>We're happy to help with questions about products, orders, shipping and returns.</p></div>
							<div class="contact-detail-grid"><div class="contact-detail"><h3>EMAIL</h3><a href="mailto:hello@elanjewellery.com">hello@elanjewellery.com</a></div><div class="contact-detail"><h3>PHONE</h3><a href="tel:+923000000000">+92 300 0000000</a></div><div class="contact-detail contact-hours"><h3>CUSTOMER CARE HOURS</h3><p>Monday – Saturday<br>10:00 AM – 6:00 PM</p></div></div>
							<p class="contact-demo-note">Demo frontend contact details. These are illustrative and are not verified business information.</p>
						</div>
						<figure class="contact-editorial-image contact-reveal"><img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&h=900&q=88" alt="Gold jewellery styled in soft, natural studio light" loading="lazy" decoding="async"></figure>
					</section>
					<section class="contact-form-panel" aria-labelledby="contact-form-title"><div class="contact-form-heading"><p class="contact-overline">WE'RE LISTENING</p><h2 id="contact-form-title">How can we help?</h2></div>
						<form class="contact-form" id="contact-form" novalidate>
							<div class="contact-field"><label for="contact-name">Full Name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" type="text" autocomplete="name" placeholder="Enter your name" required aria-describedby="contact-name-error"><p class="contact-field-error" id="contact-name-error"></p></div>
							<div class="contact-field"><label for="contact-email">Email Address <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required aria-describedby="contact-email-error"><p class="contact-field-error" id="contact-email-error"></p></div>
							<div class="contact-field"><label for="contact-phone">Phone Number</label><input id="contact-phone" name="phone" type="tel" autocomplete="tel" placeholder="03XX XXXXXXX"></div>
							<div class="contact-field"><label for="contact-subject">Subject <span aria-hidden="true">*</span></label><input id="contact-subject" name="subject" type="text" placeholder="How can we help?" required aria-describedby="contact-subject-error"><p class="contact-field-error" id="contact-subject-error"></p></div>
							<div class="contact-field contact-message-field"><label for="contact-message">Message <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows="5" placeholder="Write your message here..." required aria-describedby="contact-message-error"></textarea><p class="contact-field-error" id="contact-message-error"></p></div>
							<button class="contact-submit" type="submit">SEND MESSAGE <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"></path></svg></button>
							<p class="contact-success" id="contact-success" role="status" aria-live="polite" tabindex="-1" hidden><span class="contact-success-title">MESSAGE SENT</span><span>Thank you for reaching out to ELAN. We'll get back to you shortly.</span></p>
						</form>
					</section>
				</div>
				<nav class="contact-methods" aria-label="Other ways to reach us"><a class="contact-method" href="mailto:hello@elanjewellery.com"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"></rect><path d="m4 7 8 6 8-6"></path></svg><span><span class="contact-method-label">EMAIL US</span><span>hello@elanjewellery.com</span></span></a><a class="contact-method" href="tel:+923000000000"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10 19 5 14 5 5c0-1.1.9-2 2-2Z"></path></svg><span><span class="contact-method-label">CALL US</span><span>+92 300 0000000</span></span></a><a class="contact-method" href="https://www.instagram.com/elanjewellery/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.7" r=".7"></circle></svg><span><span class="contact-method-label">INSTAGRAM</span><span>@elanjewellery</span></span></a></nav>
				<div class="contact-studio"><span class="contact-studio-mark" aria-hidden="true">◇</span><div><h2>ONLINE JEWELLERY STUDIO</h2><p>Serving jewellery lovers online.</p></div></div>
			</div>
		</section>`;
	}

	function initializeContactPage() {
		const form = main.querySelector("#contact-form");
		if (!form) return;
		const fields = ["name", "email", "subject", "message"].map((name) => form.elements.namedItem(name));
		const validateField = (field) => {
			const value = field.value.trim();
			let message = "";
			if (!value) message = `Please enter your ${field.name === "name" ? "full name" : field.name === "email" ? "email address" : field.name}.`;
			else if (field.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Please enter a valid email address.";
			const error = form.querySelector(`#contact-${field.name}-error`);
			if (error) error.textContent = message;
			field.setAttribute("aria-invalid", String(Boolean(message)));
			return !message;
		};
		fields.forEach((field) => field.addEventListener("input", () => {
			if (field.getAttribute("aria-invalid") === "true") validateField(field);
		}));
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			if (!fields.map(validateField).every(Boolean)) {
				form.querySelector('[aria-invalid="true"]')?.focus();
				return;
			}
			const submission = Object.fromEntries(new FormData(form).entries());
			submission.submittedAt = new Date().toISOString();
			const savedSubmissions = readStorage("elan-contact-submissions", []);
			writeStorage("elan-contact-submissions", [...(Array.isArray(savedSubmissions) ? savedSubmissions : []), submission]);
			form.reset();
			fields.forEach((field) => field.removeAttribute("aria-invalid"));
			form.querySelector("#contact-success").hidden = false;
			form.querySelector("#contact-success").focus();
		});
		const revealItems = [...main.querySelectorAll(".contact-reveal, .contact-field, .contact-submit")];
		if (!("IntersectionObserver" in window)) {
			revealItems.forEach((item) => item.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add("is-visible");
			observer.unobserve(entry.target);
		}), { threshold: 0.12 });
		revealItems.forEach((item) => observer.observe(item));
	}

	function observeHomeSection(selector) {
		const section = main.querySelector(selector);
		if (!section) return;
		if (!("IntersectionObserver" in window)) {
			section.classList.add("is-visible");
			return;
		}
		section.classList.add("has-reveal");
		let observer;
		const revealWhenVisible = () => {
			const rect = section.getBoundingClientRect();
			if (rect.top >= window.innerHeight || rect.bottom <= 0) return;
			section.classList.add("is-visible");
			observer?.disconnect();
			window.removeEventListener("scroll", revealWhenVisible);
			window.removeEventListener("resize", revealWhenVisible);
		};
		observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				revealWhenVisible();
			}
		}, { threshold: 0.12 });
		observer.observe(section);
		window.addEventListener("scroll", revealWhenVisible, { passive: true });
		window.addEventListener("resize", revealWhenVisible, { passive: true });
		revealWhenVisible();
	}

	function AddToCartButton(product) {
		return `<button class="catalog-add-button" type="button" data-add-to-cart="${escapeHtml(product.id)}"${product.available ? "" : " disabled"}>${product.available ? "ADD TO CART" : "OUT OF STOCK"}</button>`;
	}

	function ProductCard(product, extraClass = "") {
		const badge = product.badge ? `<span class="catalog-product-badge">${escapeHtml(product.badge)}</span>` : "";
		const stock = product.available ? "" : '<span class="catalog-stock-status">Currently unavailable</span>';
		return `<article class="catalog-product-card${extraClass ? ` ${extraClass}` : ""}" data-product-slug="${escapeHtml(product.slug)}" tabindex="0" aria-label="View ${escapeHtml(product.name)}">
			<div class="catalog-product-image-wrap">
				<img class="catalog-product-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">
				${badge}${WishlistButton(product)}
			</div>
			<div class="catalog-product-details">
				<h2 class="catalog-product-name">${escapeHtml(product.name)}</h2>
				<p class="catalog-product-description">${escapeHtml(product.shortDescription || product.description)}</p>
				<div class="catalog-rating" aria-label="Rated ${product.rating} out of 5">
					<span class="catalog-stars" aria-hidden="true">★★★★★</span>
					<span class="catalog-review-count">(${product.reviewCount})</span>
				</div>
				<p class="catalog-product-price">${formatPrice(product.price)}</p>
				${stock}${AddToCartButton(product)}
			</div>
		</article>`;
	}

	function ProductGrid(products, gridClass = "", revealFrom = Infinity) {
		if (!products.length) {
			return `<div class="catalog-empty-state"><p>No products found in this collection.</p><a class="catalog-empty-link" href="/shop">EXPLORE ALL JEWELLERY <span aria-hidden="true">→</span></a></div>`;
		}
		return `<div class="catalog-product-grid${gridClass ? ` ${gridClass}` : ""}">${products.map((product, index) => ProductCard(product, index >= revealFrom ? "catalog-card-reveal" : "")).join("")}</div>`;
	}

	function buildCatalogPaginationKey(path, params) {
		const cleanParams = new URLSearchParams(params);
		cleanParams.delete("route");
		return `${path}?${cleanParams.toString()}`;
	}

	function PaginatedProductGrid(products, key, emptyMarkup) {
		if (!products.length) return emptyMarkup;
		if (key !== catalogPaginationKey) {
			catalogPaginationKey = key;
			catalogVisibleCount = catalogPageSize;
			catalogRevealFrom = Infinity;
		}
		catalogTotalCount = products.length;
		const visibleCount = Math.min(catalogVisibleCount, catalogTotalCount);
		const visibleProducts = products.slice(0, visibleCount);
		const endControl = visibleCount < catalogTotalCount
			? `<button class="catalog-load-more" type="button" data-load-more>LOAD MORE</button>`
			: `<p class="catalog-all-discovered">YOU'VE DISCOVERED ALL OUR PIECES</p>`;
		return `<div class="catalog-paginated-results"><p class="catalog-visible-count">Showing ${visibleCount} of ${catalogTotalCount} pieces</p>${ProductGrid(visibleProducts, "", catalogRevealFrom)}<div class="catalog-pagination-control">${endControl}</div></div>`;
	}

	function searchProducts(query) {
		const normalizedQuery = query.trim().toLocaleLowerCase();
		if (!normalizedQuery) return [];
		const queryTerms = normalizedQuery.match(/[\p{L}\p{N}]+/gu) || [];
		if (!queryTerms.length) return [];
		return store.products.filter((product) => {
			const category = categoryBySlug.get(product.category);
			const searchableText = [
				product.name,
				product.category,
				category?.name,
				product.shortDescription,
				product.description,
				product.material,
				...(Array.isArray(product.tags) ? product.tags : [product.tags]),
				...(Array.isArray(product.keywords) ? product.keywords : [product.keywords])
			].filter(Boolean).join(" ").toLocaleLowerCase();
			const searchableWords = searchableText.match(/[\p{L}\p{N}]+/gu) || [];
			return queryTerms.every((term) => searchableWords.some((word) => word.startsWith(term) || term.startsWith(word)));
		});
	}

	function renderSearchSuggestions(query) {
		const searchBody = document.querySelector("#search-dialog-body");
		const clearButton = document.querySelector(".search-clear");
		if (!searchBody || !clearButton) return;
		const normalizedQuery = query.trim();
		clearButton.hidden = !normalizedQuery;
		if (!normalizedQuery) {
			searchBody.innerHTML = `<section class="popular-searches" aria-labelledby="popular-searches-title"><h2 id="popular-searches-title">POPULAR SEARCHES</h2><div class="popular-search-list"><button type="button" data-search-suggestion="Earrings">Earrings</button><button type="button" data-search-suggestion="Rings">Rings</button><button type="button" data-search-suggestion="Necklaces">Necklaces</button><button type="button" data-search-suggestion="Bracelets">Bracelets</button><button type="button" data-search-suggestion="Jewellery Sets">Jewellery Sets</button></div></section>`;
			return;
		}
		const matches = searchProducts(normalizedQuery);
		const resultContent = matches.length
			? ProductGrid(matches.slice(0, 4), "search-live-product-grid")
			: `<p class="search-live-empty">NO MATCHING PIECES</p>`;
		searchBody.innerHTML = `<div class="search-result-toolbar"><p>${matches.length} ${matches.length === 1 ? "PIECE" : "PIECES"} FOUND</p><a class="search-view-all" href="/search?q=${encodeURIComponent(normalizedQuery)}">VIEW ALL RESULTS <span aria-hidden="true">→</span></a></div>${resultContent}`;
	}

	function CategoryFilter(activeSlug) {
		const links = [{ slug: "", name: "All" }, ...store.categories];
		return `<nav class="catalog-filters" aria-label="Filter products by category">${links.map((category) => {
			const href = category.slug ? `/category/${category.slug}` : "/shop";
			const active = (category.slug || "") === (activeSlug || "");
			return `<a class="catalog-filter${active ? " is-active" : ""}" href="${href}"${active ? ' aria-current="page"' : ""}>${escapeHtml(category.name)}</a>`;
		}).join("")}</nav>`;
	}

	function SortDropdown(selected) {
		const options = [
			["featured", "Featured"],
			["newest", "Newest"],
			["price-low", "Price: Low to High"],
			["price-high", "Price: High to Low"],
			["rating", "Rating: High to Low"],
			["name", "Name: A–Z"]
		];
		return `<label class="catalog-sort-label">SORT BY<select class="catalog-sort" data-catalog-sort>${options.map(([value, label]) => `<option value="${value}"${value === selected ? " selected" : ""}>${label}</option>`).join("")}</select></label>`;
	}

	function filterValues(params, key) {
		return (params.get(key) || "").split(",").map((value) => value.trim()).filter(Boolean);
	}

	function FilterOptions(title, key, options, selected = [], type = "checkbox", groupSuffix = "") {
		const selectedValues = new Set(selected);
		return `<fieldset class="catalog-filter-group"><legend>${title}</legend>${options.map((option) => `<label class="catalog-filter-option"><input type="${type}" name="${key}${groupSuffix}" data-filter="${key}" value="${escapeHtml(option.value)}"${selectedValues.has(option.value) ? " checked" : ""}><span>${escapeHtml(option.label)}</span></label>`).join("")}</fieldset>`;
	}

	function FilterPanel(state, fixedCategory = null, isMobile = false) {
		const categoryOptions = fixedCategory
			? `<fieldset class="catalog-filter-group"><legend>CATEGORY</legend>${store.categories.map((item) => `<a class="catalog-category-option${item.slug === fixedCategory.slug ? " is-current" : ""}" href="/category/${escapeHtml(item.slug)}"${item.slug === fixedCategory.slug ? ' aria-current="page"' : ""}>${escapeHtml(item.name)}</a>`).join("")}<a class="catalog-category-reset" href="/shop">All Jewellery</a></fieldset>`
			: FilterOptions("CATEGORY", "category", store.categories.map(({ slug, name }) => ({ value: slug, label: name })), state.categories);
		return `<div class="catalog-filter-groups">${categoryOptions}${FilterOptions("PRICE RANGE", "price", priceRanges, state.price ? [state.price] : [], "radio", isMobile ? "-mobile" : "")}${FilterOptions("MATERIAL", "material", materialFilters.map((value) => ({ value, label: value })), state.materials)}${FilterOptions("AVAILABILITY", "availability", availabilityFilters, state.availability)}</div>`;
	}

	function getCatalogFilterState(path, params) {
		const match = path.match(/^\/category\/([^/]+)\/?$/);
		const fixedCategory = match ? categoryBySlug.get(decodeURIComponent(match[1])) : null;
		return {
			fixedCategory,
			categories: fixedCategory ? [fixedCategory.slug] : filterValues(params, "category"),
				collection: params.get("collection") || "",
			price: params.get("price") || "",
			materials: filterValues(params, "material"),
			availability: filterValues(params, "availability"),
			sort: params.get("sort") || "featured"
		};
	}

	function ActiveFilterChips(state) {
		const chips = [];
		const collection = collectionBySlug.get(state.collection);
		if (collection) chips.push({ type: "collection", value: collection.slug, label: collection.title });
		if (state.fixedCategory) {
			chips.push({ type: "category-route", value: state.fixedCategory.slug, label: state.fixedCategory.name });
		} else {
			state.categories.forEach((slug) => {
				const category = categoryBySlug.get(slug);
				if (category) chips.push({ type: "category", value: slug, label: category.name });
			});
		}
		const price = priceRanges.find((range) => range.value === state.price);
		if (price) chips.push({ type: "price", value: price.value, label: price.label });
		state.materials.forEach((material) => {
			if (materialFilters.includes(material)) chips.push({ type: "material", value: material, label: material });
		});
		state.availability.forEach((value) => {
			const option = availabilityFilters.find((filter) => filter.value === value);
			if (option) chips.push({ type: "availability", value, label: option.label });
		});
		if (!chips.length) return "";
		return `<div class="catalog-active-filters" aria-label="Active filters">${chips.map((chip) => `<button class="catalog-filter-chip" type="button" data-remove-filter="${chip.type}" data-value="${escapeHtml(chip.value)}">${escapeHtml(chip.label)} <span aria-hidden="true">&times;</span></button>`).join("")}<button class="catalog-clear-filters" type="button" data-clear-filters>CLEAR ALL</button></div>`;
	}

	function CategoryHeader(category, count, query, collectionSlug = "") {
		const collection = collectionBySlug.get(collectionSlug);
		const categoryName = category ? category.name : collection?.title || "All Jewellery";
		const description = category ? category.description : collection?.description || "Explore considered pieces designed to become part of your everyday story.";
		const heading = query ? "Search Results" : categoryName;
		const supportingCopy = query ? `Showing matches for “${escapeHtml(query)}”.` : description;
		const crumb = category ? category.name : query ? "Search Results" : collection?.title || "All Jewellery";
		return `<nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/shop">Shop</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(crumb)}</span></nav>
			<header class="catalog-header"><p class="catalog-brand-label">ELAN JEWELLERY</p><h1 class="catalog-heading">${escapeHtml(heading)}</h1><p class="catalog-description">${supportingCopy}</p><p class="catalog-count">${count} ${count === 1 ? "piece" : "pieces"} found</p></header>`;
	}

	function ProductGallery(product) {
		const images = product.images?.length ? product.images : [product.image];
		const badge = product.badge ? `<span class="product-gallery-badge">${escapeHtml(product.badge)}</span>` : "";
		return `<div class="product-gallery" aria-label="Product images">
			<div class="product-main-media" data-gallery-swipe>
				<img class="product-main-image" data-main-product-image src="${escapeHtml(images[0])}" alt="${escapeHtml(product.name)}" fetchpriority="high" decoding="async">
				${badge}${WishlistButton(product)}
			</div>
			<div class="product-thumbnails" role="group" aria-label="Choose product image">${images.slice(0, 4).map((image, index) => `<button class="product-thumbnail${index === 0 ? " is-active" : ""}" type="button" data-gallery-image="${index}" data-gallery-src="${escapeHtml(image)}" aria-label="Show product image ${index + 1}" aria-pressed="${index === 0}"><img src="${escapeHtml(image)}" alt="" loading="lazy" decoding="async"></button>`).join("")}</div>
		</div>`;
	}

	function ProductSizeOptions(product) {
		if (!product.sizes?.length) return "";
		return `<fieldset class="product-size-options"><legend>SIZE <span class="product-selected-size" data-selected-size>${escapeHtml(product.size)}</span></legend><div class="product-size-buttons">${product.sizes.map((size) => `<button class="product-size-button${size === product.size ? " is-selected" : ""}" type="button" data-product-size="${escapeHtml(size)}" aria-pressed="${size === product.size}">${escapeHtml(size)}</button>`).join("")}</div></fieldset>`;
	}

	function ProductAccordions(product) {
		return `<div class="product-accordions">
			<details class="product-accordion" open><summary>DESCRIPTION</summary><div class="product-accordion-content"><div>${escapeHtml(product.description)}</div></div></details>
			<details class="product-accordion"><summary>MATERIAL &amp; CARE</summary><div class="product-accordion-content"><div><p><strong>Material</strong><br>${escapeHtml(product.material)}</p><p><strong>Care</strong><br>${escapeHtml(product.careInstructions)}</p></div></div></details>
			<details class="product-accordion"><summary>SIZE &amp; DIMENSIONS</summary><div class="product-accordion-content"><div><p><strong>Size</strong><br>${escapeHtml(product.size)}</p><p><strong>Dimensions</strong><br>${escapeHtml(product.dimensions)}</p></div></div></details>
			<details class="product-accordion"><summary>SHIPPING &amp; RETURNS</summary><div class="product-accordion-content"><div><p>${escapeHtml(product.shippingInfo)}</p><p>${escapeHtml(product.returnInfo)}</p></div></div></details>
		</div>`;
	}

	function ProductRelated(product) {
		const related = store.products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
		return `<section class="product-related-section" aria-labelledby="related-products-title"><header class="product-section-heading"><p>ELAN EDIT</p><h2 id="related-products-title">YOU MAY ALSO LIKE</h2></header><div class="catalog-product-grid product-related-grid">${related.map(ProductCard).join("")}</div></section>`;
	}

	function ProductReviews(product) {
		return `<section class="product-reviews-section" id="product-reviews" aria-labelledby="product-reviews-title"><header class="product-section-heading"><p>THOUGHTS FROM OUR CUSTOMERS</p><h2 id="product-reviews-title">WHAT OUR CUSTOMERS SAY</h2></header><div class="product-review-grid">${product.reviews.map((review) => `<article class="product-review"><p class="product-review-stars" aria-label="Rated ${review.rating} out of 5">★★★★★</p><blockquote>“${escapeHtml(review.text)}”</blockquote><p class="product-review-author">${escapeHtml(review.name)}</p><p class="product-review-verified">Verified Purchase</p></article>`).join("")}</div></section>`;
	}

	function ProductDetailPage(product) {
		const category = categoryBySlug.get(product.category);
		const oldPrice = product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : "";
		const sizeSpec = product.sizes?.length ? "" : `<div class="product-spec"><dt>SIZE</dt><dd>${escapeHtml(product.size)}</dd></div>`;
		return `<section class="product-page" aria-labelledby="product-detail-title"><div class="product-page-inner">
			<nav class="product-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/shop">Shop</a><span aria-hidden="true">/</span><a href="/category/${escapeHtml(category.slug)}">${escapeHtml(category.name)}</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(product.name)}</span></nav>
			<div class="product-detail-layout" data-product-detail="${escapeHtml(product.id)}">
				${ProductGallery(product)}
				<div class="product-information">
					<p class="product-category-label">${escapeHtml(category.name)}</p>
					<h1 id="product-detail-title" class="product-detail-title">${escapeHtml(product.name)}</h1>
					<div class="product-detail-rating"><span class="product-detail-stars" aria-hidden="true">★★★★★</span><span>${product.rating.toFixed(1)}</span><a href="#product-reviews">(${product.reviewCount} Reviews)</a></div>
					<div class="product-detail-price">${oldPrice}<strong>${formatPrice(product.price)}</strong></div>
					${product.badge ? `<span class="product-detail-badge">${escapeHtml(product.badge)}</span>` : ""}
					<p class="product-short-description">${escapeHtml(product.shortDescription)}</p>
					<dl class="product-spec-grid"><div class="product-spec"><dt>MATERIAL</dt><dd>${escapeHtml(product.material)}</dd></div><div class="product-spec"><dt>COLOR</dt><dd>${escapeHtml(product.color)}</dd></div>${sizeSpec}<div class="product-spec"><dt>DIMENSIONS</dt><dd>${escapeHtml(product.dimensions)}</dd></div></dl>
					${ProductSizeOptions(product)}
					<div class="product-quantity-control"><label for="product-quantity">QUANTITY</label><div class="product-quantity-stepper"><button type="button" data-quantity-step="-1" aria-label="Decrease quantity">−</button><input id="product-quantity" data-product-quantity type="number" min="1" max="99" value="1" inputmode="numeric"><button type="button" data-quantity-step="1" aria-label="Increase quantity">+</button></div></div>
					<div class="product-purchase-actions"><button class="product-add-button" type="button" data-add-to-cart="${escapeHtml(product.id)}" data-product-detail-add>ADD TO CART</button><button class="product-buy-button" type="button" data-buy-now="${escapeHtml(product.id)}">BUY IT NOW</button></div>
					${ProductAccordions(product)}
				</div>
			</div>
			${ProductRelated(product)}
			${ProductReviews(product)}
		</div></section>`;
	}

	function renderProduct(path) {
		const match = path.match(/^\/product\/([^/]+)\/?$/);
		const product = match && store.products.find((item) => item.slug === decodeURIComponent(match[1]));
		if (!product) {
			main.innerHTML = `<section class="product-not-found"><div><p>ELAN JEWELLERY</p><h1>PRODUCT NOT FOUND</h1><p>Sorry, this piece is no longer available.</p><a href="/shop">EXPLORE JEWELLERY <span aria-hidden="true">→</span></a></div></section>`;
			document.title = "Product Not Found | ELAN Jewellery";
			return;
		}
		main.innerHTML = ProductDetailPage(product);
		document.title = `${product.name} | ELAN Jewellery`;
		observeRelatedProducts();
	}

	function renderPurchasePage(isCheckout) {
		const cart = readStorage("elan-cart", []);
		const lines = cart.map((line) => ({ line, product: store.products.find((product) => product.id === line.productId) })).filter((entry) => entry.product);
		const total = lines.reduce((sum, entry) => sum + entry.product.price * entry.line.quantity, 0);
		if (!isCheckout) {
			renderCartPage(lines, total);
			return;
		}
		if (!lines.length) {
			main.innerHTML = `<section class="checkout-page"><div class="checkout-page-inner"><nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/cart">Cart</a><span aria-hidden="true">/</span><span aria-current="page">Checkout</span></nav><div class="checkout-empty-state"><p>ELAN JEWELLERY</p><h1>YOUR BAG IS EMPTY</h1><span>Add something beautiful before checkout.</span><a href="/shop">RETURN TO SHOP <span aria-hidden="true">→</span></a></div></div></section>`;
			document.title = "Checkout | ELAN Jewellery";
			return;
		}
		renderCheckoutPage(lines, total);
	}

	function renderCheckoutPage(lines, subtotal) {
		const shipping = subtotal >= 5000 ? 0 : 250;
		const total = subtotal + shipping;
		const orderItems = lines.map(({ line, product }) => `<article class="checkout-order-item"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}"><div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(categoryBySlug.get(product.category)?.name || product.category)}${line.size && product.sizes?.length ? ` · Size ${escapeHtml(line.size)}` : ""} · Qty ${line.quantity}</p></div><strong>${formatPrice(product.price * line.quantity)}</strong></article>`).join("");
		main.innerHTML = `<section class="checkout-page"><div class="checkout-page-inner"><nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/cart">Cart</a><span aria-hidden="true">/</span><span aria-current="page">Checkout</span></nav><header class="checkout-page-header"><p>ELAN JEWELLERY</p><h1>CHECKOUT</h1><span>Complete your order and make it yours.</span></header><form class="checkout-layout" id="checkout-form" novalidate><div class="checkout-customer-panel"><section class="checkout-form-section" aria-labelledby="checkout-contact-heading"><h2 id="checkout-contact-heading">CONTACT INFORMATION</h2><div class="checkout-field-grid"><label class="checkout-field checkout-field-wide">Full Name <span>*</span><input name="customerName" type="text" placeholder="Enter your full name" autocomplete="name" required><small class="checkout-error" data-error-for="customerName"></small></label><label class="checkout-field">Email Address <span>*</span><input name="email" type="email" placeholder="you@example.com" autocomplete="email" required><small class="checkout-error" data-error-for="email"></small></label><label class="checkout-field">Phone Number <span>*</span><input name="phone" type="tel" placeholder="03XX XXXXXXX" autocomplete="tel" inputmode="tel" required><small class="checkout-error" data-error-for="phone"></small></label></div></section><section class="checkout-form-section" aria-labelledby="checkout-shipping-heading"><h2 id="checkout-shipping-heading">SHIPPING ADDRESS</h2><div class="checkout-field-grid"><label class="checkout-field checkout-field-wide">Address <span>*</span><input name="address" type="text" placeholder="House / Street / Area" autocomplete="street-address" required><small class="checkout-error" data-error-for="address"></small></label><label class="checkout-field">City <span>*</span><input name="city" type="text" placeholder="e.g. Karachi" autocomplete="address-level2" required><small class="checkout-error" data-error-for="city"></small></label><label class="checkout-field">Province <span>*</span><select name="province" autocomplete="address-level1" required><option value="">Select province</option><option>Punjab</option><option>Sindh</option><option>Khyber Pakhtunkhwa</option><option>Balochistan</option><option>Islamabad Capital Territory</option><option>Gilgit-Baltistan</option><option>Azad Jammu and Kashmir</option></select><small class="checkout-error" data-error-for="province"></small></label><label class="checkout-field checkout-field-wide">Postal Code <span>*</span><input name="postalCode" type="text" inputmode="numeric" placeholder="Postal code" autocomplete="postal-code" required><small class="checkout-error" data-error-for="postalCode"></small></label><label class="checkout-field checkout-field-wide">Order Notes <em>(Optional)</em><textarea name="orderNotes" rows="3" placeholder="Add a note about your order"></textarea></label></div></section><section class="checkout-form-section checkout-payment-section" aria-labelledby="checkout-payment-heading"><h2 id="checkout-payment-heading">PAYMENT METHOD</h2><label class="checkout-cod-option"><input type="radio" name="paymentMethod" value="Cash on Delivery" checked><span class="checkout-radio-mark" aria-hidden="true"></span><span>Cash on Delivery</span></label><p>Payment options can be expanded later.</p></section></div><aside class="checkout-order-panel" aria-labelledby="checkout-summary-heading"><h2 id="checkout-summary-heading">ORDER SUMMARY</h2><div class="checkout-order-items">${orderItems}</div><div class="checkout-totals"><div><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></div><div><span>Shipping</span><strong>${shipping ? formatPrice(shipping) : "FREE"}</strong></div><p>Free shipping on orders above PKR 5,000</p><div class="checkout-grand-total"><span>Total</span><strong>${formatPrice(total)}</strong></div></div><p class="checkout-form-error" data-checkout-error role="alert"></p><button class="checkout-place-order" type="submit">PLACE ORDER <span aria-hidden="true">→</span></button><p class="checkout-secure-note">Your details are used only to complete this order.</p></aside></form></div></section>`;
		document.title = "Checkout | ELAN Jewellery";
	}

	function renderOrderConfirmation(order) {
		if (!order) {
			main.innerHTML = `<section class="checkout-page"><div class="checkout-page-inner"><div class="checkout-empty-state"><p>ELAN JEWELLERY</p><h1>NO RECENT ORDER</h1><span>Your order details will appear here after checkout.</span><a href="/shop">RETURN TO SHOP <span aria-hidden="true">→</span></a></div></div></section>`;
			document.title = "Order Confirmation | ELAN Jewellery";
			return;
		}
		const items = Array.isArray(order.items) ? order.items : [];
		const subtotal = Number.isFinite(order.subtotal) ? order.subtotal : items.reduce((sum, item) => sum + item.price * item.quantity, 0);
		const shipping = Number.isFinite(order.shipping) ? order.shipping : Math.max(0, order.total - subtotal);
		const itemMarkup = items.map((item) => `<article class="order-confirmation-item"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}"><div><h2>${escapeHtml(item.name)}</h2><p>Qty ${item.quantity}${item.size && item.size !== "One Size" ? ` · Size ${escapeHtml(item.size)}` : ""}</p></div><strong>${formatPrice(item.price * item.quantity)}</strong></article>`).join("");
		main.innerHTML = `<section class="checkout-page"><div class="checkout-page-inner"><div class="order-confirmation"><span class="order-confirmation-mark" aria-hidden="true">✓</span><p>ELAN JEWELLERY</p><h1>THANK YOU FOR YOUR ORDER</h1><span class="order-confirmation-copy">Your order has been received. We’ll be in touch with you shortly.</span><div class="order-confirmation-number"><span>ORDER NUMBER</span><strong>${escapeHtml(order.orderNumber)}</strong></div><div class="order-confirmation-items" aria-label="Products in your order">${itemMarkup}</div><div class="order-confirmation-summary"><p class="order-confirmation-customer">${escapeHtml(order.customerName)}</p><p class="order-confirmation-address">${escapeHtml(order.address)}, ${escapeHtml(order.city)}, ${escapeHtml(order.province)} ${escapeHtml(order.postalCode)}</p><div class="order-confirmation-totals"><p><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></p><p><span>Shipping</span><strong>${shipping ? formatPrice(shipping) : "FREE"}</strong></p><p class="order-confirmation-total"><span>Total</span><strong>${formatPrice(order.total)}</strong></p></div></div><a href="/shop">CONTINUE SHOPPING <span aria-hidden="true">→</span></a></div></div></section>`;
		document.title = "Order Confirmation | ELAN Jewellery";
	}

	function validateCheckout(form) {
		const values = Object.fromEntries(new FormData(form).entries());
		const errors = {};
		["customerName", "email", "phone", "address", "city", "province", "postalCode"].forEach((name) => {
			if (!String(values[name] || "").trim()) errors[name] = "This field is required.";
		});
		if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
		const normalizedPhone = String(values.phone || "").replace(/[\s()-]/g, "");
		if (!errors.phone && !/^(?:(?:\+|00)?92|0)?3\d{9}$/.test(normalizedPhone)) errors.phone = "Enter a valid Pakistani mobile number.";
		form.querySelectorAll("[data-error-for]").forEach((message) => {
			const error = errors[message.dataset.errorFor] || "";
			message.textContent = error;
			message.closest(".checkout-field")?.classList.toggle("has-error", Boolean(error));
			message.previousElementSibling?.setAttribute("aria-invalid", String(Boolean(error)));
		});
		return { values, errors };
	}

	function submitCheckout(form, submitButton) {
		if (form.dataset.submitting === "true") return;
		const { values, errors } = validateCheckout(form);
		const cart = readStorage("elan-cart", []);
		const lines = cart.map((line) => ({ line, product: store.products.find((product) => product.id === line.productId) })).filter((entry) => entry.product);
		const formError = form.querySelector("[data-checkout-error]");
		formError.textContent = "";
		if (!lines.length) {
			navigate("/checkout");
			return;
		}
		if (Object.keys(errors).length) {
			form.querySelector(".checkout-field.has-error input, .checkout-field.has-error select")?.focus();
			return;
		}

		form.dataset.submitting = "true";
		submitButton.disabled = true;
		submitButton.textContent = "PLACING ORDER…";
		const subtotal = lines.reduce((sum, entry) => sum + entry.product.price * entry.line.quantity, 0);
		const shipping = subtotal >= 5000 ? 0 : 250;
		const orderNumber = `ELN-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
		const order = {
			orderNumber,
			customerName: values.customerName.trim(),
			email: values.email.trim(),
			phone: values.phone.trim(),
			address: values.address.trim(),
			city: values.city.trim(),
			province: values.province,
			postalCode: values.postalCode.trim(),
			orderNotes: String(values.orderNotes || "").trim(),
			paymentMethod: values.paymentMethod,
			items: lines.map(({ line, product }) => ({ productId: product.id, name: product.name, slug: product.slug, image: product.image, price: product.price, quantity: line.quantity, size: line.size || product.size || "One Size" })),
			subtotal,
			shipping,
			total: subtotal + shipping,
			orderDate: new Date().toISOString()
		};
		const orders = readStorage("elan-orders", []);
		writeStorage("elan-orders", [...orders, order]);
		writeStorage("elan-latest-order", order);
		writeStorage("elan-cart", []);
		navigate("/order-confirmation");
	}

	function CartLine({ line, product }) {
		const selectedSize = line.size && product.sizes?.length ? `<p class="cart-line-size">Size: ${escapeHtml(line.size)}</p>` : "";
		const lineSize = line.size || product.size || "One Size";
		const wishlist = WishlistButton(product);
		return `<article class="cart-line" data-cart-line="${escapeHtml(product.id)}" data-cart-size="${escapeHtml(lineSize)}">
			<a class="cart-line-image" href="/product/${escapeHtml(product.slug)}" aria-label="View ${escapeHtml(product.name)}"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}"></a>
			<div class="cart-line-main"><p class="cart-line-category">${escapeHtml(categoryBySlug.get(product.category)?.name || product.category)}</p><h2><a href="/product/${escapeHtml(product.slug)}">${escapeHtml(product.name)}</a></h2>${selectedSize}<p class="cart-line-unit-price">${formatPrice(product.price)} <span>each</span></p><div class="cart-line-actions">${wishlist}<button class="cart-remove-button" type="button" data-remove-cart aria-label="Remove ${escapeHtml(product.name)} from bag">Remove</button></div></div>
			<div class="cart-line-quantity"><span>QUANTITY</span><div class="cart-quantity-stepper"><button type="button" data-cart-quantity-step="-1" aria-label="Decrease quantity">−</button><input type="number" min="1" max="99" value="${line.quantity}" data-cart-quantity aria-label="Quantity for ${escapeHtml(product.name)}"><button type="button" data-cart-quantity-step="1" aria-label="Increase quantity">+</button></div></div>
			<strong class="cart-line-subtotal">${formatPrice(product.price * line.quantity)}</strong>
		</article>`;
	}

	function renderCartPage(lines, subtotal) {
		const shipping = subtotal >= 5000 ? 0 : 250;
		const total = subtotal + shipping;
		const contents = lines.length ? `<div class="cart-layout"><div class="cart-lines">${lines.map(CartLine).join("")}</div><aside class="cart-summary" aria-labelledby="cart-summary-title"><h2 id="cart-summary-title">ORDER SUMMARY</h2><div class="cart-summary-row"><span>Subtotal</span><strong data-cart-subtotal>${formatPrice(subtotal)}</strong></div><div class="cart-summary-row"><span>Shipping</span><strong data-cart-shipping>${shipping === 0 ? "FREE" : formatPrice(shipping)}</strong></div><p class="cart-shipping-note">Free shipping on orders above PKR 5,000</p><div class="cart-summary-total"><span>Total</span><strong data-cart-total>${formatPrice(total)}</strong></div><a class="cart-checkout-button" href="/checkout">PROCEED TO CHECKOUT <span aria-hidden="true">→</span></a><a class="cart-continue-link" href="/shop">CONTINUE SHOPPING</a></aside></div>` : `<div class="cart-empty-state"><span class="cart-empty-mark" aria-hidden="true">✦</span><h2>YOUR BAG IS EMPTY</h2><p>Discover something beautiful for your next look.</p><a class="cart-empty-button" href="/shop">EXPLORE JEWELLERY <span aria-hidden="true">→</span></a></div>`;
		main.innerHTML = `<section class="cart-page"><div class="cart-page-inner"><nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Shopping Bag</span></nav><header class="cart-page-header"><p>ELAN JEWELLERY</p><h1>SHOPPING BAG</h1><span>Review your selected pieces before checkout.</span></header>${contents}</div></section>`;
		document.title = "Cart | ELAN Jewellery";
	}

	function updateCartLine(productId, size, quantity) {
		const cart = readStorage("elan-cart", []);
		const product = store.products.find((item) => item.id === productId);
		const line = cart.find((item) => item.productId === productId && (item.size || product?.size || "One Size") === size);
		if (!line) return;
		line.quantity = Math.max(1, Math.min(99, Number.parseInt(quantity, 10) || 1));
		writeStorage("elan-cart", cart);
		renderCartPage(cart.map((entry) => ({ line: entry, product: store.products.find((item) => item.id === entry.productId) })).filter((entry) => entry.product), cart.reduce((sum, entry) => {
			const item = store.products.find((productItem) => productItem.id === entry.productId);
			return sum + (item ? item.price * entry.quantity : 0);
		}, 0));
		updateCartCount();
	}

	function removeCartLine(productId, size) {
		const cart = readStorage("elan-cart", []);
		const product = store.products.find((item) => item.id === productId);
		const remaining = cart.filter((item) => !(item.productId === productId && (item.size || product?.size || "One Size") === size));
		writeStorage("elan-cart", remaining);
		renderCartPage(remaining.map((line) => ({ line, product: store.products.find((item) => item.id === line.productId) })).filter((entry) => entry.product), remaining.reduce((sum, line) => {
			const item = store.products.find((productItem) => productItem.id === line.productId);
			return sum + (item ? item.price * line.quantity : 0);
		}, 0));
		updateCartCount();
		showToast("Item removed from your bag");
	}

	function observeRelatedProducts() {
		const relatedSection = main.querySelector(".product-related-section");
		if (!relatedSection || !("IntersectionObserver" in window)) return;
		relatedSection.classList.add("has-reveal");
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				relatedSection.classList.add("is-visible");
				observer.disconnect();
			}
		}, { threshold: 0.08 });
		observer.observe(relatedSection);
	}

	function sortProducts(products, sortBy) {
		const sorted = [...products];
		if (sortBy === "newest") return sorted.sort((a, b) => b.createdAt - a.createdAt);
		if (sortBy === "price-low" || sortBy === "price-ascending") return sorted.sort((a, b) => a.price - b.price);
		if (sortBy === "price-high" || sortBy === "price-descending") return sorted.sort((a, b) => b.price - a.price);
		if (sortBy === "rating") return sorted.sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));
		if (sortBy === "name") return sorted.sort((a, b) => a.name.localeCompare(b.name));
		return sorted.sort((a, b) => Number(Boolean(b.badge === "Bestseller")) - Number(Boolean(a.badge === "Bestseller")) || a.createdAt - b.createdAt);
	}

	function applyCatalogFilters(products, state, query) {
		const queryMatches = query ? new Set(searchProducts(query).map((product) => product.id)) : null;
		const filtered = products.filter((product) => {
			if (queryMatches && !queryMatches.has(product.id)) return false;
			if (state.collection && !product.collections?.includes(state.collection)) return false;
			if (state.categories.length && !state.categories.includes(product.category)) return false;
			if (state.price) {
				const range = priceRanges.find((item) => item.value === state.price);
				if (range && (product.price < range.min || product.price > range.max)) return false;
			}
			if (state.materials.length) {
				const productMaterials = product.materials || [product.material];
				const searchableMaterials = [...productMaterials, product.name, product.shortDescription, product.description].filter(Boolean).join(" ").toLocaleLowerCase();
				if (!state.materials.some((material) => searchableMaterials.includes(material.toLocaleLowerCase()))) return false;
			}
			if (state.availability.length) {
				const available = state.availability.includes("in-stock");
				const unavailable = state.availability.includes("out-of-stock");
				if (!(available && unavailable) && (available !== Boolean(product.available))) return false;
			}
			return true;
		});
		return sortProducts(filtered, state.sort);
	}

	function replaceCatalogRoute(path, params) {
		const nextUrl = routeStateUrl(path, params);
		window.history.replaceState({}, "", nextUrl.toString());
		renderCurrentRoute();
	}

	function updateCatalogFromControls(container) {
		const { path, params: currentParams } = currentRoute();
		const params = new URLSearchParams(currentParams);
		params.delete("route");
		const fixedCategory = /^\/category\//.test(path);
		if (fixedCategory) params.delete("category");
		else {
			const categories = [...container.querySelectorAll('[data-filter="category"]:checked')].map((input) => input.value);
			if (categories.length) params.set("category", categories.join(","));
			else params.delete("category");
		}
		const price = container.querySelector('[data-filter="price"]:checked')?.value;
		if (price) params.set("price", price);
		else params.delete("price");
		for (const key of ["material", "availability"]) {
			const values = [...container.querySelectorAll(`[data-filter="${key}"]:checked`)].map((input) => input.value);
			if (values.length) params.set(key, values.join(","));
			else params.delete(key);
		}
		const sort = container.querySelector("[data-catalog-sort]")?.value || main.querySelector(".catalog-desktop-sort [data-catalog-sort]")?.value || "featured";
		if (sort !== "featured") params.set("sort", sort);
		else params.delete("sort");
		replaceCatalogRoute(path, params);
	}

	function clearCatalogFilters() {
		const { path, params: currentParams } = currentRoute();
		const params = new URLSearchParams(currentParams);
		for (const key of ["category", "collection", "price", "material", "availability", "sort"]) params.delete(key);
		const nextPath = path.startsWith("/category/") ? "/shop" : path;
		replaceCatalogRoute(nextPath, params);
	}

	function removeCatalogFilter(type, value) {
		const { path, params: currentParams } = currentRoute();
		const params = new URLSearchParams(currentParams);
		let nextPath = path;
		if (type === "category-route") {
			nextPath = "/shop";
			params.delete("category");
		} else if (type === "price") {
			params.delete("price");
		} else {
			const values = filterValues(params, type).filter((item) => item !== value);
			if (values.length) params.set(type, values.join(","));
			else params.delete(type);
		}
		replaceCatalogRoute(nextPath, params);
	}

	function renderCategory(path, params = new URLSearchParams()) {
		const match = path.match(/^\/category\/([^/]+)\/?$/);
		const category = match ? categoryBySlug.get(decodeURIComponent(match[1])) : null;
		const isCategoryPath = Boolean(match);
		if (isCategoryPath && !category) {
			main.innerHTML = `<section class="catalog-page"><div class="catalog-page-inner"><nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/shop">Shop</a><span aria-hidden="true">/</span><span aria-current="page">Not Found</span></nav><div class="catalog-empty-state"><h1>Collection not found</h1><a class="catalog-empty-link" href="/shop">EXPLORE ALL JEWELLERY <span aria-hidden="true">→</span></a></div></div></section>`;
			document.title = "Collection Not Found | ELAN Jewellery";
			return;
		}

		const query = (params.get("q") || "").trim();
		const state = getCatalogFilterState(path, params);
		const baseProducts = store.products.filter((product) => !category || product.category === category.slug);
		const products = applyCatalogFilters(baseProducts, state, query);
		const emptyContent = `<div class="catalog-empty-state"><h2>NO PIECES FOUND</h2><p class="filter-empty-copy">Try adjusting your filters to discover more jewellery.</p><button class="catalog-empty-action" type="button" data-clear-filters>CLEAR ALL FILTERS</button></div>`;
		const productContent = PaginatedProductGrid(products, buildCatalogPaginationKey(path, params), emptyContent);
		const drawer = `<dialog class="catalog-filter-drawer" id="catalog-filter-drawer" aria-labelledby="filter-drawer-title"><div class="catalog-filter-drawer-heading"><h2 id="filter-drawer-title">FILTER &amp; SORT</h2><button class="icon-button" type="button" data-close-filter-drawer aria-label="Close filters"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg></button></div>${FilterPanel(state, category, true)}${SortDropdown(state.sort)}<div class="catalog-filter-drawer-actions"><button type="button" class="catalog-clear-filters" data-clear-filters>CLEAR ALL</button><button type="button" class="catalog-apply-filters" data-apply-filters>APPLY FILTERS</button></div></dialog>`;
		main.innerHTML = `<section class="catalog-page" aria-labelledby="catalog-heading"><div class="catalog-page-inner">${CategoryHeader(category, products.length, query, state.collection)}<div class="catalog-listing-toolbar"><button class="catalog-mobile-filter-button" type="button" data-open-filter-drawer>FILTER &amp; SORT</button><span class="catalog-result-count">${products.length} ${products.length === 1 ? "piece" : "pieces"} found</span><div class="catalog-desktop-sort">${SortDropdown(state.sort)}</div></div><div class="catalog-content-layout"><aside class="catalog-filter-panel" aria-label="Filter products">${FilterPanel(state, category)}</aside><div class="catalog-results-column">${ActiveFilterChips(state)}${productContent}</div></div>${drawer}</div></section>`;
		document.title = category ? `${category.name} | ELAN Jewellery` : query ? "Search Results | ELAN Jewellery" : "Shop | ELAN Jewellery";
	}

	function renderSearchResults(query, params = new URLSearchParams()) {
		const products = sortProducts(searchProducts(query), "featured");
		const emptyContent = `<div class="catalog-empty-state"><h2>NO PIECES FOUND</h2><p class="search-empty-copy">We couldn't find anything matching your search.</p><a class="catalog-empty-link" href="/shop">EXPLORE ALL JEWELLERY <span aria-hidden="true">→</span></a></div>`;
		const productContent = PaginatedProductGrid(products, buildCatalogPaginationKey("/search", params), emptyContent);
		main.innerHTML = `<section class="catalog-page" aria-labelledby="catalog-heading"><div class="catalog-page-inner"><nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Search Results</span></nav><header class="catalog-header"><p class="catalog-brand-label">ELAN JEWELLERY</p><h1 class="catalog-heading" id="catalog-heading">SEARCH RESULTS</h1><p class="catalog-description">Results for: ${escapeHtml(query)}</p><p class="catalog-count">${products.length} ${products.length === 1 ? "PIECE" : "PIECES"} FOUND</p></header>${productContent}</div></section>`;
		document.title = `Search Results${query ? ` for ${query}` : ""} | ELAN Jewellery`;
	}

	function renderWishlist() {
		const products = getWishlist().map((productId) => store.products.find((product) => product.id === productId)).filter(Boolean);
		const productContent = products.length
			? ProductGrid(products, "wishlist-product-grid")
			: `<div class="catalog-empty-state"><h1>YOUR WISHLIST IS EMPTY</h1><p class="wishlist-empty-copy">Save the pieces you love and find them here whenever you're ready.</p><a class="catalog-empty-link" href="/shop">EXPLORE JEWELLERY <span aria-hidden="true">→</span></a></div>`;
		main.innerHTML = `<section class="catalog-page" aria-labelledby="catalog-heading"><div class="catalog-page-inner"><nav class="catalog-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Wishlist</span></nav><header class="catalog-header"><p class="catalog-brand-label">ELAN JEWELLERY</p><h1 class="catalog-heading" id="catalog-heading">WISHLIST</h1><p class="catalog-description">Your collection of pieces worth keeping close.</p><p class="catalog-count">${products.length} ${products.length === 1 ? "PRODUCT" : "PRODUCTS"}</p></header>${productContent}</div></section>`;
		document.title = "Wishlist | ELAN Jewellery";
	}

	function restoreHome() {
		main.innerHTML = homeMarkup;
		const categoriesSection = main.querySelector(".shop-categories");
		if (categoriesSection) categoriesSection.classList.remove("has-reveal");
		const featuredSection = main.querySelector(".featured-collections-section");
		if (!featuredSection) {
			const bestSellersMarkup = BestSellersSection();
			if (categoriesSection) categoriesSection.insertAdjacentHTML("afterend", bestSellersMarkup);
			const bestSellersSection = main.querySelector(".best-sellers-section");
			const whyShopSection = main.querySelector(".why-shop-section, [data-why-shop]");
			if (bestSellersSection) bestSellersSection.insertAdjacentHTML("afterend", FeaturedCollectionsSection());
			else if (categoriesSection) categoriesSection.insertAdjacentHTML("afterend", FeaturedCollectionsSection());
			if (whyShopSection && bestSellersSection) whyShopSection.parentElement.insertBefore(main.querySelector(".featured-collections-section"), whyShopSection);
		}
		if (!main.querySelector(".why-shop-section")) {
			const currentFeaturedSection = main.querySelector(".featured-collections-section");
			const brandStorySection = main.querySelector(".brand-story-section, .brand-story, [data-brand-story], .about-section");
			const whyShopMarkup = WhyShopSection();
			if (brandStorySection && currentFeaturedSection && (currentFeaturedSection.compareDocumentPosition(brandStorySection) & 4)) {
				brandStorySection.insertAdjacentHTML("beforebegin", whyShopMarkup);
			} else if (currentFeaturedSection) {
				currentFeaturedSection.insertAdjacentHTML("afterend", whyShopMarkup);
			} else {
				main.querySelector(".best-sellers-section")?.insertAdjacentHTML("afterend", whyShopMarkup);
			}
		}
		if (!main.querySelector(".brand-story-section")) {
			const whyShopSection = main.querySelector(".why-shop-section");
			const reviewsSection = main.querySelector(".customer-reviews-section, .reviews-section, [data-customer-reviews]");
			if (whyShopSection) {
				whyShopSection.insertAdjacentHTML("afterend", BrandStorySection());
				if (reviewsSection && (whyShopSection.compareDocumentPosition(reviewsSection) & 4)) {
					reviewsSection.parentElement.insertBefore(main.querySelector(".brand-story-section"), reviewsSection);
				}
			}
		}
		if (!main.querySelector(".customer-reviews-section")) {
			const brandStorySection = main.querySelector(".brand-story-section");
			const newsletterSection = main.querySelector(".newsletter-section, .newsletter, [data-newsletter]");
			if (brandStorySection) {
				brandStorySection.insertAdjacentHTML("afterend", CustomerReviewsSection());
				if (newsletterSection && (brandStorySection.compareDocumentPosition(newsletterSection) & 4)) {
					newsletterSection.parentElement.insertBefore(main.querySelector(".customer-reviews-section"), newsletterSection);
				}
			}
		}
		if (!main.querySelector(".newsletter-section")) {
			const reviewsSection = main.querySelector(".customer-reviews-section");
			const footer = main.querySelector(".site-footer, footer, [data-footer]") || document.querySelector(".site-footer, footer, [data-footer]");
			if (reviewsSection) {
				reviewsSection.insertAdjacentHTML("afterend", NewsletterSection());
				if (footer && (reviewsSection.compareDocumentPosition(footer) & 4)) {
					footer.parentElement.insertBefore(main.querySelector(".newsletter-section"), footer);
				}
			}
		}
		observeHomeSection(".best-sellers-section");
		observeHomeSection(".featured-collections-section");
		observeHomeSection(".why-shop-section");
		observeHomeSection(".brand-story-section");
		observeHomeSection(".customer-reviews-section");
		observeHomeSection(".newsletter-section");
		document.title = "ELAN Jewellery";
	}

	function navigate(path, params = new URLSearchParams()) {
		const url = routeStateUrl(path, params);
		window.history.pushState({}, "", url.toString());
		renderCurrentRoute();
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	function renderCurrentRoute() {
		const { path, params } = currentRoute();
		if (path === "/faq" || path === "/faqs") {
			main.innerHTML = FAQPage();
			initializeFAQPage();
			document.title = "FAQ | ELAN Jewellery";
		} else if (path === "/collections") {
			main.innerHTML = CollectionsPage();
			initializeCollectionsPage();
			document.title = "Collections | ELAN Jewellery";
		} else if (path === "/contact") {
			main.innerHTML = ContactPage();
			initializeContactPage();
			document.title = "Contact Us | ELAN Jewellery";
		} else if (path === "/about") {
			main.innerHTML = AboutPage();
			observeHomeSection(".about-page");
			document.title = "About Us | ELAN Jewellery";
		} else if (footerInfoPages[path]) {
			const page = footerInfoPages[path];
			main.innerHTML = FooterInfoPage(page);
			document.title = `${page.title} | ELAN Jewellery`;
		} else if (path === "/shop" || path.startsWith("/category/")) {
			renderCategory(path, params);
		} else if (path === "/search") {
			renderSearchResults((params.get("q") || "").trim(), params);
		} else if (path === "/wishlist") {
			renderWishlist();
		} else if (path.startsWith("/product/")) {
			renderProduct(path);
		} else if (path === "/cart" || path === "/checkout") {
			renderPurchasePage(path === "/checkout");
		} else if (path === "/order-confirmation") {
			renderOrderConfirmation(readStorage("elan-latest-order", null));
		} else {
			restoreHome();
		}
		updateCartCount();
		ensureFooter();
		if ((path === "/" || path.endsWith("/index.html")) && window.location.hash) {
			const targetId = decodeURIComponent(window.location.hash.slice(1));
			window.requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" }));
		}
		rewriteInternalLinks();
	}

	function showToast(message) {
		let toast = document.querySelector(".store-toast");
		if (!toast) {
			toast = document.createElement("div");
			toast.className = "store-toast";
			toast.setAttribute("role", "status");
			toast.setAttribute("aria-live", "polite");
			document.body.append(toast);
		}
		toast.textContent = message;
		toast.classList.add("is-visible");
		window.clearTimeout(toastTimer);
		toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
	}

	function addToCart(productId, quantity = 1, selectedSize = null, showProductName = false) {
		const product = store.products.find((item) => item.id === productId);
		if (!product || !product.available) return;
		const quantityToAdd = Math.max(1, Math.min(99, Number.parseInt(quantity, 10) || 1));
		const size = selectedSize || product.size || "One Size";
		const cart = readStorage("elan-cart", []);
		const cartItem = cart.find((item) => item.productId === product.id && (item.size || product.size || "One Size") === size);
		if (cartItem) cartItem.quantity += quantityToAdd;
		else cart.push({ productId: product.id, name: product.name, image: product.image, price: product.price, quantity: quantityToAdd, size });
		writeStorage("elan-cart", cart);
		updateCartCount();
		showToast(showProductName ? `${product.name} added to your cart ✓` : "Added to cart ✓");
	}

	function toggleWishlist(productId, button) {
		const savedIds = getWishlist();
		const isSaved = savedIds.includes(productId);
		const nextIds = isSaved ? savedIds.filter((id) => id !== productId) : [...savedIds, productId];
		writeStorage(wishlistStorageKey, nextIds);
		button.classList.toggle("is-saved", !isSaved);
		button.setAttribute("aria-pressed", String(!isSaved));
		const product = store.products.find((item) => item.id === productId);
		button.setAttribute("aria-label", `${isSaved ? "Add to wishlist" : "Remove from wishlist"}: ${product?.name || "product"}`);
		showToast(isSaved ? "Removed from wishlist" : "Added to wishlist ♥");
	}

	window.addEventListener("click", (event) => {
		const targetElement = event.target instanceof Element ? event.target : null;
		if (!targetElement) return;
		const loadMoreButton = targetElement.closest("[data-load-more]");
		if (loadMoreButton) {
			const currentKey = catalogPaginationKey;
			const currentCount = catalogVisibleCount;
			loadMoreButton.disabled = true;
			loadMoreButton.textContent = "LOADING...";
			loadMoreButton.setAttribute("aria-busy", "true");
			window.setTimeout(() => {
				if (catalogPaginationKey !== currentKey) return;
				catalogRevealFrom = currentCount;
				catalogVisibleCount = Math.min(currentCount + catalogPageSize, catalogTotalCount);
				renderCurrentRoute();
			}, 180);
			return;
		}
		const openFilterButton = targetElement.closest("[data-open-filter-drawer]");
		if (openFilterButton) {
			main.querySelector("#catalog-filter-drawer")?.showModal();
			return;
		}
		const closeFilterButton = targetElement.closest("[data-close-filter-drawer]");
		if (closeFilterButton) {
			main.querySelector("#catalog-filter-drawer")?.close();
			return;
		}
		const applyFilterButton = targetElement.closest("[data-apply-filters]");
		if (applyFilterButton) {
			const drawer = applyFilterButton.closest("#catalog-filter-drawer");
			drawer.close();
			updateCatalogFromControls(drawer);
			return;
		}
		const clearFilterButton = targetElement.closest("[data-clear-filters]");
		if (clearFilterButton) {
			main.querySelector("#catalog-filter-drawer[open]")?.close();
			clearCatalogFilters();
			return;
		}
		const removeFilterButton = targetElement.closest("[data-remove-filter]");
		if (removeFilterButton) {
			removeCatalogFilter(removeFilterButton.dataset.removeFilter, removeFilterButton.dataset.value);
			return;
		}
		const searchSuggestion = targetElement.closest("[data-search-suggestion]");
		if (searchSuggestion) {
			const searchInput = document.querySelector("#site-search");
			if (searchInput) {
				searchInput.value = searchSuggestion.dataset.searchSuggestion;
				renderSearchSuggestions(searchInput.value);
				searchInput.focus();
			}
			return;
		}
		const searchClearButton = targetElement.closest(".search-clear");
		if (searchClearButton) {
			const searchInput = document.querySelector("#site-search");
			if (searchInput) {
				searchInput.value = "";
				renderSearchSuggestions("");
				searchInput.focus();
			}
			return;
		}
		const cartQuantityButton = targetElement.closest("[data-cart-quantity-step]");
		if (cartQuantityButton) {
			const line = cartQuantityButton.closest("[data-cart-line]");
			const quantityInput = line.querySelector("[data-cart-quantity]");
			updateCartLine(line.dataset.cartLine, line.dataset.cartSize, Number(quantityInput.value) + Number(cartQuantityButton.dataset.cartQuantityStep));
			return;
		}
		const removeCartButton = targetElement.closest("[data-remove-cart]");
		if (removeCartButton) {
			const line = removeCartButton.closest("[data-cart-line]");
			removeCartLine(line.dataset.cartLine, line.dataset.cartSize);
			return;
		}
		const galleryButton = targetElement.closest("[data-gallery-image]");
		if (galleryButton) {
			const mainImage = main.querySelector("[data-main-product-image]");
			if (mainImage) {
				mainImage.classList.remove("is-changing");
				void mainImage.offsetWidth;
				mainImage.src = galleryButton.dataset.gallerySrc;
				mainImage.classList.add("is-changing");
				window.setTimeout(() => mainImage.classList.remove("is-changing"), 320);
				main.querySelectorAll("[data-gallery-image]").forEach((button) => {
					const active = button === galleryButton;
					button.classList.toggle("is-active", active);
					button.setAttribute("aria-pressed", String(active));
				});
			}
			return;
		}
		const sizeButton = targetElement.closest("[data-product-size]");
		if (sizeButton) {
			const sizeGroup = sizeButton.closest(".product-size-options");
			sizeGroup.querySelectorAll("[data-product-size]").forEach((button) => {
				const active = button === sizeButton;
				button.classList.toggle("is-selected", active);
				button.setAttribute("aria-pressed", String(active));
			});
			sizeGroup.querySelector("[data-selected-size]").textContent = sizeButton.dataset.productSize;
			return;
		}
		const quantityButton = targetElement.closest("[data-quantity-step]");
		if (quantityButton) {
			const input = quantityButton.closest(".product-quantity-stepper").querySelector("[data-product-quantity]");
			input.value = String(Math.max(1, Math.min(99, Number.parseInt(input.value, 10) + Number(quantityButton.dataset.quantityStep) || 1)));
			return;
		}
		const buyNowButton = targetElement.closest("[data-buy-now]");
		if (buyNowButton) {
			const detail = buyNowButton.closest("[data-product-detail]");
			const quantity = detail.querySelector("[data-product-quantity]").value;
			const selectedSize = detail.querySelector(".product-size-button.is-selected")?.dataset.productSize;
			addToCart(buyNowButton.dataset.buyNow, quantity, selectedSize, true);
			navigate("/checkout");
			return;
		}
		const wishlistButton = targetElement.closest("[data-wishlist]");
		if (wishlistButton) {
			toggleWishlist(wishlistButton.dataset.wishlist, wishlistButton);
			if (currentRoute().path === "/wishlist") renderWishlist();
			return;
		}
		const cartButton = targetElement.closest("[data-add-to-cart]");
		if (cartButton) {
			const detail = cartButton.closest("[data-product-detail]");
			if (detail && cartButton.hasAttribute("data-product-detail-add")) {
				const quantity = detail.querySelector("[data-product-quantity]").value;
				const selectedSize = detail.querySelector(".product-size-button.is-selected")?.dataset.productSize;
				addToCart(cartButton.dataset.addToCart, quantity, selectedSize, true);
			} else {
				addToCart(cartButton.dataset.addToCart);
			}
			return;
		}
		const productCard = targetElement.closest(".catalog-product-card[data-product-slug]");
		if (productCard && !targetElement.closest("button, a")) {
			event.preventDefault();
			document.querySelector(".search-dialog")?.close();
			navigate(`/product/${productCard.dataset.productSlug}`);
			return;
		}
		const link = targetElement.closest("a[href]");
		if (!link || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		if (window.location.protocol !== "file:") return;
		const href = link.getAttribute("href");
		if (!href || !href.startsWith("/")) return;
		const [pathAndSearch, hash = ""] = href.split("#", 2);
		const [path, search = ""] = pathAndSearch.split("?", 2);
		const routePath = path.replace(/\/+$/, "") || "/";
		if (routePath !== "/" && routePath !== "/about" && routePath !== "/shop" && routePath !== "/collections" && routePath !== "/search" && routePath !== "/wishlist" && routePath !== "/cart" && routePath !== "/checkout" && routePath !== "/order-confirmation" && routePath !== "/faq" && routePath !== "/faqs" && !footerInfoPages[routePath] && !routePath.startsWith("/category/") && !routePath.startsWith("/product/")) return;
		event.preventDefault();
		main.querySelector("#catalog-filter-drawer[open]")?.close();
		navigate(routePath, new URLSearchParams(search));
		if (hash) {
			const targetId = decodeURIComponent(hash);
			const nextUrl = new URL(window.location.href);
			nextUrl.hash = targetId;
			window.history.replaceState({}, "", nextUrl.toString());
			window.requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" }));
		}
	}, true);

	document.addEventListener("submit", (event) => {
		if (event.target.id === "newsletter-form") {
			event.preventDefault();
			const form = event.target;
			const emailInput = form.elements.email;
			const message = document.querySelector("#newsletter-message");
			const email = String(emailInput.value || "").trim();
			const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
			if (!email) {
				message.textContent = "Please enter your email address.";
				message.classList.add("is-error");
				emailInput.setAttribute("aria-invalid", "true");
				return;
			}
			if (!validEmail) {
				message.textContent = "Please enter a valid email address.";
				message.classList.add("is-error");
				emailInput.setAttribute("aria-invalid", "true");
				return;
			}
			const subscribers = readStorage("elan-newsletter-subscribers", []);
			const normalizedEmail = email.toLocaleLowerCase();
			if (Array.isArray(subscribers) && !subscribers.includes(normalizedEmail)) {
				writeStorage("elan-newsletter-subscribers", [...subscribers, normalizedEmail]);
			}
			message.textContent = "Thank you for subscribing to ELAN. ♥";
			message.classList.remove("is-error");
			emailInput.removeAttribute("aria-invalid");
			emailInput.value = "";
			return;
		}
		if (event.target.id !== "checkout-form") return;
		event.preventDefault();
		submitCheckout(event.target, event.submitter || event.target.querySelector("[type='submit']"));
	});

	window.addEventListener("touchstart", (event) => {
		if (event.target instanceof Element && event.target.closest("[data-gallery-swipe]")) {
			main.dataset.galleryTouchStart = String(event.changedTouches[0].clientX);
		}
	}, { passive: true });

	window.addEventListener("touchend", (event) => {
		if (!(event.target instanceof Element) || !event.target.closest("[data-gallery-swipe]")) return;
		const start = Number(main.dataset.galleryTouchStart);
		const delta = event.changedTouches[0].clientX - start;
		if (!start || Math.abs(delta) < 36) return;
		const buttons = [...main.querySelectorAll("[data-gallery-image]")];
		const activeIndex = Math.max(0, buttons.findIndex((button) => button.classList.contains("is-active")));
		const nextIndex = (activeIndex + (delta < 0 ? 1 : buttons.length - 1)) % buttons.length;
		buttons[nextIndex]?.click();
	}, { passive: true });

	document.addEventListener("input", (event) => {
		if (!event.target.matches("[data-product-quantity]")) return;
		event.target.value = String(Math.max(1, Math.min(99, Number.parseInt(event.target.value, 10) || 1)));
	});

	window.addEventListener("keydown", (event) => {
		if (event.key !== "Enter" && event.key !== " ") return;
		const targetElement = event.target instanceof Element ? event.target : null;
		const productCard = targetElement?.closest(".catalog-product-card[data-product-slug]");
		if (!productCard || targetElement !== productCard) return;
		event.preventDefault();
		document.querySelector(".search-dialog")?.close();
		navigate(`/product/${productCard.dataset.productSlug}`);
	});

	document.addEventListener("change", (event) => {
		if (event.target.matches("[data-cart-quantity]")) {
			const line = event.target.closest("[data-cart-line]");
			updateCartLine(line.dataset.cartLine, line.dataset.cartSize, event.target.value);
			return;
		}
		if (!event.target.matches("[data-filter], [data-catalog-sort]")) return;
		if (event.target.closest("#catalog-filter-drawer")) return;
		const catalog = event.target.closest(".catalog-content-layout") || (event.target.matches("[data-catalog-sort]") ? main.querySelector(".catalog-content-layout") : null);
		if (catalog) updateCatalogFromControls(catalog);
	});

	document.querySelector(".search-form")?.addEventListener("submit", (event) => {
		event.preventDefault();
		const query = String(new FormData(event.currentTarget).get("q") || "").trim();
		if (!query) return;
		const params = new URLSearchParams();
		params.set("q", query);
		navigate("/search", params);
		document.querySelector(".search-dialog")?.close();
	});
	document.querySelector("#site-search")?.addEventListener("input", (event) => renderSearchSuggestions(event.currentTarget.value));
	document.querySelector(".search-dialog")?.addEventListener("close", () => {
		const searchInput = document.querySelector("#site-search");
		if (searchInput) {
			searchInput.value = "";
			renderSearchSuggestions("");
		}
	});

	window.addEventListener("popstate", renderCurrentRoute);
	window.addEventListener("storage", (event) => {
		if (event.key === wishlistStorageKey && currentRoute().path === "/wishlist") renderWishlist();
	});
	window.addEventListener("storage", (event) => {
		if (event.key !== "elan-cart") return;
		updateCartCount();
		if (currentRoute().path === "/cart") renderPurchasePage(false);
	});
	renderCurrentRoute();
})();
