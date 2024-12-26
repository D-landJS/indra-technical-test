export function translate<T, Y>(data: Y, mapping: Record<string, string>): T {
	const translated: Partial<T> = {};
	Object.entries(data).forEach(([key, value]) => {
		const mappedKey = mapping[key];
		if (mappedKey) {
			translated[mappedKey as keyof T] = value as T[keyof T];
		}
	});
	return translated as T;
}

export function stringifyProperties<T>(data: T, properties: string[]): T {
	return {
		...data,
		...Object.fromEntries(properties.map((key) => [key, JSON.stringify(data[key as keyof T])])),
	};
}

export function parseJsonProperties<T>(data: T, properties: string[]): T {
	return {
		...data,
		...Object.fromEntries(properties.map((key) => [key, JSON.parse(data[key as keyof T] as string)])),
	};
}
