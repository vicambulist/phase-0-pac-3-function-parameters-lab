// Test 1 //
function introduction(name) {
    return `Hi, my name is ${name}.`; 
}

introduction(Aki);

// Test 2 //
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`; 
}

introductionWithLanguage(Bret, JavaScript);
introductionWithLanguage(Demitry, Ruby);


// Test 3 // 
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`; 
}

introductionWithLanguageOptional(Bret, SQL);
introductionWithLanguageOptional(Demitry, Ruby);
