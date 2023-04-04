// 입력?
let input = prompt("컴퓨터가 숫자를 생성하였습니다.", "답을 맞춰보세요!");





// 게임 종료
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break
    attempts++
}

if (guess === 'q') {
    console.log('다음에 또 도전해주실꺼죠?')
} else {
    console.log(`${attempts}번 만에 맞히셨습니다`)
    console.log('게임을 종료합니다.')
}


//참고
let maximum = parseInt(prompt('최대 숫자를 설정해주세요!'))
while (!maximum) {
    maximum = parseInt(prompt('유효한 숫자를 설정해주세요!'))
}

const targetNum = Math.floor(Math.random() * maximum) + 1
console.log(targetNum)

let guess = parseInt(prompt('첫 번째 시도!'))
let attempts = 1

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break
    attempts++
    if (guess > targetNum) {
        guess = prompt('아쉽지만 숫자가 너무 커요!')
    } else {
        guess = prompt('아쉽지만 숫자가 너무 작아요!')
    }
}

if (guess === 'q') {
    console.log('다음에 또 도전해주실꺼죠?')
} else {
    console.log('추카포카~ 정답입니다!!')
    console.log(`${attempts}번 만에 맞히다니 대단한걸요 :D`)
}