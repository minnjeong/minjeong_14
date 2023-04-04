let random = []

while (random.length < 3) {
    const bbRandom = Math.floor(Math.random() * 10)
    if (!random.includes(bbRandom)) {
        random.push(bbRandom)
    }
}
console.log(random)