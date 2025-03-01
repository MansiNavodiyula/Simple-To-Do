const ipbox=document.getElementById("ip-box");
const list=document.getElementById("list");
function addItem(){
    if(ipbox.value==='')
    {
        alert("write smtg");
    }
    else{
        let li=document.createElement("li");
        li.innerText=ipbox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ipbox.value="";
    dataSave();
}
list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        dataSave();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        dataSave();
    }
},false);
function dataSave()
{
    localStorage.setItem("reCords",list.innerHTML);
}
function savedLocal()
{
    list.innerHTML=localStorage.getItem("reCords");
}

savedLocal();