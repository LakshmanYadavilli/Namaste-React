import React from "react";
import Card from "./Card";

const CardContainer = () => {
  const restaurants = [
    {
      info: {
        id: "32399",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/7d75687b-e820-4d04-95c7-010ae56cb94a_32399.JPG",
        locality: "Kalina Artista",
        areaName: "Santacruz East",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.5,
        parentId: "630",
        avgRatingString: "4.5",
        totalRatingsString: "39K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 02:45:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹80 OFF",
          subHeader: "ABOVE ₹349",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/mcdonalds-kalina-artista-santacruz-east-rest32399",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "9862",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/1b846766-8d71-449b-b1bc-116fc8c3a024_9862.JPG",
        locality: "Bandra",
        areaName: "Bandra Kurla Complex",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.2,
        parentId: "721",
        avgRatingString: "4.2",
        totalRatingsString: "16K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 03:00:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹99" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: { rating: "3.8", ratingCount: "1.8K+" },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/pizza-hut-bandra-bandra-kurla-complex-rest9862",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "28405",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "CST Road",
        areaName: "Santacruz East",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.3,
        parentId: "61955",
        avgRatingString: "4.3",
        totalRatingsString: "14K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 01:00:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Chinese.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Chinese.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹129" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/chinese-wok-cst-road-santacruz-east-rest28405",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "78036",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8021373a-e4e9-4780-b502-59d621ee2c7b_78036.jpg",
        locality: "Central Plaza, Kalina",
        areaName: "Santacruz East",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "38K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 05:00:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹120" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/burger-king-central-plaza-kalina-santacruz-east-rest78036",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "376244",
        name: "Good Flippin' Burgers",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/e377d82e-622a-4f49-b17c-c7e2dfece30a_376244.jpg",
        locality: "Bandra Kurla Complex",
        areaName: "Santacruz East",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
        avgRating: 4.5,
        parentId: "11748",
        avgRatingString: "4.5",
        totalRatingsString: "3.3K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 05:00:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
              description: "Delivery!",
            },
            { imageId: "newg.png", description: "Gourmet" },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
                  },
                },
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹195" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: { rating: "4.6", ratingCount: "154" },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/good-flippin-burgers-bandra-kurla-complex-santacruz-east-rest376244",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "535962",
        name: "SLYCE PIZZA",
        cloudinaryImageId: "4c899e0501bef7e4c6acd1fa7cc2c82b",
        locality: "Trade Center Building",
        areaName: "Bandra Kurla Complex",
        costForTwo: "₹600 for two",
        cuisines: ["Pizzas", "Italian", "Fast Food"],
        avgRating: 4.1,
        parentId: "321813",
        avgRatingString: "4.1",
        totalRatingsString: "1.8K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 05:00:00", opened: true },
        badges: {
          imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/slyce-pizza-trade-center-building-bandra-kurla-complex-rest535962",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "47833",
        name: "Persian Darbar",
        cloudinaryImageId: "7aeb2bbff29d99d6e986240911ce0e71",
        locality: "Bandra Kurla Complex",
        areaName: "Bandra Kurla Complex",
        costForTwo: "₹1800 for two",
        cuisines: [
          "North Indian",
          "Biryani",
          "Mughlai",
          "Kebabs",
          "Seafood",
          "Chinese",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        parentId: "711",
        avgRatingString: "4.3",
        totalRatingsString: "18K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 03:00:00", opened: true },
        badges: {
          imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹188" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: { rating: "4.3", ratingCount: "6.6K+" },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/persian-darbar-bandra-kurla-complex-rest47833",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "627565",
        name: "Sweet County Cake Shop",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/11/a85f6494-84da-47ea-93e8-4b3eb1676207_627565.jpg",
        locality: "Pant Nagar",
        areaName: "Ghatkopar East",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Cakes & Pastries", "Desserts", "Cakes"],
        avgRating: 4.7,
        veg: true,
        parentId: "441853",
        avgRatingString: "4.7",
        totalRatingsString: "1.0K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 3.9,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 00:30:00", opened: true },
        badges: {
          imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹65" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: { rating: "4.3", ratingCount: "382" },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/sweet-county-cake-shop-pant-nagar-ghatkopar-east-rest627565",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "31775",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/a0e147bc-94ef-4aad-b85f-fec710815dda_31775.jpg",
        locality: "The Capital Bandra Kurla Complex",
        areaName: "Bandra East",
        costForTwo: "₹350 for two",
        cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
        avgRating: 4.3,
        parentId: "2",
        avgRatingString: "4.3",
        totalRatingsString: "15K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 03:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/subway-the-capital-bandra-kurla-complex-bandra-east-rest31775",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "699105",
        name: "Harvest Salad Co",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/23/0e371c6e-0088-4f20-ac4d-8cca40b42d0d_699105.jpg",
        locality: "Kalina CST Road",
        areaName: "Scruz Bandra East",
        costForTwo: "₹500 for two",
        cuisines: ["Salads", "Healthy Food", "Snacks"],
        avgRating: 4.6,
        parentId: "301047",
        avgRatingString: "4.6",
        totalRatingsString: "2.3K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 03:30:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
              description: "Delivery!",
            },
            { imageId: "newg.png", description: "Gourmet" },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
                  },
                },
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹80" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/harvest-salad-co-kalina-cst-road-scruz-bandra-east-rest699105",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "698272",
        name: "Maiz Mexican Kitchen",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/23/6a75e625-14b3-4702-b57e-39fa536a2433_698272.jpg",
        locality: "Kalina Cst Road",
        areaName: "BKC",
        costForTwo: "₹600 for two",
        cuisines: ["Mexican", "Italian", "American"],
        avgRating: 4.6,
        parentId: "11654",
        avgRatingString: "4.6",
        totalRatingsString: "1.6K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 03:30:00", opened: true },
        badges: {
          imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹80" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/maiz-mexican-kitchen-kalina-cst-road-bkc-rest698272",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "395334",
        name: "McDonald's Gourmet Burger Collection",
        cloudinaryImageId: "txirbmikcfw5yijtcfs5",
        locality: "Kalina Artista",
        areaName: "Scruz Bandra East",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.3,
        parentId: "10761",
        avgRatingString: "4.3",
        totalRatingsString: "349",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 02:45:00", opened: true },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/mcdonalds-gourmet-burger-collection-kalina-artista-scruz-bandra-east-rest395334",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "42885",
        name: "Rolls Mania - Rolls, Wraps & More",
        cloudinaryImageId: "g7donnzr1ev21elpr3nf",
        locality: "Santacruz East",
        areaName: "Santacruz East",
        costForTwo: "₹200 for two",
        cuisines: ["Rolls & Wraps", "Fast Food", "Snacks", "Beverages"],
        avgRating: 4.4,
        parentId: "514939",
        avgRatingString: "4.4",
        totalRatingsString: "6.6K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 03:30:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: { rating: "4.5", ratingCount: "64" },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/rolls-mania-rolls-wraps-and-more-santacruz-east-rest42885",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "391816",
        name: "Louis Burger",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/20/24b19dd3-c09d-4d3a-bff0-aa01684358b5_391816.JPG",
        locality: "Trade Centre",
        areaName: "Santacruz Bandra east",
        costForTwo: "₹600 for two",
        cuisines: ["Burgers", "American", "Fast Food"],
        avgRating: 4.4,
        parentId: "22485",
        avgRatingString: "4.4",
        totalRatingsString: "4.9K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 05:00:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
              description: "bolt!",
            },
            { imageId: "newg.png", description: "Gourmet" },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                  },
                },
                { attributes: { description: "Gourmet", imageId: "newg.png" } },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/louis-burger-trade-centre-santacruz-bandra-east-rest391816",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "301549",
        name: "The Momo Co.",
        cloudinaryImageId: "9668a5819fcba35364dcff30d5f5cfbb",
        locality: "CST Road",
        areaName: "Santacruz East",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.3,
        parentId: "11442",
        avgRatingString: "4.3",
        totalRatingsString: "1.3K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 01:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹129" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/the-momo-co-cst-road-santacruz-east-rest301549",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "575041",
        name: "Veg Daawat by Behrouz",
        cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
        locality: "Kalina",
        areaName: "Santacruz East",
        costForTwo: "₹700 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Beverages",
          "Desserts",
        ],
        avgRating: 4.1,
        veg: true,
        parentId: "344904",
        avgRatingString: "4.1",
        totalRatingsString: "44",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 02:00:00", opened: true },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹229" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/veg-daawat-by-behrouz-kalina-santacruz-east-rest575041",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "837830",
        name: "The Pizza Project by Oven Story",
        cloudinaryImageId: "f1b907b0b8f86c62e4fc347c6b1434e6",
        locality: "Kalina",
        areaName: "Santacruz East",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Desserts", "Beverages"],
        avgRating: 4,
        parentId: "497031",
        avgRatingString: "4.0",
        totalRatingsString: "70",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 02:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹89" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/the-pizza-project-by-oven-story-kalina-santacruz-east-rest837830",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "296658",
        name: "Big Bowl",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_296658.JPG",
        locality: "CST Road",
        areaName: "Santacruz East",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
        avgRating: 4.4,
        parentId: "434792",
        avgRatingString: "4.4",
        totalRatingsString: "5.1K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 01:00:00", opened: true },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹129" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/big-bowl-cst-road-santacruz-east-rest296658",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "328878",
        name: "Charcoal Eats - Biryani & Beyond",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/6096606d-fb9a-4b2e-a22b-48ee063a2c53_328878.jpg",
        locality: "Manipada Road",
        areaName: "SANTACRUZ EAST, Kalina",
        costForTwo: "₹499 for two",
        cuisines: ["Biryani", "Kebabs", "North Indian", "Mughlai"],
        avgRating: 4.4,
        parentId: "5338",
        avgRatingString: "4.4",
        totalRatingsString: "3.1K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 03:45:00", opened: true },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/charcoal-eats-biryani-and-beyond-manipada-road-santacruz-east-kalina-rest328878",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "566274",
        name: "Faasos Signature Wraps & Rolls",
        cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
        locality: "Kalina",
        areaName: "Santacruz East",
        costForTwo: "₹350 for two",
        cuisines: [
          "Fast Food",
          "Snacks",
          "North Indian",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        parentId: "340366",
        avgRatingString: "4.2",
        totalRatingsString: "107",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: { nextCloseTime: "2025-06-25 02:00:00", opened: true },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹129" },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: { lottie: {}, video: {} },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: { aggregatedRating: { rating: "--" } },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: { context: "seo-data-4bc6f0b8-0c1a-4623-a42f-e5a823757bda" },
      cta: {
        link: "https://www.swiggy.com/city/mumbai/faasos-signature-wraps-and-rolls-kalina-santacruz-east-rest566274",
        type: "WEBLINK",
      },
    },
  ];
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Card key={restaurant.info.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default CardContainer;
