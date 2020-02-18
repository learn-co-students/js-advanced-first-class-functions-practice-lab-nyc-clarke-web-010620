// Code your solution in this file!
const logDriverNames = function(array){for (const o of array){console.log(o.name)}}

const logDriversByHometown = function(array, location){for (const o of array){if (o.hometown === location){console.log(o.name)}}}

const driversByRevenue = function(array){
    let new_arr = [...array]
    return new_arr.sort(function(a,b){return a.revenue - b.revenue})
}
const driversByName = function(array){
    let new_arr = [...array]
    return new_arr.sort(function(a,b){return a.name.localeCompare(b.name)})
}
const totalRevenue = function(array){
    let tr = 0
    for (const o of array){tr += o.revenue}
    return tr
}
const averageRevenue = function(array){
    return totalRevenue(array) / array.length
}