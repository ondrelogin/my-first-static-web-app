module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = "Hello World from Azure API.";
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}