function addcomment()
{
    var x=document.getElementsByClassName("comment");
    addid=x.length;
    addList=document.getElementById("comment_container");
    var text = document.createElement('div');
    text.id = 'comment_' + addid;
    text.classList.add("comment");
    text.innerHTML = "<input type='text' value='' class='input_comment'><button class='reply' onclick='addInput(this)' > Submit </button>";
    addList.appendChild(text);
}

function addInput(x)
{
    x.parentElement.innerHTML=x.previousSibling.value+"<button onclick='reply(this)'> Reply </button>";
}

function reply(x)
{
    var text = document.createElement('div');
    text.style.paddingLeft="15px";
    text.innerHTML = "<input type='text' value='' class='input_reply'><button class='reply' onclick='replysubmit(this)'> Submit Reply</button>";
    x.parentElement.appendChild(text);
}

function replysubmit(x)
{
    var str=x.previousSibling.value+"<button class='reply' onclick='reply(this)'> Reply </button>";
    var text = document.createElement('div');
    text.innerHTML = str;
    x.parentElement.appendChild(text);
    x.previousSibling.remove();
    x.remove();
    
}
