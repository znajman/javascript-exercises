const findTheOldest = function(people) {
    
    const ordered = people.sort((personA,personB) => {
        aAge = ((Object.hasOwn(personA,'yearOfDeath') ? (personA.yearOfDeath - personA.yearOfBirth) : ((new Date().getFullYear())) - personA.yearOfBirth)) 
        bAge = ((Object.hasOwn(personB,'yearOfDeath') ? (personB.yearOfDeath - personB.yearOfBirth) : ((new Date().getFullYear())) - personB.yearOfBirth)) 
        return aAge < bAge ? 1 : -1;
    });
    return ordered[0];

};

// Do not edit below this line
module.exports = findTheOldest;
