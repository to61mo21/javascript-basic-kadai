// 変数numに0～30までのランダムな整数を代入する
let num = Math.floor(Math.random() * 30);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が3、6、9、12、18、21、24、27であれば、「3の倍数です」という文字列を出力する
if (num % 3 === 0) {
    console.log("3の倍数です");
}
 // 変数numの値が5であれば、「当たりです」という文字列を出力する
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
 // 変数numの値が15であれば、「3と5の倍数です」という文字列を出力する
else if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}


// それ以外のときは、「num」という文字列を出力する
else {
console.log(num);
}


