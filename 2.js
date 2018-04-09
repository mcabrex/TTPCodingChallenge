function stringReformatting(s,k){
    let filteredS = s.split('').filter(str => str!=='-').reverse()
    let newS = []
    for(let i = filteredS.length-1; i >= 0; i--){
      newS.push(filteredS[i])
      if(i % k === 0 && i > 0) newS.push('-')
    }
    return newS.join('')
}
  