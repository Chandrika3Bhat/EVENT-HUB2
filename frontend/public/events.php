<?php
include('../includes/header.php');
include('../includes/db.php');

// Fetch events from the database
$sql = "SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC";
$result = $conn->query($sql);

?>

<div class="events">
    <h1>Upcoming Events</h1>
    <table>
        <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Action</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while ($event = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $event['event_name'] . "</td>";
                echo "<td>" . $event['event_date'] . "</td>";
                echo "<td>" . $event['event_time'] . "</td>";
                echo "<td>" . $event['venue'] . "</td>";
                echo "<td><a href='register_event.php?event_id=" . $event['event_id'] . "'>Register</a></td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='5'>No upcoming events</td></tr>";
        }
        ?>
    </table>
</div>

<?php
include('../includes/footer.php');
?>
