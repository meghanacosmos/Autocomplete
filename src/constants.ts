export const RESULT = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        country: "Russia",
        country_code: "ru",
        region: "Central Federal District",
        state: "Moscow",
        city: "Moscow",
        postcode: "103073",
        datasource: {
          sourcename: "openstreetmap",
          attribution: "© OpenStreetMap contributors",
          license: "Open Database License",
          url: "https://www.openstreetmap.org/copyright",
        },
        lon: 37.6174782,
        lat: 55.7505412,
        population: 13104177,
        result_type: "postcode",
        formatted: "Moscow, Russia, 103073",
        address_line1: "Moscow",
        address_line2: "Russia, 103073",
        category: "populated_place",
        timezone: {
          name: "Europe/Moscow",
          offset_STD: "+03:00",
          offset_STD_seconds: 10800,
          offset_DST: "+03:00",
          offset_DST_seconds: 10800,
          abbreviation_STD: "MSK",
          abbreviation_DST: "MSK",
        },
        plus_code: "9G7VQJ28+6X",
        plus_code_short: "28+6X Moscow, Russia",
        rank: {
          confidence: 1,
          confidence_city_level: 1,
          match_type: "full_match",
        },
        place_id:
          "51197f918609cf4240597a26eabb11e04b40f00101f901fdfc260000000000c00207",
      },
      geometry: { type: "Point", coordinates: [37.6174782, 55.7505412] },
      bbox: [37.290502, 55.4913076, 37.9674277, 55.9577717],
    },
    {
      type: "Feature",
      properties: {
        country: "Russia",
        country_code: "ru",
        region: "Central Federal District",
        state: "Moscow",
        city: "Moscow",
        datasource: {
          sourcename: "openstreetmap",
          attribution: "© OpenStreetMap contributors",
          license: "Open Database License",
          url: "https://www.openstreetmap.org/copyright",
        },
        lon: 37.6174782,
        lat: 55.7505412,
        population: 12700000,
        result_type: "city",
        formatted: "Moscow, Russia",
        address_line1: "Moscow",
        address_line2: "Russia",
        category: "populated_place",
        timezone: {
          name: "Europe/Moscow",
          offset_STD: "+03:00",
          offset_STD_seconds: 10800,
          offset_DST: "+03:00",
          offset_DST_seconds: 10800,
          abbreviation_STD: "MSK",
          abbreviation_DST: "MSK",
        },
        plus_code: "9G7VQJ28+6X",
        plus_code_short: "28+6X Moscow, Russia",
        rank: {
          confidence: 1,
          confidence_city_level: 1,
          match_type: "full_match",
        },
        place_id:
          "51197f918609cf4240597a26eabb11e04b40f00101f901fdfc260000000000c00208",
      },
      geometry: { type: "Point", coordinates: [37.6174782, 55.7505412] },
      bbox: [37.290502, 55.4913076, 37.9674277, 55.9577717],
    },
    {
      type: "Feature",
      properties: {
        country: "United States",
        country_code: "us",
        state: "Idaho",
        county: "Latah County",
        city: "Moscow",
        datasource: {
          sourcename: "openstreetmap",
          attribution: "© OpenStreetMap contributors",
          license: "Open Database License",
          url: "https://www.openstreetmap.org/copyright",
        },
        state_code: "ID",
        lon: -117.000165,
        lat: 46.7323875,
        population: 22352,
        result_type: "city",
        formatted: "Moscow, ID, United States of America",
        address_line1: "Moscow, ID",
        address_line2: "United States of America",
        category: "administrative",
        timezone: {
          name: "America/Los_Angeles",
          offset_STD: "-08:00",
          offset_STD_seconds: -28800,
          offset_DST: "-07:00",
          offset_DST_seconds: -25200,
          abbreviation_STD: "PST",
          abbreviation_DST: "PDT",
        },
        plus_code: "85R4PXJX+XW",
        plus_code_short: "+XW Moscow, Latah County, United States",
        rank: {
          confidence: 1,
          confidence_city_level: 1,
          match_type: "full_match",
        },
        place_id:
          "51a5660fb402405dc059e63fa4dfbe5d4740f00101f90156da010000000000c00208",
      },
      geometry: { type: "Point", coordinates: [-117.000165, 46.7323875] },
      bbox: [-117.039882, 46.6986975, -116.9605363, 46.758608],
    },
  ],
  query: { text: "Mosco", parsed: { city: "mosco", expected_type: "unknown" } },
};