const getRandom = () => parseInt(Math.random()*20) + 1

export const randomNumber = cb => {
    let num = {}

    for(let i = 0; i<10000; i++){
        let n = getRandom()
        if(!num[n]) num[n] = 0
        num[n]++
    }
    cb(num)
}