function checkObj(obj, checkProp) {

  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found"

}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))