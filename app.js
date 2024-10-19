let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
// window huudasni hemjee
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.lineWidth=5;
let prevX=null;
let prevY=null;
let draw=false;
let clrs = document.querySelectorAll('.clr');
console.log(clrs);
let clrArr = Array.from(clrs);
// forEach -> massive forIn -> Object
clrArr.forEach(clr=>{
	clr.addEventListener("click",()=>{
		ctx.strokeStyle = clr.dataset.clr;
	});
});
window.addEventListener("mousedown",(e)=> draw=true );
window.addEventListener("mouseup",(e)=> draw=false);
window.addEventListener("mousemove", (e)=>{
    if(prevX==null || prevY==null || !draw){
		prevX=e.clientX;
		prevY=e.clientY;
	}
	console.log(e);
	let mouseX=e.clientX;
	let mouseY=e.clientY;
	ctx.beginPath(); // zurgiin zamiig ehluuleh
	ctx.moveTo(prevX,prevY); // mousenii bairshil
	ctx.lineTo(mouseX,mouseY); // lineTo:tuhain bairshild zurah,  zursan line-iig gargaj ireh
	ctx.stroke(); 
	prevX=e.clientX;
	prevY=e.clientY;
});
// clear canvas
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click',()=>{
    // alert();
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
// save canvas
let saveBtn = document.querySelector('.save');
saveBtn.addEventListener('click',()=>{
	let data = canvas.toDataURL('imag/png');
	let a = document.createElement('a');
	a.href=data;
	a.download="test.png";
	a.click();
});
let selectBtn = document.querySelector('.select');
let op = document.getElementsByTagName('select')[0];
selectBtn.addEventListener('click',()=>{
	ctx.lineWidth=op.value;
});

