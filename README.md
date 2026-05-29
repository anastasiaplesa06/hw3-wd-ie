# hw3-wd-ie - Study Group & Peer Tutoring Hub

This project is a fully responsive, multi-page web application built for the Web Design Subject. It is a fictional Study Group & Peer Tutoring Hub, focused on the Spring 2026 semester. It features an interactive Dark Mode, CSS scroll reveal animations, and accessible semantic HTML.

## Accessibility Audit Report
1) Lighthouse Automated Findings
- **Overall Accessibility Score:** 100 / 100
- **Passed Audits:** 24 / 24 applicable checks passed.
- **Key Successes:** All ARIA roles and landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) are valid and properly structured. Image elements possess valid `alt` attributes, and contrast ratios strictly exceed the 4.5:1 minimum threshold across both Light Mode and Dark Mode.

2) Code Level Implementations**
- **Roles & Semantics:** The site relies on native semantic HTML to define regions, ensuring screen readers can easily parse the page structure without needing redundant ARIA roles.
- **Images:** All images, including profile pictures and logos, utilize descriptive `alt` tags (e.g., `alt="Anastasia Plesa - Founder"`) to convey information to assistive technologies.
- **Contrast:** Dark Mode was carefully engineered so that background and foreground colors maintain high contrast (e.g., forcing form labels to `#e0e0e0` and keeping special notice text black against its background).

3) Manual Keyboard Evaluation
- **Skip Links:** A functional `<a href="#main-content" class="skip-link">` is implemented at the top of the DOM, hidden until focused, allowing users to bypass repetitive navigation.
- **Focus States:** Interactive elements like the Dark Mode toggle button and form inputs maintain highly visible focus styles for keyboard navigation.

4) Usability Enhancements
**Why This Works:** By combining semantic HTML with robust keyboard navigation, users relying entirely on screen readers or keyboards can navigate the Hub effortlessly. The UI behaves predictably without visual or structural confusion.

## Performance Audit Report
1) Performance Metrics
- **Overall Score:** 100 / 100
- **First Contentful Paint (FCP):** 0.4 s
- **Largest Contentful Paint (LCP):** 0.4 s
- **Total Blocking Time (TBT):** 0 ms
- **Cumulative Layout Shift (CLS):** 0
- **Speed Index:** 0.6 s

2) Optimized Code Practices
- **External Assets:** All CSS and JavaScript logic is cleanly separated into external files (`style.css` and `main.js`), optimizing browser caching and maintaining a clean HTML structure.
- **Lightweight Foundation:** The application relies purely on vanilla HTML, CSS, and JS. There are no heavy frameworks or libraries bloating the payload.

3) Applied Fixes & Features
- **Lazy Loading Images:** Images situated below the fold (such as the profile picture on `overview.html`) utilize the `loading="lazy"` attribute, ensuring the browser does not waste resources downloading them until the user scrolls.
- **Efficient DOM Updates:** Dark Mode functionality is handled by toggling a single `.dark-mode` class on the `<body>` element, utilizing CSS inheritance rather than costly JavaScript element-by-element updates.

4) Why This Results in a 100/100
- **Impact:** Because the CSS/JS is separated and lightweight, there are zero render-blocking requests delaying the page load. The 0ms TBT guarantees the page is instantly interactive. Furthermore, the CLS is a perfect 0 because layout dimensions are stable and elements (like banners or images) do not unexpectedly shift content during load.

## Additional Audits
- **Best Practices:** 100 / 100 (No deprecated APIs, secure context).
- **SEO:** 100 / 100 (Proper `<title>` tags, meta viewports, and highly legible text sizing).
