var utils = require('../common/utils'),
    constants = require('../common/constants'),
    responseBuilder = require('../response-builders/response.builder'),
    bestOffers = constants.bestOffers,
    offerByCategory = constants.offerByCategory,
    endResponses = constants.endResponses;


function handleUpdatePreferences(intent, session, callback) {
    console.log("inside handle preferences....");
    var lastIntent = intent.name, count,
        speechOutput = "",
        repromptText = "",
        preferences = [],
        availablePreferences = bestOffers;
    //  lastCategory = session.attributes.lastOffer.category;
    //  console.log("availablePreferences..." + availablePreferences);
    if (availablePreferences) {
        for (count = 0; count < availablePreferences.length; count++) {
            preferences.push(availablePreferences[count].category);
            // preferences[count] = availablePreferences[count].category;
            console.log("preferences..." + preferences[count]);
        }
        count = 0;
        var i = count * 3;
        if (i <= preferences.length) {
            speechOutput = " We have these preferences for you " + preferences[i] + " . " + preferences[i + 1] + " . " + preferences[i + 2] + " . " + preferences[i + 3] + " Please choose a preference to you wish to update";
            console.log("speechOutput..." + speechOutput);
        }
    }
    else {
        speechOutput = "Sorry, you have not chosen any preferences ";
        repromptText = speechOutput;
    }
    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText,
        "lastIntent": lastIntent

    }
    console.log('Sending the preferences  ');
    callback(sessionAttributes,
        responseBuilder.buildSpeechletResponse(constants.cardTitle, speechOutput, speechOutput, false));

}



module.exports = {
    handleUpdatePreferences : handleUpdatePreferences
}