console.log(process.argv); // Output: [ 'node', '/path/to/processDemo.js', ...additional arguments ]
//console.log(process.argv[2]); // Output: third argument passed to the script`

//process.env
console.log(process.env.USERNAME); // Output: pedro

// pid
console.log(process.pid);

//cwd
console.log(process.cwd()); // Output: /current-working-directory

//exit
process.on('exit', (code) => {
    console.log(`Process exited with code: ${code}`);
});

process.exit(0); // Exit the process with code 0 (success)

console.log('This will not be printed because the process has exited.');
