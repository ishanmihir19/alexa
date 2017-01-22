var bestOffersIntentHelper = require('./best.offers.intent.helper'),
    noIntentHelper = require('./no.intent.helper'),
    yesIntentHelper = require('./yes.intent.helper'),
    nextOfferIntentHelper = require('./next.offer.intent.helper'),
    offersByCategoryIntentHelper = require('./offers.by.category.helper'),
    rewardPointsIntentHelper = require('./reward.points.helper'),
    updatePreferencesIntentHelper = require('./update.preferences.helper'),
    activateOfferIntentHelper = require('./activate.offer.intent'),
    generalIntentsHelper = require('./general.intents.helper');

function delegateIntents(intentRequest, session, callback) {
    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    if ("bestOffers" === intentName) {
        bestOffersIntentHelper.handleBestOffers(intent, session, callback);
    }
    else if ("offerByCategory" === intentName) {
        offersByCategoryIntentHelper.handleOffersByCategory(intent, session, callback);
    }
    else if ("nextIntent" === intentName) {
        nextOfferIntentHelper.handleNextOffer(intent, session, callback);
    }
    else if ("activateOfferIntent" === intentName) {
        activateOfferIntentHelper.handleActivateOffer(intent, session, callback);
    }
    else if ('updatePreferencesIntent' === intentName) {
        updatePreferencesIntentHelper.handleUpdatePreferences(intent, session, callback);
    }
    else if ('rewardPointsIntent' === intentName) {
        rewardPointsIntentHelper.handleRewardPointsIntent(intent, session, callback);
    }
    else if ("AMAZON.YesIntent" === intentName) {
        yesIntentHelper.handleYesIntent(intent, session, callback);
    }
    else if ("AMAZON.NoIntent" === intentName) {
        noIntentHelper.handleNoResponse(intent, session, callback);
    }
    else if ("AMAZON.StartOverIntent" === intentName) {
        generalIntentsHelper.getWelcomeResponse(callback);
    }
    else if ("AMAZON.RepeatIntent" === intentName) {
        generalIntentsHelper.handleRepeatRequest(intent, session, callback);
    }
    else if ("AMAZON.HelpIntent" === intentName) {
        generalIntentsHelper.handleGetHelpRequest(intent, session, callback);
    }
    else if ("AMAZON.StopIntent" === intentName) {
        generalIntentsHelper.handleFinishSessionRequest(intent, session, callback);
    }
    else if ("AMAZON.CancelIntent" === intentName) {
        generalIntentsHelper.handleFinishSessionRequest(intent, session, callback);
    }
}

module.exports = {
    delegateIntents: delegateIntents
}