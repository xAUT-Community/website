export function formatPageTitle(pageName: string) {
    if (!pageName) return "xAUT-Community.at";
    return `xAUT — ${pageName.charAt(0).toUpperCase()}${pageName.slice(1).toLowerCase()}`;
}
