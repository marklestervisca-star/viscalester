
/*
 * LEVI'S MOTOSHOP
 * In-page navigation only.
 * No cart, forms, purchases, or additional features.
 */

document.addEventListener('DOMContentLoaded', () => {

    // Select navigation links that point to page sections.
    const navigationLinks = document.querySelectorAll(
        '.reference-nav a[href^="#"]'
    );

    navigationLinks.forEach((link) => {

        link.addEventListener('click', (event) => {

            const href = link.getAttribute('href');

            // Ignore empty or invalid navigation links.
            if (!href || href === '#') return;

            const targetId = href.slice(1);
            const target = document.getElementById(targetId);

            // Continue normally if the target does not exist.
            if (!target) return;

            event.preventDefault();

            // Respect the user's motion preferences.
            const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches;

            // Scroll to the selected section.
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });

            // Update the URL without creating a history entry.
            history.replaceState(null, '', href);

        });

    });

});
