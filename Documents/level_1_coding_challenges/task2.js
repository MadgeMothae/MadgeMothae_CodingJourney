function hasThree(a, b) {
    let sum = a + b;
    return (a === 3 || b === 3) && sum.toString().includes("3");
}


module.exports = { hasThree };


