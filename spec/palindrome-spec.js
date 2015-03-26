describe('palidrome', function() {
    describe('count(arr)', function() {
        it('phrases should contain 2 palindromes', function() {
            var phrases = ['JavaScript is fun', 'Evil olive', 'Never odd or even'];

            expect(palindrome.count(phrases)).toEqual(2);
        });

        it('phrases should not contain 3 palindromes', function() {
            var phrases = ['JavaScript is fun', 'Evil olive', 'Never odd or even'];

            expect(palindrome.count(phrases)).not.toEqual(3);
        });
    });
});
