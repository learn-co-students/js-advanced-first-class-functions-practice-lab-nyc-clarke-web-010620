// Code your solution in this file!
function logDriverNames(driver) {
    driver.forEach(function(driver){
        console.log(driver.name)
    })
}

function logDriversByHometown(driver, location){
    driver.forEach(function(driver){
        if (driver.hometown === location) {
        console.log(driver.name)
        }
    })
}

function driversByRevenue(driver){
    let arr = [...driver]
    return arr.sort((a,b)=> (a.revenue > b.revenue) ? 1 : -1)
}


function driversByName(driver){
    let arr = [...driver]
    return arr.sort((a,b)=> (a.name > b.name) ? 1 : -1)
}

function totalRevenue(driverArray){
    const revenues = driverArray.map(driver => driver.revenue)
    return revenues.reduce((accumulator, currentValue) => accumulator + currentValue)
}

function averageRevenue(driverArray){
    const a = driverArray.length
    return totalRevenue(driverArray)/a
}