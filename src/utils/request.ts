export function get(url: string, setter: (data: any) => void) {
	fetch(url)
		.then(res => res.json())
		.then(data => setter(data));
}
