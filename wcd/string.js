// 4. Hapus first occurrence dari substring dalam string
function removeFirstOccurrence(str, search) {
    return str.replace(search, "");
}
console.log("\"Hello world\" without \"ell\": ".concat(removeFirstOccurrence("Hello world", "ell")));
