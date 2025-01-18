
let qtty=0;



function plus(){
  return qtty++;
   
}
function minus(){
    
    return qtty--;
}

function addcartbtn(){
document.getElementById('min').style.display='inline'
document.getElementById('plus').style.display='inline'
document.getElementById('ordertext').innerHTML=qtty;

}

function qttyshowplus(){
    plus();
    document.getElementById('qttycard').innerHTML=qtty;
}
function qttyshowminus(){
    minus();
    document.getElementById('qttycard').innerHTML=qtty;
}