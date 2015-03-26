var palindrome = {};

palindrome.count = function(arr){
  return arr.filter(isPali).length;
};

isPali = function(phrase){
  var a = phrase.split(' ').join('').toLowerCase();
  return a === a.split('').reverse().join('');
};
