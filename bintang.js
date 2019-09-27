function segitiga(x){
    var bar = 0
for(var d = 0 ; d < x ; d++){
    if(d % 2 !== 0){
        bar += 1
        
    }
}
var hasil = ''
for (var i = 0 ; i <= x ; i++ ){
    var bt = ''
     if(i % 2 !== 0){
        
        for(var r = bar ; r > 0 ; r-- ){
            bt += ' '
        }
        for(var j = 0 ; j < i ; j++){
            bt += '*'  ;
            
        }
   
        bar -= 1
        hasil +=   bt + '\n'
    }

    
    
    
}

return hasil
}
function segitigadua(y){
    var hasil = ''
    var ren = 0
    for (var i = y ; i >= 0 ; i-- ){
        var bt = ''
        if(i % 2 !== 0){
            for(var k = 0 ; k < ren ; k++){
               bt += ' '
               
            }
               

            
         
            for(var j = i ; j > 0 ; j--){
                bt += '*'  ;
                
            }
       
            ren += 1
            hasil +=   bt + '\n'
        }
        
    }
    
    return hasil
}


function bintang(arr){
if(arr % 2 == 0){
    return 'angka harus ganjil'
}
var sgt1 = segitiga(arr)
var tengah = ' '
for(var c = 0 ; c < arr-2 ; c++){
    tengah += '*'
} 
var sgt2 = segitigadua(arr)


return sgt1  + tengah + '\n' + sgt2

}


console.log(bintang(5))
//   *     1
//  ***    3
// *****   5
//  ***    3
// *****   5
//  ***    3
//   *     1

console.log(bintang(7))

//    *     1
//   ***    3
//  *****   5
// *******  7
//  *****   5
// *******  7
//  *****   5
//   ***    3
//    *     1


console.log(bintang(3))

//  *    1
// ***   3
//  *    1
// ***   3
//  *    1



