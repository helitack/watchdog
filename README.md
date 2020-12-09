# Watchdog Monitoring & Alerting
___
## Prerequisites/Config
#### .env
You must have a .env file in your home director called `.watchdog.env`
```
LOCAL_USER_ID=1000
LOCAL_USER_GROUP_ID=1000
ROOT_HOST=mydomain.com
```

#### ssl
You must have a `certificate-bundle.crt` and a `private-key-nopass.key` file in the `/services/nginx/conf/ssl` directory.

#### Docker
You must have docker and docker-compose installed on your system.

#### Ruby
This application uses rake to orchestrate running and building the application. Be sure to have ruby installed and install the required gems in the Gemfile.

___

## Task Runner
Run the command `rake` in the /solution directory to see a list of rake tasks that can be performed.

___

## Quickstart
Navigate to the solution directory and run: `rake up log` to run the entire solution and tail the logs of every container.