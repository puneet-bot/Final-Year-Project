

export function returnData(){
    var arr = [];
    var count = 0;
    var constituency = ['Delhi','Rajasthan','Uttar Pradesh','Maharashtra','Gujarat','Haryana','Uttarakhand']
    for(var i =0; i < 21 ; i){
      for(var j = i ; j < 3 * (count + 1) ; j++){
          var data = {
              "name" : String.fromCharCode(65 + j),
              "constituency" : `${constituency[count]}`
          }
          arr.push(data)
      }
      count++;
      i = j
    }
    return arr;
}

