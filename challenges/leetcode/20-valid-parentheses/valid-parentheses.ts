function isValid(s: string): boolean {
    if (s.length < 2) {
        return false
    }
    
    const arr = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (arr.length > 0 && arr[arr.length - 1] === '(') {
                arr.pop()
            } else {
                return false
            }
        } else if (s[i] === '}') {
            if (arr.length > 0 && arr[arr.length - 1] === '{') {
                arr.pop()
            } else {
                return false
            }
        } else if (s[i] === ']') {
            if (arr.length > 0 && arr[arr.length - 1] === '[') {
                arr.pop()
            } else {
                return false
            }
        } else {
            arr.push(s[i])
        }
    }

    return arr.length === 0 ? true : false
};