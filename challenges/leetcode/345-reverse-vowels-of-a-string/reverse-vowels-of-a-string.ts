function reverseVowels(s: string): string {
    let l = 0
    let r = s.length - 1
    let a = s.split('')
    let aL = ''
    let aR = ''


    while (l <= r) {
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', "O", "U"].includes(a[l])) {
            aL = a[l]
        } else {
            l++
        }
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', "O", "U"].includes(a[r])) {
            aR = a[r]
        } else {
            r--
        }
        if (aL != '' && aR != '') {

            a[l] = aR
            a[r] = aL

            aL = ''
            aR = ''
            r--
            l++

        }
    }




    return a.join('')
};