const findTheOldest = function(people) {
    people.map((person) =>  {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear()
        }});
    people.sort((a, b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
