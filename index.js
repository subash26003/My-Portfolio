function submit(){
    var newrec=document.getElementById("recommendation").value;
    if( newrec !=''){
    var para=document.getElementById("recom_card2");
    var newpara=document.createElement("p");
    newpara.innerHTML=newrec;
    newpara.classList.add("recom_card");
    para.parentNode.insertBefore(newpara,para.nextSibling);
    
}
}