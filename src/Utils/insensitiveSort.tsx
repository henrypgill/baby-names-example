export function insensitiveSort(a: string, b: string): number {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}
