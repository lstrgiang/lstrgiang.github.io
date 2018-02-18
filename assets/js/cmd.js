var greeting = "Greetings Programs", 
    cursor = "<span>&#9646;</span>",
    cmd = $('#cmd');

function type(el,text,pos,no){
    ctext = text.substring(0,pos)+(pos%2?cursor:cursor);
    $(el).html(ctext);
    if(pos==text.length){
        $(el).html(text+cursor);
    }else{
        window.setTimeout('type("'+el+'","'+text+'",'+(pos+1)+','+1+');',70);
    }
}

$(document).ready(function(){
    cmd.append(cursor);
    type('#cmd',greeting,0);
})
