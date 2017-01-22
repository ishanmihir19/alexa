var utils = require('../common/utils'),
    constants = require('../common/constants'),
    responseBuilder = require('../response-builders/response.builder'),
    bestOffers = constants.bestOffers,
    offerByCategory = constants.offerByCategory,
    endResponses = constants.endResponses;

function handleBestOffers(intent, session, callback) {
    var speechOutput = "",
        repromptText = "",
        bestOffersIndex = session.attributes.bestOffersIndex,
        randomNo = utils.generateRandomNumber(0, (endResponses.length - 1));

    if (bestOffersIndex > -1) {
        bestOffersIndex = bestOffersIndex + 1;
    }
    else {
        bestOffersIndex = 0;
    }
    if (bestOffersIndex < bestOffers.length) {
        speechOutput = "The best offer in category " + bestOffers[bestOffersIndex].category + " is " + bestOffers[bestOffersIndex].name + ' . ' + bestOffers[bestOffersIndex].description + ". " + bestOffers[bestOffersIndex].rewardOffered + " . " + endResponses[randomNo].response;
    }
    else {
        speechOutput = "Currently, we do not have any other offer .";
    }

    repromptText = speechOutput;
    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText,
        "bestOffersIndex": bestOffersIndex,
        "lastOffer": bestOffers[bestOffersIndex],
        "lastIntent": intent.name,
        "endResponse": endResponses[randomNo],
        "category": bestOffers[bestOffersIndex].category
    };
    callback(sessionAttributes,
        responseBuilder.buildSpeechletResponseWithStandardCard(constants.cardTitle, speechOutput, repromptText, bestOffers[bestOffersIndex].imgUrl, false));
}

module.exports = {
    handleBestOffers : handleBestOffers
}