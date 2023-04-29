<?php include 'config.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career</title>
    <!-- Bootstrap CSS -->
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous">
        <!-- Custom CSS -->
        <link href="portal_style.css" rel="stylesheet">

        <!-- Font Awesome CSS -->
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"/>
        <style>
            body {
                background-image: url("register_bg.jpg");
                background-size: cover;
            }
            .p-3 {
                background-color: rgb(237, 237, 237);
                box-shadow:-8px 11px 10px 0px rgb(123 110 110) ;
                color: #036;
            }
            b{
                padding-right: 2px;
            }
            .form-label{
                text-align: left;
            }
        </style>
</head>
<body>
<nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="career.php" style="color: #031640;">Job Portal</a>
            </div>
        </nav>
    <div>
        <h2 style="color: #036;text-align: left;font-size: 40px;padding-top: 70px; padding-left: 70px">
        Job Portal</h2>
        <p style="color: #036; text-align: left;font-size: 20px;padding-top: 10px; padding-bottom: 10px; padding-left: 70px">
        Best Jobs Available Matching Your Skills</p>
    </div>
    <div class="container px-4" style="margin-top: 20px;padding-left: 240px;">
        <div class="row">
            <?php 
            $sql="SELECT cname,position,jdesc,ctc,skills FROM jobs";
            $result=mysqli_query($conn,$sql);
            if($result->num_rows>0) {
                while($rows=$result->fetch_assoc()) {
                    echo'
            <div class="col-md-4" style="padding-bottom: 10px;" >
                <div class="p-3 border bg-light">
                <h3 style="text-align: center">'.$rows['position'].'</h3>
                <h4 style="text-align: center">'.$rows['cname'].'</h4>
                <p >'.$rows['jdesc'].'</p>
                <p ><b>Skills Required :</b>'.$rows['skills'].'</p>
                <p><b>CTC :</b>'.$rows['ctc'].'</p>
                <button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style="background-color: #036;">
            Apply Now
            </button>
                </div>
            </div>';
                }
            }
            ?>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style="color: #036;">Apply for the Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form method="POST">
                            <div class="mb-3">
                                <label for="candidate name" class="form-label" style="color: #036;">Name</label>
                                <input type="text" class="form-control" id=" " name="candname">
                            </div>
                            <div class="mb-3">
                                <label for="company name" class="form-label" style="color: #036;">Applying For</label>
                                <input type="text" class="form-control" id=" " name="compname">
                            </div>
                            <div class="mb-3">
                                <label for="position" class="form-label" style="color: #036;">Position</label>
                                <input type="text" class="form-control" id=" " name="position">
                            </div>
                            <div class="mb-3">
                                <label for="skills" class="form-label" style="color: #036;">Qualification</label>
                                <input type="text" class="form-control" id=" " name="qualification">
                            </div>
                            <div class="mb-3">
                                <label for="year" class="form-label" style="color: #036;">Passout Year</label>
                                <input type="text" class="form-control" id=" " name="year">
                            </div>
                            <div class="mb-3">
                                <label for="year" class="form-label" style="color: #036;">Mail ID</label>
                                <input type="text" class="form-control" id=" " name="mail">
                            </div>
                            <button type="submit" class="btn btn-primary" name="apply">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous">
    </script>
</body>
</html>