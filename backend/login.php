// backend/login.php
<?php
include 'config/db.php';

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;

$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    echo json_encode(['success' => true, 'user' => $user]);
} else {
    echo json_encode(['success' => false]);
}
?>
