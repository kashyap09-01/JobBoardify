<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous">
        
        <style>
            body {
                background-image: url("register_bg.jpg");
                background-size: cover;
            }
            #mySidenav a {
                margin-top: 50px;
                position: absolute;
                left: -185px;
                transition: 0.3s;
                padding: 10px;
                width: 220px;
                text-decoration: none;
                font-size: 20px;

                color: white;
                border-radius: 0 5px 5px 0;
            }

            #mySidenav a:hover {
                left: 0;
            }
            #jobs {
                top: 20px;
                background-color: #003366;
            }

            #blog {
                top: 80px;
                background-color: #036;
            }

            #contact {
                top: 140px;
                background-color: #003366;
            }

            #about {
                top: 200px;
                background-color: #003366;
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
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="contact.php" style="color: #003366">Contact Us</a>
            </div>
        </nav>
        <div id="mySidenav" class="sidenav">
            <a href="index.php" id="jobs">Home <i class="fa-solid fa-house" width="30" height="24" style="padding-left:118px" class="d-inline-block align-text-top"></i></a>
            <a href="candidate.php" id="blog">Candidates Applied <i class="fa-solid fa-user" width="30" height="24" style="padding-left:4px" class="d-inline-block align-text-top"></i></a>
            <a href="contact.php" id="contact">Contact <i class="fa-solid fa-message" width="30" height="24" style="padding-left:105px" class="d-inline-block align-text-top"></i></a>
        </div>
        <div class="container px-4 text-center" style="margin-top: 20px;padding-left: 240px;">
            <div class="row gx-5">
                <div class="col">
                    <div class="p-3 border bg-light" style="color: #036;">
                        <h4>About Us</h4>
                        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Nemo pariatur asperiores totam voluptate et neque quasi perspiciatis,
                            illo numquam inventore temporibus vitae, fugit nisi nostrum molestiae earum 
                            voluptatibus, doloribus doloremque?</p>
                    </div>
                </div>
                <div class="col">
                    <div class="p-3 border bg-light" style="color: #036;">
                        <h4>Contact</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Quaerat itaque nostrum, ipsa vel iusto tempore minus minima, eaque
                            fugiat laudantium dolores earum eligendi quidem, ea deleniti alias iure? 
                            Aperiam, accusamus.</p>
                    </div>
                </div>
            </div>
        </div>
</body>
</html>
