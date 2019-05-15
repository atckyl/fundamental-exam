var bentuk1 = (size) => {
    
    var bintang = '';

    for(var i = 1; i <= size; i++){
        for(var j = 1; j <= size; j++){
            bintang += '*';
        }
        bintang += '<br>';
    }

    console.log(bintang);
    document.getElementById("generate").innerHTML = bintang;
}

var bentuk2 = (size) => {
    
    var bintang = '';

    for(var i = 1; i <= size; i++){
        for(var j = 1; j <= i; j++){
            bintang += '*';
        }
        bintang += '<br>';
    }

    console.log(bintang);
    document.getElementById("generate").innerHTML = bintang;
}

var bentuk3 = (size) => {
    
    var bintang = '';

    for(var i = 1; i <= size; i++){
        
        for(var k = size; k > i; k--){
            bintang += '&nbsp;&nbsp;';
        }
        for(var j = 1; j <= i; j++){
            bintang += '*';
        }
        
        bintang += '<br>';
    }

    console.log(bintang);
    document.getElementById("generate").innerHTML = bintang;
}

var generate = () => {
    var type = parseInt(document.getElementById("type").value);
    var size = document.getElementById("size").value;

    switch(type){
        case 1:
            bentuk1(size);
            break;
        case 2:
            bentuk2(size);
            break;
        case 3:
            bentuk3(size);
    }
    console.log(type,size);
}