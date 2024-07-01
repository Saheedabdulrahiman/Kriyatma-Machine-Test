// 1-eliminate duplicate array

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }

// const arr = [3,4,9,3,8,0,4,9]
// const uniqueArr = removeDuplicates(arr)
// console.log(uniqueArr)

// 2- largest and smalles number in unsorted array

// function findLargestSmallest(arr){
//     let largest = arr[0];
//     let smallest = arr[0]

//     for(const number of arr){
//         largest = Math.max(largest,number);
//         smallest = Math.min(smallest,number)
//     }
//     return [largest,smallest]
// }

// const arr =[3,4,9,3,8,0,4,9];
// const largestAndSmallest = findLargestSmallest(arr)
// console.log(largestAndSmallest)

//3-  reverse a string

// function reverseString(string){
//     return string.split('').reverse().join('')
// }
// console.log(reverseString("KRIYATMA"))

// 4- longest word in a sentance

//  function findLogestWord(sentance){
//     let words  = sentance.split(" ");
//     let logestWord = "";
//     for (const  word of words){
//         if (word.length > logestWord.length){
//             logestWord = word;

//         }
//     }
//     return logestWord;
//  }

//  const sentance = "The quick brown fox jumps over the lazy dog"
//    const logestWordInSentance = findLogestWord(sentance)
// console.log(logestWordInSentance)
