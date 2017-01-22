var responseBuilder = require('../response-builders/response.builder');

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user
    session.attributes.userPromptedToContinue = true;
    var speechOutput = "This is Aimia offers skill "
        + "You can use it to explore latest Aimia offers . "
        + "To repeat the last dialogue, say, repeat. "
        + "What  would you like to know?",
        repromptText = "This is Aimia offers skill "
            + "What offers would you like to explore?";
    var shouldEndSession = false;
    callback(session.attributes,
        responseBuilder.buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    callback(session.attributes,
        responseBuilder.buildSpeechletResponseWithoutCard("Good bye !", "", true));
}

function getWelcomeResponse(callback) {
    var speechOutput = "Welcome !",
        shouldEndSession = false,
        repromptText = speechOutput,
        sessionAttributes = {
            "speechOutput": speechOutput,
            "repromptText": repromptText,
        };
    callback(sessionAttributes,
        responseBuilder.buildSpeechletResponse(constants.cardTitle, speechOutput, repromptText, shouldEndSession));
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available

    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            responseBuilder.buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

module.exports = {
    getWelcomeResponse : getWelcomeResponse,
    handleFinishSessionRequest : handleFinishSessionRequest,
    handleRepeatRequest : handleRepeatRequest,
    handleGetHelpRequest : handleGetHelpRequest
}