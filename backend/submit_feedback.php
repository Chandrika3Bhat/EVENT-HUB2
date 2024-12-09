// backend/submit_feedback.php
<?php
include 'config/db.php';

$data = json_decode(file_get_contents("php://input"));
$event_id = $data->event_id;
$feedback = $data->feedback;

$query = "INSERT INTO feedback (event_id, feedback) VALUES ($event_id, '$feedback')";
if ($conn->query($query) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>
