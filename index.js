// hello js functions parameter lab

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

const info = introductionWithLanguage('effie', 'js')
console.log(info);

function introductionWithLanguageOptional(name, language='JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

const info2 = introductionWithLanguageOptional('effie')
console.log(info2);