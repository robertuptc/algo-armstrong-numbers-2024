// How can you make this more scalable and reusable later?

function findArmstrongNumbers(arr) {
    let answer = []
    
    for (let i = 0; i < arr.length; i++) {
        let splittedArr = arr[i].toString().split('')
        let numLength = splittedArr.length
        let armstronNum = 0

        for (let  j = 0; j < splittedArr.length; j++)
            {
                armstronNum += Number(splittedArr[j]) ** numLength
            }
        if (armstronNum == arr[i]) {
            answer.push(armstronNum)
        }
    }
    return answer
};

module.exports = {findArmstrongNumbers}

