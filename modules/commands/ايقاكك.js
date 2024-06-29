const { createServer } = require('http');
const { spawn } = require('child_process');
const axios = require('axios');
const logger = require('./utils/log');

// Map to store admin IDs or usernames
const admins = new Set(['100094409873389']);

// Simple HTTP server to handle requests (optional, for testing)
createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server running');
}).listen(process.env.PORT || 3000);

// Function to start the bot
function startBot() {
    logger('Starting bot...', '[ Starting ]');

    const child = spawn('node', ['--trace-warnings', '--async-stack-traces', 'mirai.js'], {
        cwd: __dirname,
        stdio: 'inherit',
        shell: true
    });

    child.on('close', (codeExit) => {
        if (codeExit !== 0) {
            logger('Restarting...', '[ Starting ]');
            startBot(); // Restart if not exited normally
        }
    });

    child.on('error', (error) => {
        logger('An error occurred: ' + JSON.stringify(error), '[ Starting ]');
    });
}

// Function to handle incoming messages
function handleMessage(event, api) {
    const { body, senderID } = event;
    
    // Check if sender is admin
    if (admins.has(senderID)) {
        // Process admin commands
        if (body.toLowerCase() === 'stop bot') {
            api.sendMessage('Stopping bot...', event.threadID, () => process.exit(0));
        } else {
            // Handle other admin commands
            // Example: api.sendMessage('Command received', event.threadID);
        }
    } else {
        // Non-admin users won't trigger bot responses
    }
}

// Example of using axios to check for updates (optional)
axios.get('https://raw.githubusercontent.com/d-jukie/miraiv2/main/package.json')
    .then((res) => {
        logger(res.data.name, '[ NAME ]');
        logger('Version: ' + res.data.version, '[ VERSION ]');
        logger(res.data.description, '[ DESCRIPTION ]');
    })
    .catch((err) => {
        logger('Unable to check update.', '[ CHECK UPDATE ]');
    });

// Start bot
startBot();
