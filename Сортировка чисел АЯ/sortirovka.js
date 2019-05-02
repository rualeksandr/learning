let mas = [7,5,33,550,-101,2,-99,-5,3.1,-3,0,3,0];

console.log(sort(mas));

function sort(arr){
    let maxNum,
        posMaxNum,
        result = [];

    function getMax(arr){     
        maxNum = arr[0];
        posMaxNum = 0;   

        for(let i = 1; i < arr.length; i++){

            if(maxNum > arr[i]){
            }else if(maxNum < arr[i]){
                maxNum = arr[i];
                posMaxNum = i;
            }else if(maxNum === arr[i]){
                maxNum = arr[i];
                posMaxNum = i;
            }else{
                console.log('Error: В массиве не число! (' + i + '. ' + arr[i] + ')');
            }
        } 
        result.unshift(maxNum);
        arr.splice(posMaxNum, 1);

        if(arr.length > 1){
            getMax(arr);
        }else if(arr.length > 0){
            result.unshift(arr[0]);
        }else{
            console.log('Error: В массиве нехватает элементов для сравнения!');
        }
    }
    getMax(arr);
    return result;
}

// console.log(5-(-10)); // 15 
// console.log(-10-5); // -15
// Если результат вычитания > 0, то a наибольшее
// Если результат вычитания < 0, то b наибольшее