/**
 * Navigate to a section on the home page with smooth scrolling
 * If already on home page, scrolls to section
 * If on another page, navigates to home page with hash
 */
export function navigateToSection(sectionId: string, locale: string, currentPath: string) {
    // Check if we're on the home page
    const isHomePage = currentPath === `/${locale}` || currentPath === `/${locale}/`

    if (isHomePage) {
        // Already on home page, just scroll to section
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    } else {
        // Navigate to home page with hash
        window.location.href = `/${locale}#${sectionId}`
    }
}
