const generateTeam = (team) => {

  //Card Generator For Manager
  const generateManager = (manager) => {
    return `
    <div class="card employee-card shadow mb-5 rounded" style="width: 18rem;">
      <div class="card-header bg-primary">
        <h2 class="card-title text-light">${manager.getName()}</h2>
        <h3 class="card-title text-light"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="container bg-light">
        <div class="card-body">
          <ul class="list-group list-group-flush table-bordered">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: 
              <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  };

  //Card Generator For Engineer
  const generateEngineer = (engineer) => {
    return `
      <div class="card employee-card shadow mb-5 rounded" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h2 class="card-title text-light">${engineer.getName()}</h2>
          <h3 class="card-title text-light"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="container bg-light">
          <div class="card-body">
            <ul class="list-group list-group-flush table-bordered">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: 
                <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: 
                <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };

  //Card Generator For Intern
  const generateIntern = (intern) => {
    return `
      <div class="card employee-card shadow mb-5 rounded" style="width: 18rem;">
        <div class="card-header bg-primary">
          <h2 class="card-title text-light">${intern.getName()}</h2>
          <h3 class="card-title text-light"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="container bg-light">
          <div class="card-body">
            <ul class="list-group list-group-flush table-bordered">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: 
                <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };

  const html = []

  html.push(team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => generateManager(manager)).join("")
  );
  html.push(team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => generateEngineer(engineer)).join("")
  );
  html.push(team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => generateIntern(intern)).join("")
  );
  return html.join("");
};

// Generate entire page
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <div class="container-fluid">
      <nav class="navbar text-light justify-content-center bg-danger">
          <a class="navbar-brand">
            <h2>My Team</h2>
          </a>
        </nav>
      </div>
      <div class="container mt-2">
        <div class="row">
          <div class="team-area col-12 flex-wrap d-flex justify-content-center">
            ${generateTeam(team)}
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}