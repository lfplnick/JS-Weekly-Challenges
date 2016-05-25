var array = [1,2,3,4,5];
var total = 0;

for (var i in array){
  total += array[i];
}

console.log("Total: " + total);

console.log("Array before: " + array);
var insertionPt = array.indexOf(2) + 1;
if (insertionPt !== 0) {
  array.splice(insertionPt, 0, 6);
  console.log("Array after: " + array);
} else {
  console.log("2 not in array!");
}
