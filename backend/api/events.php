<?php
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit;
}

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");  // Allow CORS
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Include the database connection
require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the input data
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input
    if (!isset($data['name']) || !isset($data['date'])) {
        http_response_code(400);
        echo json_encode(["error" => "Missing event name or date"]);
        exit;
    }

    try {
        // Insert the event into the database
        $stmt = $pdo->prepare("INSERT INTO events (name, date) VALUES (:name, :date)");
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':date', $data['date']);
        $stmt->execute();

        echo json_encode(["message" => "Event added successfully"]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Failed to add event: " . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
