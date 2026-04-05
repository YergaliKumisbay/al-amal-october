document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));

    const closeAll = (except = null) => {
        dropdowns.forEach((dropdown) => {
            if (dropdown === except) {
                return;
            }

            dropdown.removeAttribute('open');

            const summary = dropdown.querySelector('summary');
            if (summary) {
                summary.setAttribute('aria-expanded', 'false');
            }
        });
    };

    dropdowns.forEach((dropdown) => {
        const summary = dropdown.querySelector('summary');
        if (!summary) {
            return;
        }

        summary.addEventListener('click', (event) => {
            event.preventDefault();

            const shouldOpen = !dropdown.hasAttribute('open');
            closeAll(dropdown);

            if (shouldOpen) {
                dropdown.setAttribute('open', 'open');
                summary.setAttribute('aria-expanded', 'true');
            }
            else {
                dropdown.removeAttribute('open');
                summary.setAttribute('aria-expanded', 'false');
            }
        });

        dropdown.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                dropdown.removeAttribute('open');
                summary.setAttribute('aria-expanded', 'false');
            });
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-dropdown')) {
            closeAll();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeAll();
        }
    });
});