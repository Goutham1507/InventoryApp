<?php
if(isset($_POST) && !empty($_POST))
{
    $username=$_POST['username'];
    $password=$_POST['password'];
    if($username=='admin'&& $password=='admin')
    {
        ?>
  {
      "success":true,
      "secret":"This is the secret no one knows except the admin"
  }<?php
    }else{
        ?>
        {
            "success":false,
      "secret":"Invalid Credentials"
        }
    <?php }
}else{
    ?>
    {
        "success":false,
      "secret":"only post acess is accepted"   
    }
      
<?php
}
?>