

function filterText(text:string,listOfBadWord:Array<string>):String{
    for(let x = 0 ; x < listOfBadWord.length ; x++){
        let regExStr:string = `${listOfBadWord[x]}`
        let regEx = new RegExp(regExStr,'g') 
        
        text = text.replace(regEx, maskingString(listOfBadWord[x]))
    }
    return text
}

function maskingString(text:string):string{

    let c:Array<string> =  text.split('')

    for( let u = 0 ; u < c.length; u++){
      if(u != 0 && u != c.length -1 ){
            c[u] = '*'
        }
    }
    return c.join("")

}