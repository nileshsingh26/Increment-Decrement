let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let p = document.querySelector('p');
let btn3=document.querySelector('.btn3');
let h4=document.querySelector('h4');

let cont=0;
let click=0;

btn1.addEventListener('click',function(){
    console.log('a');
    cont++;
    click++;
    p.innerText =`${cont}`;
    h4.innerText=`${click}`;
});

btn2.addEventListener('click',function(){
    if (cont>0)
    {
        console.log('b');
        cont--;
        click++;
        p.innerText=`${cont}`;
        h4.innerText=`${click}`;
    }
});

btn3.addEventListener('click',function(){
    console.log('c');
    cont=0;
    click=0;
    p.innerText=`${cont}`;
    h4.innerText=`${click}`;
});
















