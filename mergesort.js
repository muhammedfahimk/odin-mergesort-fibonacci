function mergeSort (array){
    if  (array.length <=1){
      return array;
  } else {
    let half = Math.floor(array.length/2);
    let firstHalf = array.slice(0,half);
    // console.log(firstHalf)
    let secondHalf = array.slice(half, array.length);

    return merge(mergeSort(firstHalf),mergeSort(secondHalf));

  }

  }

  function merge (firstHalf, secondHalf){
    let sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

     while (leftIndex < firstHalf.length && rightIndex < secondHalf.length) {
      if (firstHalf[leftIndex] < secondHalf[rightIndex]) {
        sorted.push(firstHalf[leftIndex]);
        leftIndex++;
      } else {
        sorted.push(secondHalf[rightIndex]);
        rightIndex++;
      }
    }

      while (leftIndex < firstHalf.length) {
      sorted.push(firstHalf[leftIndex]);
      leftIndex++;
    }

     while (rightIndex < secondHalf.length) {
      sorted.push(secondHalf[rightIndex]);
      rightIndex++;
    }

    return sorted;  

  }


  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));


