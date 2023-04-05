let random = []

while (random.length < 3) {
    const bbRandom = Math.floor(Math.random() * 10)
    if (!random.includes(bbRandom)) {
        random.push(bbRandom)
    }
}
function bb() {
    const bb = document.getElementById('user-input').value
    if (bb.length !== 3) {
        alert('숫자 3개를 입력하세요')
    }
}

let b = 0
let s = 0

for (let i = 0; i < 3; i++) {
    const random = random[i]
    const bb = Number(bb[i])

    if (random === bb) {
        s++
    } else if (random.includes(bb)) {
        b++
    }
}

let temp_html = `<li>
                    <p>${실행횟수}시도</p>
                    <p>${b}B${s}S</p>
                </li>`
$('#try-list').append(temp_html)


if (s === 3) {
    alert('3 스트라이크 아웃! 게임을 종료합니다!')
}

