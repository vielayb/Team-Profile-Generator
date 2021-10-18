const generatePage = (employees) => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="./dist/css/style.css"/>
        </head>
        <body>
            <header>
                <h1>Welcome</h1>
            </header>
            <main>
                <div class="container">
                    <div class="cards">
                        <h3>${employees[0].name}</h3>
                        <h5>${employees[0].role}</h5>
                        <p><strong>ID:</strong> ${employees[0].id}</p>
                        <p><strong>Email:</strong> ${employees[0].email}</p>
                        <p><strong>Office:</strong> ${employees[0].officeNumber}</p>
                    </div>
                    <div class="cards">
                        <h3>${employees[1].name}</h3>
                        <h5>${employees[1].role}</h5>
                        <p><strong>ID:</strong> ${employees[1].id}</p>
                        <p><strong>Email:</strong> ${employees[1].email}</p>
                        <p><strong>GitHub:</strong> ${employees[1].github}</p>
                    </div>
                    <div class="cards">
                        <h3>${employees[2].name}</h3>
                        <h5>${employees[2].role}</h5>
                        <p><strong>ID:</strong> ${employees[2].id}</p>
                        <p><strong>Email:</strong> ${employees[2].email}</p>
                        <p><strong>School:</strong> ${employees[2].school}</p>
                    </div>
                </div>
            </main>
            
        </body>
    </html>
    `;
}

module.exports = generatePage;