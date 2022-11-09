export type PageContext = {
	dicoPath?: string;
	l?: string;
};

export type PageLocation = {
	pathname?: string;
	href?: string;
	search?: string;
};

export type PageProps = {
	pageContext: PageContext;
	location: PageLocation;
	data: object;
};
