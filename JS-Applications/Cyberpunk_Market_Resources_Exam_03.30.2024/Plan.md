Authentication Features
Login Validation:

Ensure the form cannot be submitted with empty fields.
Implement form field checks before making an API call.
Login API Call:

Make an API call with the user's credentials.
Handle success or failure responses correctly.
Register Validation:

Check that passwords match and that fields are not empty.
Prevent form submission if validations fail.
Register API Call:

Make an API call with new user data.
Handle responses and errors correctly.
Logout:

On logout, make an API call to invalidate the session.
Clear local session storage.
Navigation Bar
Navigation for Logged-In Users:

Show appropriate links (e.g., Logout) for authenticated users.
Navigation for Guests:

Show login and registration links for guests.
Home Page
Display Static Content:
Ensure the home page text and image are displayed correctly.
Dashboard Page
Market Page Content:
Display a message if there are no items in the market.
Show correct item information if available.
CRUD Operations
Create Item:

Validate that all fields are filled before submission.
Ensure the correct API call is made, including headers with the auth token.
Details Page:

Make an API call to fetch the item details.
Show correct information based on the user's role (guest, user, owner).
Edit Item:

On opening the edit form, populate fields with the current item data.
Validate the form and send the correct API call with headers.
Delete Item:

Show a confirmation dialog before deletion.
Make an API call to delete the item and handle the user response from the confirmation dialog.
Notification System
Show Notifications for Actions:
Display notifications for successful or failed operations.