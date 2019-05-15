var pilih;
var angka = [];
var max, min;

do{ 
    pilih = parseInt(prompt("Masukan angka!: "));
    if(pilih * 2 || pilih == 0){
        angka.push(pilih);
    }
}while(pilih * 2 || pilih == 0);    

angka = angka.sort((a,b) => a - b);

console.log(angka);

for(i in angka){
    if(i == 0){
        max = angka[i];
        min = angka[i];
    }else{
        if(angka[i] > max)
            max = angka[i];
        if(angka[i] < min)
            min = angka[i];
    }
}

console.log ("Angka terbesar: " + max);
console.log ("Angka terkecil: " + min);
