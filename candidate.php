<?php include 'config.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Candidates Applied</title>
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
            tbody {
                background-color: #ebedf3;
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
                <a class="navbar-brand" href="candidate.php" style="color: #003366">Candidates Applied</a>
            </div>
        </nav>
        <div id="mySidenav" class="sidenav">
            <a href="index.php" id="jobs">Home <i class="fa-solid fa-house" width="30" height="24" style="padding-left:118px" class="d-inline-block align-text-top"></i></a>
            <a href="candidate.php" id="blog">Candidates Applied <i class="fa-solid fa-user" width="30" height="24" style="padding-left:4px" class="d-inline-block align-text-top"></i></a>
            <a href="contact.php" id="contact">Contact <i class="fa-solid fa-message" width="30" height="24" style="padding-left:105px" class="d-inline-block align-text-top"></i></a>
        </div>
        <div class="content" style="padding-left: 240px; padding-top: 30px">
            <div style="padding-right: 20px; padding-top: 10px;">
                <table class="table table-hover table-bordered" style="border-color: #036">
                    <thead style="background-color: #69c;">
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Candidate Name</th>
                            <th scope="col">Applied For</th>
                            <th scope="col">Position</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Year of Passout</th>
                            <th scope="col">Mail ID</th>
                        </tr>
                    </thead>
                    <tbody style="background-color: #ebedf3;">
                    <?php $sql="SELECT `candname`,`compname`,`position`,`qualification`,`year`, `mail` FROM `candidates`";
                    $result=mysqli_query($conn,$sql);
                    $i=0;
                    if($result->num_rows > 0) {
                        //output
                        while($row = $result->fetch_assoc()) {   
                            echo"
                        <tbody>
                            <tr>                  
                                <td>".++$i."</td>
                                <td>".$row['candname']."</td>
                                <td>".$row['compname']."</td>
                                <td>".$row['position']."</td>
                                <td>".$row['qualification']."</td>
                                <td>".$row['year']."</td>
                                <td>".$row['mail']."</td>
                                </tr>";
                            }}
                            else{
                                echo"";
                            }?>
                    </tbody>
                </table>
            </div>
        </div>
    
</body>
</html>