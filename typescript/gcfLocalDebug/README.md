# Google Cloud Functions Local Debug

This code sample shows how to debug locally a Google Cloud Function with HTTP signature. To do it a typescript project is created and a simple function returning the request body as response body after a delay is implemented. Two Visual Studio Code launch configurations are created to show how to run and debug the project from IDE.

## Requirements
`<npm>` must be installed. Visual Studio Code (from now on VSCode) is recommended but not necessary.

## Install
Download the sample directory, open a shell session on the directory and install dependencies by running the command `<npm install>`

## Run
Build the project by running `<npm build>` from a shell session or from the VSCode IDE. By running the project, the functions-framework will load the helloWorld function and will start listening requests on http://localhost:8080. 

You can send a simple request using this curl command: `<curl -d '{"greet":"hello"}' -H "content-type: application/json" -X GET localhost:8080>`. By running it you are sending a GET request to http://localhost:8080 containing a JSON object with a property `<greet>` set to the string `<hello>`

That request will trigger the function execution so you will get logging info by console and, after a delay of three seconds, it will respond to the above request by echoing the request body content.

## Debug
If using VSCode, you can debug the code sample by running it with the launch configuration "Debug program". Once running, send a HTTP request to http://localhost:8080 and you should be able to debug the code if breakpoints have been set.