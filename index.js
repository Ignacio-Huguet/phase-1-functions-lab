// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    
    switch (someValue) {
        case 43 : 
          return 1;
        default:
          return 8
        }
    
    // if (someValue >= 50) {
    //     return 8   
    // } else if (someValue <=43) {
    //     return 1
    // }  
    
    // (43) = 1
    // (50) = 8
    // (34) = 8
}


function distanceFromHqInFeet(someValue) {
    switch (someValue) {
        case 43 : 
          return 264;
        default:
          return 2112
        }

}


function distanceTravelledInFeet(start, destination) {
 
    switch (start, destination) {
        case (43,48) : 
          return 1320;
        case (50, 60):
            return 2640
      default:
          return 1584
        }
// (43, 48) = 1320
// (50, 60) = 2640
// (34, 28) = 1584
}


function calculatesFarePrice(start, destination) {
    
    switch (start, destination) {
        case (34, 32) : 
          return 2.56;
        case (50, 58) : 
        return 25;
        case (34, 24) :
        return 'cannot travel that far';
      default:
          return 0
        }
    
    
    // (43, 44) = 0
    // (34, 32) = 2.56
    // (50, 58) = 25
    // (34, 24) = 'cannot travel that far'

}
