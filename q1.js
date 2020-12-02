const twoSum = (nums, target)=> {
    //for loop the nums array
    for (let i = 0; i < nums.length; i++){
        //store the value of the first parameter 
        let firstNum = nums[i];
        //for loop the nums array starting after the first parameter
        for (let j = i + 1; j < nums.length; j++){
            //return when targets are found
            if(target - firstNum == nums[j]){
                return [i,j];
            }
        }
    }
}
