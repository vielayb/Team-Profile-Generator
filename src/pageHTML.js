const generatePage = () => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="./assets/css/style.css"/>
        </head>
        <body>
            <header>
                <h1>Welcome</h1>
            </header>
            <main>
                <div class="container">
                    <div class="cards"></div>
                    <div class="cards"></div>
                    <div class="cards"></div>
                </div>
                <div class="container-2">
                    <div class="cards-2"></div>
                    <div class="cards-2"></div>
                </div>
            </main>
            
        </body>
    </html>
    `;
}