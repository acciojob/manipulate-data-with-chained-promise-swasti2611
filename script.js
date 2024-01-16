//your JS code here. If required.

let output=document.getElementById('output')

function promise1(){
	return new Promise((resolve,reject) => {
		let arr=[1,2,3,4]
		setTimeout(() => {
			resolve(arr)
		},3000)
	})
}

function promise2(arr){
	return new Promise((resolve,reject) => {
		let oddarr=arr.filter((res) => res%2!=0)
		//let oddarr=arr.filter((res) => res%2==0)
		setTimeout(() => {
			resolve(oddarr)
		},1000)
	})
}
function promise3(arr){
	return new Promise((resolve,reject) => {
		let doublearr=arr.map((val) => val*2)
		setTimeout(() => {
			resolve(doublearr)
		},2000)
	})
}
promise1().then((res) => promise2(res))
	.then((res) => {
		output.innerHTML=res
		return promise3(res)
	}).then((res) => output.innerHTML=res)

    