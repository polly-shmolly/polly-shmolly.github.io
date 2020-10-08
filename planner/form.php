<?php
  $name = trim(strip_tags($_POST["name"]));
  $sex = trim(strip_tags($_POST["sex"]));
  $email = trim(strip_tags($_POST["email"]));
  $country = trim(strip_tags($_POST["country"]));
  $subject = "Регистрация на сайте url_вашего_сайта";
  $msg = "Ваши данные формы регистрации:\n" ."name: $name\n" ."sex: $sex\n" ."Your email: $email\n" ."Country: $country";
  $headers = "Content-type: text/plain; charset=UTF-8" . "\r\n";
  $headers .= "From: Your_name <your_email>" . "\r\n";
  $headers .= "Bcc: ваш_email". "\r\n";
  if(!empty($name) && !empty($sex) && !empty($email) && !empty($country) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    mail($email, $subject, $msg, $headers);
    echo "Thank you! You have successfully registered.";
    }
?>
