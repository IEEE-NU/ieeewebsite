#!/usr/bin/env node
// The above line makes this js file executable

require('dotenv').config();
const SSHCLIENT = require('ssh2').Client
const ssh_client = new SSHCLIENT();
const scp_client = require('scp2')

if (!(process.env.SERVER_NAME && process.env.SERVER_USER && process.env.SERVER_PASSWORD)) {
    console.log("Environment variables not set properly! Exiting...");
    process.exit(1);
}

run();

function run() {
    ssh_client.on('ready', clean_previous_build).connect({
        host: process.env.SERVER_NAME,
        username: process.env.SERVER_USER,
        password: process.env.SERVER_PASSWORD
    });
}

function clean_previous_build() {
    try {
        console.log('ssh-ed into server: ' + process.env.SERVER_USER + '@' + process.env.SERVER_NAME);
        ssh_client.shell(function (err, stream) {
            if (err) throw err;
            stream.on('close', function () {
                console.log('Exiting');
                ssh_client.end();
                deploy();
            }).on('data', function (_data) {
                // console.log("OUTPUT: " + data)
            });
            stream.write('cd public_html\n');
            console.log("Removing previous deploy");
            stream.write("rm -rf *\n")
            stream.end('exit\n')
        });
    } catch (e) {
        console.log(e);
    }
}

function deploy() {
    console.log("Now deploying newest version into server");
    scp_client.scp('docs/', {
        host: process.env.SERVER_NAME,
        username: process.env.SERVER_USER,
        password: process.env.SERVER_PASSWORD,
        path: "/home/ieee/public_html/"
    }, function(err) {
        console.log("Finished!");
        
    })
}