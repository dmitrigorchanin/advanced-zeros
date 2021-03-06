module.exports = function getZerosCount(number, base) {
    var res = 0;
    let count = 0;
    let sqrt = 1;
    
    arr = [2,3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]

    for (var i = 0, length = arr.length; i<length;i++){
        if (base%arr[i]===0){
            count = arr[i];
        }
    }
    while((base%count) === 0){
        base = base/count;
        sqrt++;
    }

    for (var i = count; i<number; i=i*count){
        res=res+Math.floor(number/i);
    }
    
    return (Math.floor(res/(sqrt-1)));
  }