//Reference the container where cards will live
const container = document.getElementById('employee-container');

const api_url = 'https://jsonplaceholder.typicode.com/users';

//Fetch data from API

async function fetchEmployee() {
    try{

        container.innerHTML = `
            <div class = "w-100 my-5 text-center">
                <div class = "spinner-border text-primary" role="status"></div>
                <p class = "text-muted">Loading Employee Records</p>
            </div>
        `;
        //3 second pause here 
        await new Promise(resolve => setTimeout(resolve,3000));
    

            const response = await fetch(api_url);
            if(!response.ok){
                throw new Error(`${response.status}`);
                
            }
            const employees_data = await response.json();



            container.innerHTML = ``;
        //Render cards
             displayEmployees(employees_data);
    }catch(err){
        console.error('Error Fetching employees data',err);
        container.innerHTML = `<div class = "w-100 text-center my-5"><p>${err}</p></div>`;
        
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