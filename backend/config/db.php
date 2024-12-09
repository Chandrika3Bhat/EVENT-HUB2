// backend/config/db.php
<?php
$servername = "localhost";
$username = "root";
$password = "@Chandu3Bhat";
$dbname = "college_event_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
