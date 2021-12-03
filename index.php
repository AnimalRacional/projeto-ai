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
        <div class="local">
            <img class="logo" src="imgs/eped.jpg" alt="logo-eped">
        </div>
        <h1>Projeto de AI</h1>
        <form id="formulario" onsubmit="return validateAnswers()" action="results.php" method="POST">
            <label class="question-label" for="email">E-mail</label><br>
            <input required class="email-input" id="email" name="email" type="email"><br>
            <h6 class="email-text">O seu e-mail não vai ser associado às suas respostas, e vai ser apenas utilizado para identificar quem respondeu ao questionário.</h6>

            <script>
                numeric("Idade", "idade");
                textBox("Nacionalidade", "nacionalidade");
                radioButton("Género", "genero", ["Masculino", "Feminino"], true);
                radioButton("Identidade de Género", "identidadegenero", ["Cisgénero", "Transsexual"])
                radioButton("Orientação Sexual", "sexualidade", ["Heterossexual", "Homossexual", "Bisexual", "Assexual", "Pansexual"], true)
                textBox("Religião", "religiao");
                radioButton("É praticante da sua religião?", "praticante", ["Sim", "Não", "Sou ateu"], true);
                textBox("Qual é o seu hobbies favoritos?", "hobbies");
                radioButton("Qual o seu plano para o futuro?", "planofuturo", ["Faculdade", "Trabalho"], true);
                textBox("Resumidamente, qual a sua opinião da EPED?", "opiniaoescola");
                textBox("Qual sua Disciplina Favorita", "disciplina")
            </script>

            <input class="submit-button" value="Submeter" id="submeter" type="submit">
        </form>
    </div>
</body>
</html>