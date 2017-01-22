var cardTitle = 'AIMIA';

var bestOffers = [
    {
        "name": "ACP Saving Plan",
        "category": "insurance",
        "description": "ACP 12 month saving Plan with higher benefits",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/financeoffers_4---nero.png/financeoffers_4---nero.png/aimiawebsite:offerthreex",
        "isActivated": false,
        "rewardOffered": ""
    },
    {
        "name": "Neros Offer",
        "category": "food",
        "description": "Free Coffee Coupon When You Visit Nero's Coffee 5 Times",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/financeoffers_4---nero.png/financeoffers_4---nero.png/aimiawebsite:offerthreex",
        "isActivated": false,
        "rewardOffered": ""
    },
    {
        "name": "AirBnB Offer",
        "category": "travel",
        "description": "$50 AirBnB Voucher on all domestic and international bookings.",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/airbnb.png/airbnb.png/aimiawebsite:offerthreex",
        "isActivated": false,
        "rewardOffered": "You will be offered an additional $50 AirBnB Voucher on using this offer"
    },
    {
        "name": "Save for a rainy day Offer",
        "category": "investment ",
        "description": "Tax Free. Instant Access. Saving Account ",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/financeoffers_4---nero.png/financeoffers_4---nero.png/aimiawebsite:offerthreex",
        "isActivated": false,
        "rewardOffered": "We will add 900 reward points if you activate this offer."
    },
    {
        "name": "Iphone 6S offer",
        "category": "electronics",
        "description": "Benefits On All New Iphone 6S.",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/rewards/iphone-reward.png/iphone-reward.png/aimiawebsite:offerthmbthreex",
        "isActivated": false,
        "rewardOffered": "You will earn 600 reward points for using this offer"
    },
    {
        "name": "Debenhams Offer",
        "category": "shopping",
        "description": "Triple Points At Debenhams",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/triple-points1.png/triple-points1.png/aimiawebsite:offerthreex",
        "isActivated": false,
        "rewardOffered": "Hurry Up! Triple the number of Points When You Shop At Debenhams."
    },
    {
        "name": "Movie Ticket Offer",
        "category": "entertainment",
        "description": "This offer is with a Monthly Cinema Ticket",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/movie-tickets.png/movie-tickets.png/aimiawebsite:offerthreex",
        "isActivated": false,
        "rewardOffered": "Hurry Up! Get 20000 Points."
    }
];

var offerByCategory = {
    "insurance": [
        {
            "name": "ACP Saving Plan",
            "category": "insurance",
            "description": "ACP 12 month saving Plan with higher benefits",
            "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/financeoffers_4---nero.png/financeoffers_4---nero.png/aimiawebsite:offerthreex",
            "isActivated": false,
            "rewardOffered": ""
        }
    ],
    "food": [
        {
            "name": "Neros Offer",
            "category": "food",
            "description": "Free Coffee Coupon When You Visit Nero's Coffee 5 Times",
            "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/financeoffers_4---nero.png/financeoffers_4---nero.png/aimiawebsite:offerthreex",
            "isActivated": false,
            "rewardOffered": ""
        },
        {
            "name": "Corporate Offer",
            "category": "food",
            "description": "20% corpoarte offer on Nero's Coffee",
            "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/financeoffers_4---nero.png/financeoffers_4---nero.png/aimiawebsite:offerthreex",
            "isActivated": false,
            "rewardOffered": "You will rewarded 500 points when you visit Nero's 7 times"
        }
    ],
    "travel": [{
        "name": "AirBnB Offer",
        "category": "travel",
        "description": "$50 AirBnB Voucher on all domestic and international bookings.",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/airbnb.png/airbnb.png/aimiawebsite:offerthreex",
        "isActivated": false,
        "rewardOffered": "You will be offered an additional $50 AirBnB Voucher on using this offer"
    }
    ],
    "entertainment": [
        {
            "name": "Movie Ticket Offer",
            "category": "entertainment",
            "description": "This offer is with a Monthly Cinema Ticket",
            "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/movie-tickets.png/movie-tickets.png/aimiawebsite:offerthreex",
            "isActivated": false,
            "rewardOffered": "Hurry Up! Get 20000 Points."
        }
    ],
    "investment": [
        {
            "name": "Save for a rainy day Offer",
            "category": "investment",
            "description": "Tax Free. Instant Access. Saving Account ",
            "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/financeoffers_4---nero.png/financeoffers_4---nero.png/aimiawebsite:offerthreex",
            "isActivated": false,
            "rewardOffered": "You will earn 600 reward points for using this offer"
        }
    ],
    "elecronics": [{
        "name": "Iphone 6S offer",
        "category": "electronics",
        "description": "Benefits On All New Iphone 6S.",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/rewards/iphone-reward.png/iphone-reward.png/aimiawebsite:offerthmbthreex",
        "isActivated": false,
        "rewardOffered": "You will earn 600 reward points for using this offer"
    }],
    "shopping": [{
        "name": "Debenhams Offer",
        "category": "shopping",
        "description": "Triple Points At Debenhams",
        "imgUrl": "https://cms-finance-site.asd.aimiasystems.com/binaries/content/gallery/offers/triple-points1.png/triple-points1.png/aimiawebsite:offerthreex",
        "isActivated": false,
        "rewardOffered": "Hurry Up! Triple the number of Points When You Shop At Debenhams."
    }]
};

var endResponses = [
    {
        "response": "Do you want to activate this offer?",
        "desiredIntent": "activateOfferIntent"
    },
    {
        "response": "Do you want to know more offers in this category ?",
        "desiredIntent": "offerByCategory"
    },
    {
        "response": "Do you want to update your preferences?",
        "desiredIntent": "updatePreferencesIntent"
    }
]

module.exports = {
    cardTitle: cardTitle,
    bestOffers: bestOffers,
    offerByCategory: offerByCategory,
    endResponses: endResponses
}