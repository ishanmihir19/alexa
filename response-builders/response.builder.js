// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithStandardCard(title, output, repromptText, imgUrl, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Standard",
            title: title,
            content: output,
            "image": {
                "smallImageUrl": imgUrl,
                "largeImageUrl": imgUrl
            }
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}


function buildResponse(sessionAttributes, speechletResponse) {

    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

module.exports = {
    buildResponse : buildResponse,
    buildSpeechletResponse : buildSpeechletResponse, 
    buildSpeechletResponseWithoutCard : buildSpeechletResponseWithoutCard, 
    buildSpeechletResponseWithStandardCard : buildSpeechletResponseWithStandardCard
}