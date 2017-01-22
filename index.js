'use strict';
var responseBuilder = require('./response-builders/response.builder'),
    intentsManager = require('./intent-handlers/intents.manager'),
    generalIntentsHelper = require('./intent-handlers/general.intents.helper');

exports.handler = function(event, context) {

    try {
        console.log("****** " + JSON.stringify(event));
        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(responseBuilder.buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === "IntentRequest") {
            intentsManager.delegateIntents(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(responseBuilder.buildResponse(sessionAttributes, speechletResponse));
                });
        }
        else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    }
    catch (e) {
        context.fail("Exception: " + e);
    }
};

function onSessionStarted(sessionStartedRequest, session) {
    // add any session init logic here
}

function onLaunch(launchRequest, session, callback) {
    generalIntentsHelper.getWelcomeResponse(callback);
}

function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);
    // Add any cleanup logic here
}