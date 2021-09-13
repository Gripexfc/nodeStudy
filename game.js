//接收拼接进来的值

module.exports = function(user) {
    let random = Math.trunc(Math.random() * 4);
    switch(random) {
        case 1:
            //石头
            console.log('电脑出了石头')
            break;
        case 2:
            //剪刀
            console.log('电脑出了剪刀')
            break;
        case 3:
            //布
            console.log('电脑出了布')
            break;
    }
    
    if (user != 0 && user != 1 && user != 2) {
        console.log(user,'请使用正确的出拳方式')
    } else {
        if(user === random) {
            return '平局'
        } else if(
            user == 1 && random == 3 ||
            user == 2 && random == 1 ||
            user == 3 && random == 2
        ) {
            return '你输了'
        } else {
            return '你赢了'
        }
    }
}

