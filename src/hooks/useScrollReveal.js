import { useEffect } from 'react';

/**
 * Custom hook to trigger 300ms scroll animations as elements enter the viewport.
 * Observes any elements matching '.reveal-on-scroll', '.reveal-fade-left',
 * '.reveal-fade-right', or '.reveal-scale'.
 * Also uses a MutationObserver to instantly check any newly mounted elements.
 */
export function useScrollReveal(dependencies = []) {
  useEffect(() => {
    const selector = '.reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-scale';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.08,
      }
    );

    const checkAndObserve = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport, reveal immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    checkAndObserve();

    // Listen to DOM mutations to handle dynamic tab switches/filters
    const mutationObserver = new MutationObserver(() => {
      checkAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, dependencies);
}
