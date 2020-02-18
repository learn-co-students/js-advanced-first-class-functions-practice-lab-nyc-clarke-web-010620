// Code your solution in this file!

function logDriverNames(drivers){
    drivers.forEach(driver => console.log(driver.name))

}

function logDriversByHometown(drivers, hometown) {
    let array = drivers.filter(driver => driver.hometown === hometown)
    array.forEach(driver => console.log(driver.name))

}

function driversByRevenue(drivers){
        
        let newdrivers = [...drivers]
        return newdrivers.sort((a, b) => (a.revenue > b.revenue) ? 1 : -1)

}

function driversByName(drivers){

    let newdrivers = [...drivers]
    return newdrivers.sort((a, b) => (a.name > b.name) ? 1 : -1)

}

function totalRevenue(drivers){

    let newdrivers = [...drivers]
    let dest = newdrivers.map(driver => driver.revenue)
    return dest.reduce(function (a, b) {
      return a + b;
    }, 0);

}

function averageRevenue(drivers) {
    
    let newdrivers = [...drivers]
    let dest = newdrivers.map(driver => driver.revenue)
    return dest.reduce(function (a, b) {
      return a + b;
    }, 0) / dest.length;

}