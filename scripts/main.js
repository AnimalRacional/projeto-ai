// Verifica se uma string é um número
function isNumeric(num){
    if(typeof(num) != "string"){return false;}
    for(let i = 0; i < num.length; i++){
        if(num[i] < '0' || num[i] > '9'){ return false; }
    }
    return true && num.length > 0;
}

// Verifica se é um email válido
function isValidEmail(email){
    let dotSplit = email.split('.');
    return !(dotSplit.length-1 != 3 || email.split('@').length-1 != 1 || !isNumeric(dotSplit[0]) && email.endsWith("@eped.pt"))
}

// valida as respostas todas
function validateAnswers(){
    let frm = document.forms["formulario"]
    for(let i = 0; i < frm.length; i++){
        let cur = frm[i];
        if(cur.type == "email"){
            if(!isValidEmail(cur.value)){
                alert("Email inválido! Por favor use o seu e-mail institucional.")
                return false;
            }
        }
        else if(frm[i].type == "radio"){
            curRadio = [cur]
            for(i = i+1; i < frm.length; i++){
                if(frm[i].type == "radio" && frm[i].name == cur.name){
                    curRadio.push(frm[i]);
                }
                else{
                    break;
                }
            }
            if(curRadio[curRadio.length - 1].value != "Other") { i--; }
            result = "";
            for(let j = 0; j < curRadio.length; j++){
                if(curRadio[j].checked){result = curRadio[j].value; break;}
            }
            if(result == "Other"){
                result = frm[i].value;
            }
            if(result == ""){ alert("Escolha Inválida!"); return false;}
        }
        
    }
    return true;
}

/*
parâmetros:
label -> A pergunta
name -> o nome dos radio buttons
options -> as opçoes que se pode escolher
other -> se tem ou não um botão "Outro:"
*/
function radioButton(label, name, options, other=true){
    document.write("<label class=\"question-label\" for=\"" + name + "\">" + label + "</label><br>");
    options.forEach(cur => {
        document.write("<input required class=\"question-input\" type=\"radio\" id=\"" + name.toLowerCase() + cur.toLowerCase() + "\" name=\"" + name + "\" value=\"" + cur + "\">");
        document.write("<label class=\"radio-label\" for=\"" + name.toLowerCase() + cur.toLowerCase() + "\"> " + cur + "</label><br>")
    });
    if(other){
        document.write("<input required class=\"question-input\" type=\"radio\" id=\"other" + name.toLowerCase() + "\" name=\"" + name + "\" value=\"Other\">");
        document.write("<label class=\"radio-label\" for=\"other\"> Outro</label> ")
        document.write("<input class=\"question-other-text\" type=\"text\" id=\"other" + name.toLowerCase() + "text\"><br>")
    }
}

/*
parâmetros:
label -> a pergunta
name -> o id das text boxes
*/
function textBox(label, name){
    document.write(
        "<label class=\"question-label\" for=\"" + name.toLowerCase() + "\">" + label + "</label><br>"
    )
    document.write(
        "<input required class=\"question-input\" id=\"" + name.toLowerCase() + "\" name=\"" + name + "\" type=\"text\"><br>"
    )
}