function reverseVowels(s: string): string {
    let indexes = [];

    for (let i = 0; i < s.length; i++) {
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', "O", "U"].indexOf(s[i]) > -1) {
            indexes.push(s[i]);
        }
    }

    let j = indexes.length - 1
    let a = ''

    for (let i = 0; i < s.length; i++) {
        if (indexes.indexOf(s[i]) > -1) {
            a = a + indexes[j]
            j--
        } else {
            a = a + s[i]
        }
    }

    return a
};