// List of current users
let current_users = ['john', 'mary', 'james', 'sarah', 'emma'];

// List of new users
let new_users = ['John', 'linda', 'James', 'peter', 'susan'];

// Convert all usernames in current_users to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(user => user.toLowerCase());

// Loop through new_users to check availability
for (let new_user of new_users) {
    // Convert new_user to lowercase for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();

    // Check if new_user is in current_users_lower (case insensitive)
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
