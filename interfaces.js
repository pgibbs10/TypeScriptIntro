function profile(user) {
    return "Welcome, " + user.firstName + " " + user.lastName;
}
var realUser = {
    email: 'test@test.com',
    firstName: 'Paul',
    lastName: 'Gibbs'
};
console.log(profile(realUser));
console.log(realUser.email);
//# sourceMappingURL=interfaces.js.map