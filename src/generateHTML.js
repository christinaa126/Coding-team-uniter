const renderManager = (Employees) => {
    // check each element in the Employees array
    for (let i = 0; i < Employees.length; i++) {
        if (Employees[i].getRole() === "Manager") {
            return `<div class="col my-4">
                        <div class="card border-primary h-100" style="width: 100%;">
                            <div class="card-header background text-white">
                                <h3>${Employees[i].name}</h3>
                                <p>${Employees[i].getRole()}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${Employees[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${Employees[i].email}">${Employees[i].email}</a></li>
                                <li class="list-group-item">Office number: ${Employees[i].officeNumber}</li>
                            </ul>
                        </div>
                    </div>`  
        }
    }
};

const renderEngineer = (Employees) => {
    let cards = [];
    for (let i = 0; i < Employees.length; i++) {
        if (Employees[i].getRole() === "Engineer") {
            cards.push(
                `<div class="col my-4">
                    <div class="card h-100 border-primary" style="width: 100%;">
                        <div class="card-header background text-white">
                            <h3>${Employees[i].name}</h3>
                            <p>${Employees[i].getRole()}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${Employees[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${Employees[i].email}">${Employees[i].email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${Employees[i].github}">${Employees[i].github}</a></li>
                        </ul>
                    </div>
                </div>`
            );
        }
    }
    
    return cards.join("");
};

const renderIntern = (Employees) => {
    let cards = [];
    for (let i = 0; i < Employees.length; i++) {
        if (Employees[i].getRole() === "Intern") {
            cards.push(
                `<div class="col my-4">
                    <div class="card border-primary h-100" style="width: 100%;">
                        <div class="card-header background text-white">
                            <h3>${Employees[i].name}</h3>
                            <p>${Employees[i].getRole()}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${Employees[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${Employees[i].email}">${Employees[i].email}</a></li>
                            <li class="list-group-item">School: ${Employees[i].school}</li>
                        </ul>
                    </div>
                </div>`
            );
        }
    }
    return cards.join("");
};


const generateHTML = (Employees) => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Coding Team Uniter</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="./style.css">
        </head>
    
        <body>
            <header>
                <h1 class="display-4 font-weight-bolder">My Team Profile</h1>
            </header>

            <div class="mx-auto teamCard" style="width: 60%;">
          
                <div class="row row-cols-1 row-cols-md-3">
                    ${renderManager(Employees)}
                    ${renderEngineer(Employees)}
                    ${renderIntern(Employees)}
                    
                </div>
            </div>
    
        </body>
    </html>
    `;
};

module.exports = generateHTML;