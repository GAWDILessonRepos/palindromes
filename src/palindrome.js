var palindrome = {};

palindrome.count = function(arr){
  pali = [];
  arr.map(function(phrase){
    var a = phrase.split(' ').join('').toLowerCase();
    if (a === a.split('').reverse().join('')){
      pali.push(a);
    }
  });
  return pali.length;
};

// palindrome.count = function(){};
