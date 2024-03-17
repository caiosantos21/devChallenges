function lengthOfLastWord(s: string): number {
    // const a = s.split(' ').filter(r=>r!== '')

    // return a[a.length-1].length
    const a = s.trim()

    return a.length - a.lastIndexOf(' ') - 1
};