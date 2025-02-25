function skillsMember() {
    var skills = {
        name: "John Doe",
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        // Method
        calculate: function() {
            return this.skills.length;
        }
    }
    return skills;
}