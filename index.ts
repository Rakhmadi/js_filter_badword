let str = "Lorem ipsum dolor dolor sit apmet";

let listOfArr = ["Lorem","dolor","apmet"];

for(let x = 0 ; x < listOfArr.length ; x++){
    let regExStr:string = `${listOfArr[x]}`
    let regEx = new RegExp(regExStr,'g') 
    
    str = str.replace(regEx, maskingOfString(listOfArr[x]))
}
console.log(str)


function maskingOfString(text:string):string{

    let c:Array<string> =  text.split('')

    for( let u = 0 ; u < c.length; u++){
      if(u != 0 && u != c.length -1 ){
            c[u] = '*'
        }
    }
    return c.join("")

}