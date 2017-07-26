#!/bin/bash
sh build-dashboard.sh
pm2 start /usr/src/app/server/server.js --name inshelper -i 0 -o ./inshelper/output.log -e ./inshelper/error.log --no-daemon
