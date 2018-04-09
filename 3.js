function getClosingParen(sentence, openingParenIndex){
    let queue = [];
    for(let i = openingParenIndex + 1; i < sentence.length; i++){
      let curr = sentence[i]
      if(curr === ')' && queue.length === 0) return i
      if(curr === ')' && queue.length > 0) queue.pop()
      if(curr ==='(') queue.push(sentence[i])
    }
}