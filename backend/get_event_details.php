// backend/get_event_details.php
<?php
include 'config/db.php';

$id = $_GET['id'];

$query = "SELECT * FROM events WHERE id = $id";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(['error' => 'Event not found']);
}
?>
