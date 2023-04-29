<?php

$server='localhost';
$username='root';
$password='';
$database='jobs';

$conn= mysqli_connect($server,$username,$password,$database);

if($conn->connect_error) {
    die("Connection Failed:".$conn->connect_error);
}
echo"";

if(isset($_POST['submit'])) {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone_no=$_POST['phone_no'];
    $password=$_POST['password'];

    $sql = "INSERT INTO `users`(`name`, `email`, `phone_no`, `password`) VALUES ('$name','$email','$phone_no','$password')";
    if(mysqli_query($conn,$sql)){
        echo "Registration Succesful.";
        header("location:login.php");
    } else {
        echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
    }
}
session_start();
if(isset($_POST['Login'])) {
    $email=$_POST['email'];
    $password=$_POST['password'];

    $query="SELECT * FROM users WHERE `email`='$email' AND `password`='$password'";
    $result=mysqli_query($conn,$query);
    $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
    if(mysqli_num_rows($result)==1){
        header("location:index.php");
    }
    else{
        $error='email id or password is incorrect';
    }
}

if(isset($_POST['job'])){
    $cname=$_POST['cname'];
    $position=$_POST['position'];
    $jdesc=$_POST['jdesc'];
    $skills=$_POST['skills'];
    $ctc=$_POST['ctc'];

    $sql = "INSERT INTO `jobs`(`cname`, `position`, `jdesc`, `skills`, `ctc`) VALUES ('$cname','$position','$jdesc','$skills','$ctc')";
    if(mysqli_query($conn,$sql)){
        echo "";
    }
    else{
        echo "ERROR: Failed to Post the Job $sql. " . mysqli_error($conn);
    }
}

if(isset($_POST['apply'])) {
    $candname=$_POST['candname'];
    $compname=$_POST['compname'];
    $position=$_POST['position'];
    $qualification=$_POST['qualification'];
    $year=$_POST['year'];
    $mail=$_POST['mail'];

    $sql = "INSERT INTO `candidates`(`candname`, `compname`, `position`, `qualification`, `year`,`mail`) VALUES ('$candname','$compname','$position','$qualification','$year','$mail')";
    if(mysqli_query($conn,$sql)){
        echo "Applied Successfully.";
    }
    else{
        echo "ERROR: Failed to Post the Job $sql. " . mysqli_error($conn);
    }
}

?> 

