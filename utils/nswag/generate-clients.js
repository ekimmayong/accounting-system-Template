const fs = require('fs');
const { execFile } = require('child_process');

const openapis = fs.readdirSync('openapi');

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

openapis.forEach((openapi) => {
    const apiSchema = JSON.parse(fs.readFileSync(`openapi/${openapi}`));
    if(Object.keys(apiSchema.paths).length === 0) return;

    const apiPath = apiSchema.info.title.split(' ')[0];
    const apiName = `${capitalize(apiPath)}_API`;

    execFile(
        `"../../node_modules/.bin/nswag"`,
        ['run', `/Variables:Path=openapi/${openapi},API_Name=${apiName}`],
        {shell: true },
        (error, stdout, stderr) => {
            if(error){
                console.error('has an error', error);
                console.error('has an error stdout', stdout);
                console.error('has an error stderr', stderr);
            }
        }
    )
})

