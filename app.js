//Reference the container where cards will live
const container = document.getElementById('employee-container');

const api_url = 'https://jsonplaceholder.typicode.com/users';

//Fetch data from API

async function fetchEmployee() {
    try{
        const response = await fetch(api_url);
        const employees_data = await response.json();

        //Render cards
        displayEmployees(employees_data);
    }catch(err){
        console.error('Error Fetching employees data',err);
        container.innerHTML = `<p> Failed to load employees data</p>`;
        
    }
    
}

//Now here is the function to handle rendering the employees data and dynamic card creation. 
function displayEmployees(employeeArray) {
    employeeArray.forEach(e=>{
        
        const cardCol = document.createElement('div');
        cardCol.className = 'col-md-4';
        cardCol.innerHTML = `
            <div class = "card">
                <div class = "card-body">
                    <h4 class = "card-title">${e.name}</h4>   
                    <h5 class = "card-subtitle mb-1">${e.company.name || 'Software Engineer'}</h5> 
                    <div class = "card-text">
                        <p>Email : ${e.email}</p>
                        <p>City : ${e.address?.city || 'N/A'}</p>
                    </div>
            <button class = "btn btn-outline-primary">View Profile</button>
                </div>
            </div>
        `;

        container.appendChild(cardCol);
    });
    
}


fetchEmployee();