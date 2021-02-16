/*
© 2021 iannl. You may use this code, but it needs to have credit
*/
function makeAlert(head, body) {
    var h = head.replace(/<.*>/, '')
    if (head.includes('<') && head.includes('>')) {
        var h2 = head.substring(head.lastIndexOf("<") + 1, head.lastIndexOf(">"))
        var hUrl = h2.substring(h2.lastIndexOf("[") + 1, h2.lastIndexOf("]"))
        var hContents = h2.replace('['+hUrl+']', '')
        var h2 = '<a href="'+hUrl+'">'+hContents+'</a>'
        var h = h + h2
    }

    var b = body.replace(/<.*>/, '')
    if (body.includes('<') && body.includes('>')) {
        var b2 = body.substring(body.lastIndexOf("<") + 1, body.lastIndexOf(">"))
        var bUrl = b2.substring(b2.lastIndexOf("[") + 1, b2.lastIndexOf("]"))
        var bContents = b2.replace('['+bUrl+']', '')
        var b2 = '<a href="'+bUrl+'">'+bContents+'</a>'
        var b = b + b2
    }

    if (head.includes('{') && head.includes('}')) {
        var h2b = head.substring(head.lastIndexOf("{") + 1, head.lastIndexOf("}"))
        var hbFunc = h2b.substring(h2b.lastIndexOf("[") + 1, h2b.lastIndexOf("]"))
        var hbContents = h2b.replace('['+hbFunc+']', '')
        var h = h.replace('{'+h2b+'}', '')
        var h2b = '<button onclick="'+hbFunc+'">'+hbContents+'</button>'
        var h = h + h2b
    }

    if (body.includes('{') && body.includes('}')) {
        var b2b = body.substring(body.lastIndexOf("{") + 1, body.lastIndexOf("}"))
        var bbFunc = b2b.substring(b2b.lastIndexOf("[") + 1, b2b.lastIndexOf("]"))
        var bbContents = b2b.replace('['+bbFunc+']', '')
        var b = b.replace('{'+b2b+'}', '')
        var b2b = '<button onclick="'+bbFunc+'">'+bbContents+'</button>'
        var b = b + b2b
    }

    if (head.includes('(') && head.includes(')')) {
        var h2c = head.substring(head.lastIndexOf("(") + 1, head.lastIndexOf(")"))
        var hcSrc = h2c.substring(h2c.lastIndexOf("[") + 1, h2c.lastIndexOf("]"))
        var hcAlt = h2c.replace('['+hcSrc+']', '')
        var h = h.replace('('+h2c+')', '')
        var h2c = '<img width="400px" src="'+hcSrc+'" alt="'+hcAlt+'">'
        var h = h2c + h
    }

    if (body.includes('(') && body.includes(')')) {
        var b2c = body.substring(body.lastIndexOf("(") + 1, body.lastIndexOf(")"))
        var bcSrc = b2c.substring(b2c.lastIndexOf("[") + 1, b2c.lastIndexOf("]"))
        var bcAlt = b2c.replace('['+bcSrc+']', '')
        var b = b.replace('('+b2c+')', '')
        var b2c = '<img width="400px" src="'+bcSrc+'" alt="'+bcAlt+'"><br>'
        var b = b2c + b
    }
    document.getElementById('alertJS').innerHTML='<a href="javascript:void(0)" class="closebtn" onclick="closeAlert()">&times;</a><div class="overlay-content"><p class="head">'+h+'</p><p class="body">'+b+'</p></div>'
}

function openAlert() {
  document.getElementById("alertJS").style.width = "100%";
}

function closeAlert() {
  document.getElementById("alertJS").style.width = "0%";
}
