// Route chunk loaders, shared by React.lazy and hover/focus prefetching.
export const loadAbout = () => import("./components/AboutMajor/AboutMajor");
export const loadCatalogue = () => import("./components/CatalogueMain/CatalogueMain");
export const loadCollection = () => import("./components/CollectionPage/CollectionPage");
export const loadNotFound = () => import("./components/NotFound/NotFound");
