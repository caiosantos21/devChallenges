function lengthOfLastWord(s: string): number {
    const a = s.split(' ').filter(r=>r!== '')

    return a[a.length-1].length
};