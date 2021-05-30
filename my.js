

function returnData(){
    var obj = {};
    for(var i =1 ;i<=100;i++){
        var data = {
            "name" : `user${i}`,
            "age" : `${parseInt(Math.random()*80 + 1)}`,
        }
        obj[i] = data;
    }
    return obj;
}
