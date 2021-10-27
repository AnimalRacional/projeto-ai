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
        document.write("<input class=\"question-input\" type=\"radio\" id=\"" + cur.toLowerCase() + "\" name=\"" + name + "\" value=\"" + cur + "\">");
        document.write("<label class=\"radio-label\" for=\"" + cur.toLowerCase() + "\"> " + cur + "</label><br>")
    });
    if(other){
        document.write("<input class=\"question-input\" type=\"radio\" id=\"other" + name.toLowerCase() + "\" name=\"" + name + "\" value=\"Other\">");
        document.write("<label class=\"radio-label\" for=\"other\"> Outro</label> ")
        document.write("<input class=\"question-other-text\" type=\"text\" id=\"other" + name.toLowerCase() + "text\"><br>")
    }
}