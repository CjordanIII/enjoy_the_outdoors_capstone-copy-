"use strict";
/* 
!Search by priority page
    -requirements:
        user can search for national parks inside nationalParkData.js file
        two ways to search for national parks radio btn:
            -By Location
                -select dropdown (locationData file):
                    -state
                    -territory
            -By park type
 */
// data files for national parks page
import { locationsArray } from "./data/locationData.js";
import { parkTypesArray } from "./data/parkTypeData.js";
import { nationalParksArray } from "./data/nationalParkData.js";
/*
        You can remove the following console.log() lines.
        They are here to verify that we have access to the data
        The data script files are located in the scripts/data directory
    */

//log the locationsArray to the console (scripts/data/locationData.js)
console.log(locationsArray);

//log the parkTypesArray to the console (scripts/data/parkTypeData.js)
console.log(parkTypesArray);

//   //log the nationalParksArray to the console (scripts/data/nationalParkData.js)
console.log(nationalParksArray);
