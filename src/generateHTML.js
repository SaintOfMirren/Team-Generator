// Function to generate the HTML for the team roster
function generateHTML(teamRoster) {
    // Create an array to store the HTML for each team member
    const memberHTML = [];
  
    // Loop through the team roster and generate HTML for each member
    for (const member of teamRoster) {
      const memberHTMLTemplate = `
        <div class="member">
          <h2>${member.getName()}</h2>
          <p>Employee ID: ${member.getEmployeeId()}</p>
          <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
          <p>Role: ${member.getRole()}</p>
          ${member.getRole() === 'Manager' ? `<p>Office Number: ${member.getOfficeNumber()}</p>` : ''}
          ${member.getRole() === 'Engineer' ? `<p>Github: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></p>` : ''}
          ${member.getRole() === 'Intern' ? `<p>School: ${member.getSchool()}</p>` : ''}
        </div>
      `;
  
      memberHTML.push(memberHTMLTemplate);
    }
  
    // Generate the final HTML with the team roster
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Team Roster</h1>
        ${memberHTML.join('')}
      </body>
      </html>
    `;
  
    return html;
  }
  
  module.exports = generateHTML;