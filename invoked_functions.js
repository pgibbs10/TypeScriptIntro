var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Paul', 'Gibbs'));
(function (first, last) {
    console.log(first + " " + last);
})('Adam', 'Prusse');
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
//# sourceMappingURL=invoked_functions.js.map