// Your code here
function saturdayFun(str = "roller-skate"){
  return (`This Saturday, I want to ${str}!`)
}

let mondayWork=function(str="go to the office"){
  return (`This Monday, I will ${str}.`)
}
function wrapAdjective(s='*') {
return function(str = 'special'){
    return `You are ${s}${str}${s}!`
  }
}

let calculator = {
  add: function(a,b){return`${a}+${b}`},

};
