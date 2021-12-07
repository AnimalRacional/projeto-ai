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
    let frm = document.forms["formulario"].getElementsByTagName("input");
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
            if(result == ""){ alert('Por favor escreva algo se escolher a opção "Outro"!'); return false;}
        }
        
    }
    return true;
}

let form = document.getElementById("formulario");
window.onload = () => {
    form = document.getElementById("formulario");
    addControls();
    form.appendChild(submitButton());
}

function submitButton(){
    let smbtn = document.createElement("input");
    smbtn.setAttribute("type", "submit");
    smbtn.classList.add("submit-button");
    smbtn.id = "submeter";
    smbtn.setAttribute("value", "Submeter");
    return smbtn;
}

let lineBreak = () => { form.appendChild(document.createElement("br")); }
function addToForm(control){
    form.appendChild(control);
    lineBreak();
}



/* Versão antiga
function radioButton(label, name, options, other=true){
    document.write("<label class=\"question-label\" for=\"" + name + "\">" + label + "</label><br>");
    options.forEach(cur => {
        document.write("<input required class=\"question-input\" type=\"radio\" id=\"" + name.toLowerCase() + cur.toLowerCase() + "\" name=\"" + name + "\" value=\"" + cur + "\">");
        document.write("<label class=\"radio-label\" for=\"" + name.toLowerCase() + cur.toLowerCase() + "\"> " + cur + "</label><br>")
    });
    if(other){
        document.write("<input required class=\"question-input\" type=\"radio\" id=\"other" + name.toLowerCase() + "\" name=\"" + name + "\" value=\"Other\">");
        document.write("<label class=\"radio-label\" for=\"other\"> Outro</label> ")
        document.write("<input class=\"question-other-text\" type=\"text\" name=\"other" + name.toLowerCase() + "text\" id=\"other" + name.toLowerCase() + "text\"><br>")
    }
}
*/
/*
parâmetros:
label -> A pergunta
name -> o nome dos radio buttons
options -> as opçoes que se pode escolher
other -> se tem ou não um botão "Outro:"
*/
function radioButton(label, name, options, other=true){
    let lbl = document.createElement("label");
    lbl.setAttribute("for", name);
    lbl.classList.add("question-label");
    lbl.innerHTML = label;
    addToForm(lbl);
    options.forEach(cur => {
        // Criar o radio button em sí
        form.appendChild(singleRadioButton(name.toLowerCase() + cur.toLowerCase(), name, cur));

        // Criar a label para o radio button
        addToForm(radioLabel(name.toLowerCase() + cur.toLowerCase(), cur));
    })
    if(other){
        form.appendChild(singleRadioButton("other" + name.toLowerCase(), name, "Other"));
        form.appendChild(radioLabel(`other ${name.toLowerCase()}`, "Outro"));
        addToForm(radioOtherText(name.toLowerCase()))
    }
}

function radioOtherText(name){
    let txt = document.createElement("input");
    txt.classList.add("question-other-text");
    txt.setAttribute("type", "text");
    txt.name = `other${name.toLowerCase()}text`;
    txt.id = `other${name.toLowerCase()}text`;
    return txt;
}

function radioLabel(whatfor, text){
    let curlbl = document.createElement("label");
    curlbl.classList.add("radio-label");
    curlbl.setAttribute("for", whatfor);
    curlbl.innerHTML = text;
    return curlbl;
}

function singleRadioButton(id, name, value){
    let inp = document.createElement("input");
    inp.required = true;
    inp.classList.add("question-input");
    inp.setAttribute("type", "radio");
    inp.id = id;
    inp.name = name;
    inp.value = value;

    return inp;
}
/* Função antiga
function numeric(label, name){
    document.write(
        "<label class=\"question-label\" for=\"" + name.toLowerCase() + "\">" + label + "</label><br>"
    )
    document.write(
        "<input required max=40 class=\"question-input\" id=\"" + name.toLowerCase() + "\" name=\"" + name + "\" type=\"number\"><br>"
    )
}
*/

function numeric(label, name){
    addToForm(makeLabel(name.toLowerCase(), label));
    let num = document.createElement("input");
    num.setAttribute("type", "number");
    num.max = 40;
    num.classList.add("question-input");
    num.id = name.toLowerCase();
    num.name = name;
    addToForm(num);
}

function makeLabel(whatfor, text){
    let lbl = document.createElement("label");
    lbl.classList.add("question-label");
    lbl.setAttribute("for", whatfor.toLowerCase());
    lbl.innerHTML = text;
    return lbl;
}

/*
parâmetros:
label -> a pergunta
name -> o id das text boxes
*/
/* Função antiga
function textBox(label, name){
    document.write(
        "<label class=\"question-label\" for=\"" + name.toLowerCase() + "\">" + label + "</label><br>"
    )
    document.write(
        "<input required class=\"question-input\" id=\"" + name.toLowerCase() + "\" name=\"" + name + "\" type=\"text\"><br>"
    )
}
*/

function textBox(label, name){
    addToForm(makeLabel(name.toLowerCase(), label));
    let txt = document.createElement("input");
    txt.setAttribute("type", "text");
    txt.required = true;
    txt.classList.add("question-input");
    txt.id = name.toLowerCase()
    txt.name = name;
    addToForm(txt);
}