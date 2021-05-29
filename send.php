<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  $name = htmlspecialchars($name);
  $phone = htmlspecialchars($phone);
  $name = urldecode($name);
  $phone = urldecode($phone);
  $name = trim($name);
  $phone = trim($phone);
  
  if(mail("frizzzbe@yandex.ru", "Заявка на консультацию", "Имя клиента: ".$name.". \nТелефон клиента: ".$phone,"From: sender@reg.ru \r\n")) {
    header('Location: index.html');
  }
?>