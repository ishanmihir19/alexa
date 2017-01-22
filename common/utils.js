
function generateRandomNumber(startNo, endNo) {
    return Math.floor(Math.random() * endNo) + startNo;
}

module.exports = {
    generateRandomNumber: generateRandomNumber
}