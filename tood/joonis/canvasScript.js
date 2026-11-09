function joon(){
    const canvas = document.getElementById('canvas'); //määrame canvas element'
    //joon - линия
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.strokeStyle="blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280); //lõpppunkt
        tx.stroke();
    }
}
function puhasta() {
    const canvas = document.getElementById('canvas'); //määrame canvas element'
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.clearRect(0,0,400,400);
    }
}
function kolmnurk(){
    const canvas = document.getElementById('canvas'); //määrame canvas element'
    //kolmnurk
    if(canvas.getContext){
        let tx = canvas.getContext('2d'); //2d tasand
        tx.beginPath();
        tx.fillStyle="blue";
        tx.strokeStyle="red";
        tx.lineWidth = 3;
        tx.moveTo(50, 50); //alguspunkt
        tx.lineTo(200, 280);
        tx.lineTo(30,350);
        tx.lineTo(50,50);//lõpppunkt
        tx.fill(); //taust
        tx.stroke(); //välisjoon
    }
}
function ristkylik() {
    const canvas = document.getElementById('canvas'); //määrame canvas element'
    let l=document.getElementById('laius');
    let k=document.getElementById('kyrgus');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        tx.fillStyle="red";
        tx.fillRect(100,150,l.value,k.value);
    }
}
//ümberjoon - окружность
//ring - круг
function ring() {
    const canvas = document.getElementById('canvas'); //määrame canvas element'
    const r=document.getElementById('raadius');
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        //tx.beginPath();
        tx.strokeStyle="black";
        tx.fillStyle="yellow";
        tx.arc(100,100, r.value, 0, 2*Math.PI, true); //x,y -keskpunkt, R-raadius
        tx.fill();
        //tx.stroke();
    }
}
function pilt() {
    const canvas = document.getElementById('canvas'); //määrame canvas element'
    //kolmnurk
    if (canvas.getContext) {
        let tx = canvas.getContext('2d'); //2d tasand
        const fail=new Image();
        fail.src="https://picsum.photos/100/100?random=1";
        fail.onload=()=>{
            tx.drawImage(fail, 50, 50, 100, 100);
        }
    }
}
function koik(){
    puhasta();
    joon();
    kolmnurk();
    ristkylik();
    ring();
    pilt();
}
// lisa wp sõnastiku vähemalt 5 meetodid mis oli täna kasutatud