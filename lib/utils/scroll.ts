/**
 * Smooth scroll to element with offset for fixed header
 */
export function smoothScrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Handle hash navigation with smooth scroll
 */
export function handleHashNavigation(hash: string) {
  if (hash && hash.startsWith('#')) {
    const elementId = hash.substring(1);
    
    // Wait for the page to load before scrolling
    setTimeout(() => {
      smoothScrollToElement(elementId);
    }, 100);
  }
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Get scroll progress (0-1)
 */
export function getScrollProgress(): number {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return scrollTop / scrollHeight;
}

