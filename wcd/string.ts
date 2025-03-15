// 4. Hapus first occurrence dari substring dalam string
function removeFirstOccurrence(str: string, search: string): string {
    return str.replace(search, "");
}
console.log(`"Hello world" without "ell": ${removeFirstOccurrence("Hello world", "ell")}`);


export {}