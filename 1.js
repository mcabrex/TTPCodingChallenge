function sumOfTwo(a,b,v){
    let solutions = {}
    for(let i = 0; i < a.length; i++){
      let x = v - a[i]
      solutions[x] = true
    }
    for(let i = 0; i < b.length; i++){
      if(solutions[b[i]]) return true
    }
    return false
}