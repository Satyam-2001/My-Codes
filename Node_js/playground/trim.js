const trim = (str) => {
    const len = str.length - 1
    let start , end;
    for(let i in str){
        if(str[i] !== " ") {
            start = i
            break
        }
    }
    for(let i = len; i>start ; i--){
        if(str[i] !== " "){
            end = i
            break;
        }
    }
    s = ""
    for(; start <= end ; start++){
        if(!(str[start] === " " && str[start-1] === " ")) 
            s += str[start]
    }
    return s;
}

console.log(trim("    S   at    yam   ") )