const findTheNumberOfOddNumbers = (array) => {
let count = 0;
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 == 1){
    count++;
  }  
}
return count;
};

const getIndexOfFalseItem = (myArray) => {
  return myArray.findIndex((element) => element == false)
};

const filterNumbers = (array) => {
  let onlyNumbers = array.filter((number) => typeof number === 'number');
  return onlyNumbers
};

const generateEmailAddress = (pArray) => {
  let mailArray = pArray.map((personName) => {
   return personName.toLowerCase() + "@gmail.com"
  })
  return mailArray
}
export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
