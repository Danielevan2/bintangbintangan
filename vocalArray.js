function vocalArray(arr) {
    let vocal = 'aiueo'
    let result = 0
    //looping baris
    for (let i = 0; i < arr.length - 1; i++) {
        // looping kolom
        for (let y = 0; y < arr[i].length - 1; y++) {
            if (vocal.includes(arr[i][y]) && vocal.includes(arr[i][y + 1]) && vocal.includes(arr[i + 1][y]) && vocal.includes(arr[i + 1][y + 1])) {
                result += 1
            }
        }
    }
    return result


}
let input = [
    ['a', 'i', 'u', 'e', 'o'],
    ['o', 'u', 'e', 'k', 'l'],
    ['m', 'o', 'a', 'z', 'w'],
    ['k', 'b', 'c', 'r', 'v']
]
console.log(vocalArray(input))
// 3