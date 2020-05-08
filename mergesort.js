function MergeSort(array) {
	if (array.length == 1) {
  return array
  }
  
  var mid = Math.ceil((array.length)/2)
  var left = array.slice(0,mid);
  var right = array.slice(mid);
  
  var left_ar = MergeSort(left)
  var right_ar = MergeSort(right)
  
  /*onsole.log(left_ar)
  console.log(right_ar)*/
 
  return merge(left_ar,right_ar)
}


function merge(ar1,ar2){
	var sorted_array = [];
	while (ar1.length != 0 && ar2.length != 0) {
		if (ar1[0] < ar2[0]) {
    	sorted_array.push(ar1[0])
      ar1.splice(0,1)
    }
    else {
      sorted_array.push(ar2[0])
      ar2.splice(0,1)
    }
  }
  
  while (ar1.length != 0){
  	sorted_array.push(ar1[0])
    ar1.splice(0,1)
  }
  
  while (ar2.length != 0){
  	sorted_array.push(ar2[0])
    ar2.splice(0,1)
  }
  
  return sorted_array
}


var ar0 = [1,2,3,4,1,6,11,1,59,2]
var ar1 = [1,2,8,4,1,6]
var ar2 = [4,1,5,2]
var ar3 = [4,1]

var init_ar = ar0
console.log("Initial array")
console.log(init_ar)
var sorted_ar = MergeSort(init_ar)
console.log("Sorted array")
console.log(sorted_ar)
