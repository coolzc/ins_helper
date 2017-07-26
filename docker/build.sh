#!/bin/sh
cd .. && sh build-app.sh && docker build -t registry.us-west-1.aliyuncs.com/inshelper/inshelper:$1 . && docker push registry.us-west-1.aliyuncs.com/inshelper/inshelper:$1
