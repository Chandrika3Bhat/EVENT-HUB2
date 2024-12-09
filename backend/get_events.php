// backend/get_events.php
<?php
include 'config/db.php';

$query = "SELECT * FROM events";
$result = $conn->query($query);

$events = [];
while ($row = $result->fetch_assoc()) {
    $events[] = $row;
}

echo json_encode($events);
?>
