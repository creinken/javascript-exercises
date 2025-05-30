const findTheOldest = function(people) {
    let oldest = people[0];
    people.forEach((person) => {
        if (getAge(oldest) < getAge(person)) {
            oldest = person;
        }
    });
    return oldest;
};

function getAge(person) {
    if (!person.yearOfDeath) {
        return 2025 - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
