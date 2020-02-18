function logDriverNames(drivers){
    return drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location){
    let results = drivers.filter(driver => driver.hometown === location)
    return logDriverNames(results)
}

function driversByRevenue(drivers){
    let newArray = [...drivers]
    return newArray.sort((a, b) => (a.revenue > b.revenue)? 1 : -1)
}

function driversByName(drivers){
    let newArray = [...drivers]
    return newArray.sort((a, b) => (a.name.localeCompare(b.name)))
}

const totalRevenue = function(drivers){
    return drivers.reduce(function(total, currentDriver){
        return total + currentDriver.revenue
    }, 0)
}

const averageRevenue = function (drivers){
    return totalRevenue(drivers) / drivers.length}