import * as IdeaController from '../controllers/ideaController.js';

export function setupDashboard() {
    // Setup dashboard interactions
    IdeaController.fetchIdeas().then(displayIdeas);
}

function displayIdeas(ideas) {
    // Render ideas in the dashboard
}
