<?php
    function encodeString($string){
        return str_replace("|", "%bar%", str_replace(":", "%colon%", $string));
    }

    function decodeString($string){
        return str_replace("%bar%", "|", str_replace(":", "%colon%", $string));
    }

    function alert($string){
        echo "<script>alert(\"" . $string . "\");</script>";
    }

    /*
    if(array_key_exists("email", $_POST)){
        $file = fopen("respostas.txt", "a");
        $emails = fopen("emails.txt", "r");
        $go = false;
        if($emails){
            $go = true;
            while($line = fgets($emails)){
                alert($line);
                if(strpos($line, $_POST["email"])){
                    $go = false;
                    alert("already");
                    break;
                }
            }
        }
        fclose($emails);
        if($go){
            $addEmail = fopen("emails.txt", "w");
            if($addEmail){
                fwrite($addEmail, $_POST["email"] . "\n");
                fclose($addEmail);
                foreach($_POST as $key=>$value){
                    if($key != "email"){
                        $key = encodeString($key);
                        $value = encodeString($value);

                        fwrite($file, $key . ":" . $value . "|");
                    }
                }
                fwrite($file, "\n");
                fclose($file);
                fclose($addEmail);
            }
            else{
                alert("Algo de errado não está certo!");
            }
        }
    }
*/

    if(array_key_exists("email", $_POST)){
        $ok = true;
        $emailCheck = fopen("emails.txt", "r");
        if($emailCheck){
            while($line = fgets($emailCheck)){
                if(strpos($line, $_POST["email"]) !== false){
                    $ok = false;
                    break;
                }
            }
        }
        else{alert("Algo correu mal a registrar o email!"); $ok = false;}
        fclose($emailCheck);
        if($ok){
            $respostas = fopen("respostas.txt", "a");
            $writingEmail = fopen("emails.txt", "a");
            if($writingEmail){
                fwrite($writingEmail, $_POST["email"] . "\n");
                if($respostas){
                    foreach($_POST as $key=>$value){
                        if($key != "email"){
                            $key = encodeString($key);
                            $value = encodeString($value);
    
                            fwrite($respostas, $key . ":" . $value . "|");
                        }
                    }
                    fwrite($respostas, "\n");
    
                }
                else{
                    alert("Não conseguiu abrir as respostas!");
                }
                fclose($respostas);
            }
            else{
                alert("Não conseguiu registrar o email!");
            }
            fclose($writingEmail);

        }
    }
?>