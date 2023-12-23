var qua=document.getElementById("quantity")
var protitle=document.getElementById('protitle').innerHTML
var showpic=document.getElementById('showpic')
var offer=document.getElementById('offer')
var sizesel=document.getElementsByClassName('sizeselect')

var size='Small'
var choosencolor='Yellow'

const decrement=()=>{
    // console.log('dec')
    if(Number(qua.innerHTML)>1){
    qua.innerHTML=Number(qua.innerHTML)-1
    }
}
const increment=()=>{
    // console.log('inc')
    qua.innerHTML=Number(qua.innerHTML)+1
    
}
let sizename=["Small","Medium","Large","Extra Large","XXL"]
const sizeselect=(name,index)=>{
    size=name
    for(i=0;i<sizesel.length;i++){
        if(i==index){
            sizesel[i].innerHTML=`<div id="sizeselect"><input name='diffsize' type="radio" checked>${sizename[i]}</div></div>`
        }
        else{
            sizesel[i].innerHTML=`<div><input name='diffsize' type="radio">${sizename[i]}</div></div>`
        }
    }  
}
const addcart=()=>{
    console.log(size)
    let addmsg=document.getElementById('addmsg')
    addmsg.innerHTML=`${protitle} with Color ${choosencolor} and Size ${size} added to cart`
}

// colorselect
let colorsec=document.querySelectorAll('.colors')
let colors=["rgb(243, 184, 57)","rgb(94, 245, 94)","rgb(151, 56, 230)","pink"]
const colorselect=(index,color)=>{ 
    console.log(colorsec)
    for(i=0;i<colorsec.length;i++){
        if(i==index){
            choosencolor=color
            colorsec[i].innerHTML=`<div  class="colorsec" style="border:2px solid ${colors[i]}"><div  style="background-color:${colors[i]}"><i class="fa fa-check" aria-hidden="true"></div></div>`
        }
        else{
            colorsec[i].innerHTML=`<div  class="colorsec"><div  style="background-color:${colors[i]}"></div></div>`
        }
    }
}

// picture select
let picsec=document.querySelectorAll('.pics')
let pics=["image/pic1.webp","image/pic2.webp","image/pic3.webp","image/pic4.webp"]
const picselect=(index)=>{
    for(i=0;i<picsec.length;i++){
        if(index===i){
            picsec[i].innerHTML=`<img id="imgselect" src="${pics[i]}"/>`
            showpic.innerHTML=`<img src="${pics[i]}" alt="loading"/>`
        }
        else{
            picsec[i].innerHTML=`<img src="${pics[i]}"/>`
        }
    }
}

// offer
const off=()=>{
    let a=Math.round(((19999-12999)/19999)*100)
    offer.innerHTML=`${a}% Off`
}
off()