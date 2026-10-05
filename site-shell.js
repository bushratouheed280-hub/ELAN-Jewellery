(() => {
	const headerMarkup = `<header class="site-header">
		<div class="announcement-bar" aria-label="Store announcement"><div class="announcement-track"><p class="announcement-message">✦ FREE SHIPPING ON ORDERS ABOVE PKR 5,000 ✦</p><p class="announcement-message announcement-copy" aria-hidden="true">✦ FREE SHIPPING ON ORDERS ABOVE PKR 5,000 ✦</p></div></div>
		<div class="navigation-shell" id="site-navigation"><div class="navigation-inner">
			<a class="brand" href="./index.html" aria-label="ELAN Jewellery home"><span class="brand-name">ELAN</span><span class="brand-descriptor">JEWELLERY</span></a>
			<nav class="primary-navigation" id="primary-navigation" aria-label="Main navigation"><a class="navigation-link" data-route="/" href="./index.html">Home</a><a class="navigation-link" data-route="/shop" href="./products.html?route=%2Fshop">Shop</a><a class="navigation-link" data-route="/collections" href="./collections.html">Collections</a><a class="navigation-link" data-route="/about" href="./about.html">About</a><a class="navigation-link" data-route="/contact" href="./contact.html">Contact</a><a class="navigation-link" data-route="/faq" href="./faq.html">FAQ</a></nav>
			<div class="header-actions" aria-label="Shopping tools">
				<button class="icon-button search-trigger" type="button" aria-label="Open search" aria-haspopup="dialog" aria-controls="search-dialog"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m15.5 15.5 4.2 4.2"></path></svg></button>
				<a class="icon-button wishlist-link" href="./products.html?route=%2Fwishlist" aria-label="Wishlist"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 8.8c0 4.2-8.2 10-8.2 10s-8.2-5.8-8.2-10a4.3 4.3 0 0 1 8.2-1.7 4.3 4.3 0 0 1 8.2 1.7Z"></path></svg></a>
				<a class="icon-button cart-link" href="./cart.html" aria-label="Cart, 0 items"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 4.5h2l2.1 10.1a1.8 1.8 0 0 0 1.8 1.4h8.3a1.8 1.8 0 0 0 1.7-1.3l1.2-6.5H6.4"></path><circle cx="10" cy="19.2" r="1.1"></circle><circle cx="17.2" cy="19.2" r="1.1"></circle></svg><span class="cart-count" aria-hidden="true">0</span></a>
				<button class="icon-button menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation"><svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg><svg class="close-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg></button>
			</div>
		</div></div>
	</header>`;
	const searchMarkup = `<dialog class="search-dialog" id="search-dialog" aria-labelledby="search-title"><div class="search-dialog-content">
		<div class="search-dialog-heading"><h1 id="search-title">SEARCH OUR COLLECTION</h1><button class="icon-button search-close" type="button" aria-label="Close search"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg></button></div>
		<form class="search-form" action="./products.html?route=%2Fsearch" method="get" role="search"><label class="visually-hidden" for="site-search">Search jewellery</label><input id="site-search" name="q" type="text" placeholder="Search for earrings, rings, necklaces..." autocomplete="off" aria-controls="search-dialog-body"><button class="search-clear" type="button" aria-label="Clear search" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg></button><button class="search-submit" type="submit" aria-label="Submit search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m15.5 15.5 4.2 4.2"></path></svg></button></form>
		<div class="search-dialog-body" id="search-dialog-body" aria-live="polite"><section class="popular-searches" aria-labelledby="popular-searches-title"><h2 id="popular-searches-title">POPULAR SEARCHES</h2><div class="popular-search-list"><button type="button" data-search-suggestion="Earrings">Earrings</button><button type="button" data-search-suggestion="Rings">Rings</button><button type="button" data-search-suggestion="Necklaces">Necklaces</button><button type="button" data-search-suggestion="Bracelets">Bracelets</button><button type="button" data-search-suggestion="Jewellery Sets">Jewellery Sets</button></div></section></div>
	</div></dialog>`;

	if (!document.querySelector(".site-header")) document.body.insertAdjacentHTML("afterbegin", headerMarkup);
	if (!document.querySelector(".search-dialog")) document.body.insertAdjacentHTML("beforeend", searchMarkup);

	const url = new URL(window.location.href);
	const documentRoute = document.querySelector('meta[name="elan-route"]')?.content;
	const currentPath = url.searchParams.get("route") || documentRoute || url.pathname;
	document.querySelectorAll(".primary-navigation .navigation-link").forEach((link) => {
		const linkPath = link.dataset.route;
		if (linkPath === currentPath) {
			link.classList.add("is-current");
			link.setAttribute("aria-current", "page");
		}
	});

	const navigationShell = document.querySelector(".navigation-shell");
	const menuToggle = document.querySelector(".menu-toggle");
	const primaryNavigation = document.querySelector(".primary-navigation");
	const searchDialog = document.querySelector(".search-dialog");
	const searchInput = document.querySelector("#site-search");
	const setMenuOpen = (isOpen) => {
		menuToggle?.setAttribute("aria-expanded", String(isOpen));
		menuToggle?.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
		primaryNavigation?.classList.toggle("is-open", isOpen);
	};

	menuToggle?.addEventListener("click", () => {
		setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
	});
	primaryNavigation?.addEventListener("click", (event) => {
		if (event.target.closest("a")) setMenuOpen(false);
	});
	document.querySelector(".search-trigger")?.addEventListener("click", () => {
		searchInput.value = "";
		searchInput.dispatchEvent(new Event("input", { bubbles: true }));
		searchDialog.showModal();
		requestAnimationFrame(() => searchInput.focus());
	});
	document.querySelector(".search-close")?.addEventListener("click", () => searchDialog.close());
	searchDialog?.addEventListener("keydown", (event) => {
		if (event.key !== "Escape") return;
		event.preventDefault();
		searchDialog.close();
	});
	searchDialog?.addEventListener("click", (event) => {
		if (event.target === searchDialog) searchDialog.close();
	});
	window.addEventListener("scroll", () => {
		navigationShell?.classList.toggle("is-compact", window.scrollY > 24);
	}, { passive: true });
	window.addEventListener("resize", () => {
		if (window.innerWidth > 760) setMenuOpen(false);
	});

	const categoriesSection = document.querySelector(".shop-categories");
	if (categoriesSection && "IntersectionObserver" in window) {
		categoriesSection.classList.add("has-reveal");
		const categoriesObserver = new IntersectionObserver((entries, observer) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				categoriesSection.classList.add("is-visible");
				observer.disconnect();
			}
		}, { threshold: 0.12 });
		categoriesObserver.observe(categoriesSection);
	}
})();