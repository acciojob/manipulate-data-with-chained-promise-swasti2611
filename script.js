
let ans = document.getElementById("output");

function promise1() {
    let arr = [1, 2, 3, 4];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    });
}

function promise2(arr) {
    return new Promise((resolve, reject) => {
        let oddarr = arr.filter((res) => res % 2 != 0)

        setTimeout(() => {
            resolve(oddarr)
        }, 1000)
    })
}

function promise3(arr) {
    return new Promise((resolve, reject) => {
        let doublearr = arr.map((val) => val * 2)
        setTimeout(() => {
            resolve(doublearr)
        }, 2000)
    })
}

promise1().then((arr) => {
    return promise2(arr);
}).then((arr) => {
    ans.innerHTML = arr;
    return promise3(arr);
}).then((arr) => {
    ans.innerHTML = arr;
});
