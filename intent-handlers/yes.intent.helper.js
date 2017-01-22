var utils = require('../common/utils'),
    responseBuilder = require('../response-builders/response.builder'),
    offersByCategoryIntentHelper = require('./offers.by.category.helper'),
    updatePreferencesIntentHelper = require('./update.preferences.helper'),
    activateOfferIntentHelper = require('./activate.offer.intent',
    constants = require('../common/constants'),
    bestOffers = constants.bestOffers,
    offerByCategory = constants.offerByCategory,
    endResponses = constants.endResponses);

function handleYesIntent(intent, session, callback) {

    var endResponse = session.attributes.endResponse,
        lastIntent, speechOutput, repromptText;

    if (endResponse) {
        lastIntent = endResponse.desiredIntent;
        if (lastIntent === 'activateOfferIntent') {
            activateOfferIntentHelper.handleActivateOffer(intent, session, callback);
        }
        else if (lastIntent === 'offerByCategory') {
            offersByCategoryIntentHelper.handleOffersByCategory(intent, session, callback);
        }
        else if (lastIntent === 'updatePreferencesIntent') {
            updatePreferencesIntentHelper.handleUpdatePreferences(intent, session, callback);
        }
    }
    else {
        speechOutput = "I am not sure how to help you with that ! ";
        repromptText = speechOutput;
        var sessionAttributes = {
            "speechOutput": speechOutput,
            "repromptText": repromptText,
            "lastIntent": intent.name
        };
        callback(sessionAttributes,
            responseBuilder.buildSpeechletResponse(constants.cardTitle, speechOutput, speechOutput, false));
    }
}


module.exports = {
    handleYesIntent: handleYesIntent
}