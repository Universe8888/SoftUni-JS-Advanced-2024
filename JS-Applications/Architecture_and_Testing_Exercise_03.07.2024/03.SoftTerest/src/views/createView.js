// This function will be responsible for setting up the Create Idea view
function setupCreateView() {
    // Get the form element
    const createForm = document.getElementById('create-idea-form');
    
    // Check if the form exists to avoid errors in pages without this form
    if (createForm) {
        createForm.addEventListener('submit', handleCreateIdea);
    }
}

// This function will handle the form submission
async function handleCreateIdea(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Extract data from form
    const title = document.getElementById('ideaTitle').value;
    const description = document.getElementById('ideaDescription').value;
    const imageURL = document.getElementById('inputURL').value;

    // Validate input (basic validation for demonstration)
    if (title.length < 6 || description.length < 10 || imageURL.length < 5) {
        alert('Please make sure all fields meet their required length!');
        return;
    }

    try {
        // Use the createIdea function from the ideaController
        await window.ideaController.createIdea(title, description, imageURL);
        // Clear the form after successful creation
        document.getElementById('ideaTitle').value = '';
        document.getElementById('ideaDescription').value = '';
        document.getElementById('inputURL').value = '';

        // Optionally, redirect user to dashboard or display a success message
        showView('dashboard-view'); // This assumes you have a function to change views
        window.ideaController.fetchIdeas(); // Refresh the list of ideas if on the dashboard
    } catch (error) {
        console.error('Failed to create idea:', error);
        alert('Failed to create the idea: ' + error.message);
    }
}

// Call setupCreateView when the script loads
document.addEventListener('DOMContentLoaded', setupCreateView);