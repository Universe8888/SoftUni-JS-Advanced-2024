// Function to fetch all motorcycle records
export async function getAllMotorcycles() {
    const response = await fetch(`${BASE_URL}/data/motorcycles?sortBy=_createdOn%20desc`);
    const data = await response.json();
    return data;
  }
  
  // Function to create a new motorcycle record
  export async function createMotorcycle(motorcycle, token) {
    const response = await fetch(`${BASE_URL}/data/motorcycles`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-Authorization': token
      },
      body: JSON.stringify(motorcycle)
    });
  
    const data = await response.json();
    return data;
  }
  
  // Function to update a motorcycle record
  export async function updateMotorcycle(motorcycle, id, token) {
    const response = await fetch(`${BASE_URL}/data/motorcycles/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'X-Authorization': token
      },
      body: JSON.stringify(motorcycle)
    });
  
    const data = await response.json();
    return data;
  }
  
  // Function to delete a motorcycle record
  export async function deleteMotorcycle(id, token) {
    const response = await fetch(`${BASE_URL}/data/motorcycles/${id}`, {
      method: 'DELETE',
      headers: { 'X-Authorization': token }
    });
  
    const data = await response.json();
    return data;
  }
  