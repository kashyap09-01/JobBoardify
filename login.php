<?php include 'config.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <!-- Bootstrap CSS -->
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous">
        <!-- Custom CSS -->
        <style>
            body{
                background-image: url("register_bg.jpg");
                background-size: cover;
            }
            .container-sm {
                width: 50%;
            }
            #register-box {
                background-color: rgb(237, 237, 237);
                box-shadow:-8px 11px 10px 0px rgb(123 110 110) ;
                color: rgb(77 77 189 / 87%);
                margin-left: 400px;
                margin-right: 150px;
                margin-top: 100px;
                padding: 20px;
            }
            .form-floating {
                font-size: 20px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                padding-top: 10px;
            }
        </style>

        <!-- Font Awesome CSS -->
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"/>
</head>
<body>
<div class="container-sm" id="register-box" >
            <form method="POST">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder=" " name="email">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder=" " name="password">
                <label for="floatingPassword">Password</label>
            </div>
            <div id="submit">
                <button type="submit" class="btn btn-primary" name="Login">Submit</button>
            </div>
            <p style="text-align: center;">New User?<br>Create Account <a href="register.php">Sign Up</a>
        </div>    
</body>
</html>