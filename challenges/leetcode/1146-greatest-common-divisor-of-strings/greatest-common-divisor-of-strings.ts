function gcdOfStrings(str1: string, str2: string): string {
    if ((str1 + str2) !== (str2 + str1)) {
        return ""
    }

    let len1 = str1.length
    let len2 = str2.length

    while (len2 != 0) {
        let temp = len2
        len2 = len1 % len2
        len1 = temp
    }

    return str1.substring(0, len1)
}