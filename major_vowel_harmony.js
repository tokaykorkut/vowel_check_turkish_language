const isHasMajorVowelHarmony = (word) => {
    
    const hardVowels = new Map([['a','a'],['ı','ı'],['o','o'],['u','u']])
    const softVowels = new Map([['e','e'],['i','i'],['ö','ö'],['ü','ü']])
    const AllVowels = new Map([...hardVowels,...softVowels])
    let check = true
    let listOfLetters = word.split('')
    
    listOfLetters = listOfLetters.filter(letter=>letter===AllVowels.get(letter))
    
    if(hardVowels.get(listOfLetters[0])){
        check = listOfLetters.some(letter=>letter === softVowels.get(letter))
    }

    if(softVowels.get(listOfLetters[0])){
        check = listOfLetters.some(letter=>letter === hardVowels.get(letter))
    }
    return !check
}

export default isHasMajorVowelHarmony