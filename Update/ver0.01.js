    //　変数の宣言
var access_count = 0
var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    // bodyからURLを探す
$('body').html($('body').html().replace(exp,"<a href='$1'>$1</a>"));
