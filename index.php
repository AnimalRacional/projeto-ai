<!DOCTYPE html>
<html>
<head>
    <!-- TODO mudar o titulo -->
    <title>Projeto AI</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/main.css">
    <script src="scripts/main.js"></script>
</head>

<body>
    <div id="main-area">
        <!-- TODO colocar titulo aqui-->
        <h1>Colocar titulo aqui</h1>
        <form id="formulario" onsubmit="return validateAnswers()" action="results.php" method="POST">
            <label class="question-label" for="email">E-mail</label><br>
            <input required class="email-input" id="email" name="email" type="email"><br>
            <h6>O seu e-mail não vai ser associado às suas respostas, e vai ser apenas utilizado para identificar quem respondeu ao questionário</h6>

            <script>
                textBox("Pergunta genérica", "pergunta_generica")
                radioButton("Bom dia", "radio_button_test", ["test", "trjei", "wow"])
            </script>

            <input class="submit-button" value="Submeter" id="submeter" type="submit">
        </form>
    </div>
</body>


</html>