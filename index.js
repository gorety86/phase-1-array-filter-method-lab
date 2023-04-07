const driversName = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversName, string) {
    return driversName.filter(function(driversName){
        return driversName.toLowerCase()=== string.toLowerCase()});
}

function  fuzzyMatch(driversName,string) {
    return driversName.filter(driversName => driversName.toLowerCase().startsWith
            (string.toLowerCase()));
}

function  matchName(driversName, argument) {
        return driversName.filter(function(driversName){
            return driversName.name === argument});
}
  