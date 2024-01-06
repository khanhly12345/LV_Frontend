

export function getPathName(url: string) {
	const param = new URL(url);
	const path = param.pathname;
	return path
}