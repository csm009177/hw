export function docMaker(PORT, pageName, subPage){
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageName}</title>
</head>
<body>
<div id="root">
  <h1>Welcome to main</h1>
  <div><a href="http://localhost:${PORT}/${subPage}">${subPage}</a></div>
  </div>
  </body>
  </html>`;

  /**
   * @param {number, string} PORT port number
   * @param {string} pageName this page name 
   * @param {string} subPage sub page name
   */
}
