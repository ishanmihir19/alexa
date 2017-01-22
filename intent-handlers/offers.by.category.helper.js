var utils = require('../common/utils'),
    constants = require('../common/constants'),
    responseBuilder = require('../response-builders/response.builder'),
    bestOffers = constants.bestOffers,
    offerByCategory = constants.offerByCategory,
    endResponses = constants.endResponses;


function handleOffersByCategory(intent, session, callback) {
    console.log('In handleOffersByCategory');
    var speechOutput, repromptText, lastOffer, offerCategory, offersIndex, randomNo, offersInCategory;
    //console.log('Slot Category : ' + intent.slots.category.value + ' \ OR session category : ' + session.attributes.category);
    if ((intent.slots && intent.slots.category && intent.slots.category.value) || session.attributes.category) {
        console.log('In if . . .');
        offerCategory = (intent.slots && intent.slots.category && intent.slots.category.value) ? intent.slots.category.value : session.attributes.category;
        console.log('Ofer Category : ' + offerCategory);
        if (offerByCategory[offerCategory]) {
            console.log('Find offer by category');
            offersInCategory = offerByCategory[offerCategory];
            console.log('Got offersin category ! ' + offersInCategory);
            offersIndex = session.attributes.offersIndex,
                randomNo = generateRandomNumber(0, (offersInCategory.length - 1));

            if (offersIndex > -1) {
                if ((intent.slots && intent.slots.category && intent.slots.category.value) != session.attributes.category) {
                    offersIndex = 0;
                }
                else {
                    offersIndex = offersIndex + 1;
                }
            }
            else {
                offersIndex = 0;
            }
            console.log('Offer Index : ' + offersIndex);
            if (offersIndex < offersInCategory.length) {
                speechOutput = "The best offer in category " + offersInCategory[offersIndex].category + " is " + offersInCategory[offersIndex].name + ' . ' + offersInCategory[offersIndex].description + ". " + offersInCategory[offersIndex].rewardOffered + " . " + endResponses[randomNo].response;
            }
            else {
                speechOutput = "Sorry, we do not have anymore offers in this category. You can ask me to show you offers in any other category. ";
            }
        }
        else {
            speechOutput = "Sorry, we do not have any offer in this category! ";
        }
    }

    repromptText = speechOutput;
    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText,
        "lastIntent": intent.name,
        "lastOffer": offersInCategory[offersIndex],
        "category": offersInCategory[offersIndex].category,
        "offersIndex": offersIndex,
        "endResponse": endResponses[randomNo]
    };
    callback(sessionAttributes,
        responseBuilder.buildSpeechletResponseWithStandardCard(constants.cardTitle, speechOutput, repromptText, offersInCategory[offersIndex].imgUrl, false));
}

module.exports = {
 handleOffersByCategory : handleOffersByCategory   
}