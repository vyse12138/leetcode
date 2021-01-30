const findMedianSortedArrays = (nums1, nums2) => {

    //merge two arrays
    let mergedArray = nums1.concat(nums2);
    let mergedArrayLength = mergedArray.length;

    //sort merged array
    mergedArray.sort((a,b) => (a -b));

    //return median 
    if (mergedArrayLength % 2){
        return mergedArray[Math.floor(mergedArrayLength/2)];
    }
    else{
        return (mergedArray[mergedArrayLength/2-1] + mergedArray[mergedArrayLength/2])/2;
    }
    
};  