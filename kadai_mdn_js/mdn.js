//調てやった方法1
const dateName = new Date();

const date = () => {
    //dateを定義
    var year = dateName.getFullYear();
    var month = dateName.getMonth() +1;
    var day = dateName.getDate();
    //year、month、dayという変数に格納

    console.log (year + "年" + month + "月" + day + "日");
}

date();


//別な表示の仕方
const today = new Date();

console.log(today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日');