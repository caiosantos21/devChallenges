function isPalindrome(x: number): boolean {
  

   if(x<0 || x!=0 && x%10 ==0 ) return false;

    var reverse = 0;
    var copy = x;

   while (copy > 0) {
      const digit = copy % 10;
      reverse = reverse * 10 + digit;
      copy = ~~(copy / 10);
    }

    return reverse == x;
};

