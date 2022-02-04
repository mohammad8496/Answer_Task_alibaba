return devServer.listen(port, HOST, err => {
    if (err) {
        return console.log(err);
    }
    if (isInteractive) {
        clearConsole();
    }
    console.log(chalk.cyan('Starting the development server...\n'));
    return cypress
        .run({
            spec: './cypress/integration/ydkjs/*.js',
        })
        .then(results => {
            devServer.close();
        });
        
});