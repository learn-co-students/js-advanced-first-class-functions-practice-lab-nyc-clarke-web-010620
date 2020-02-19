// Code your solution in this file!
function logDriverNames(arr) {
    arr.forEach(element => {
        console.log(element.name)
    });
}

function logDriversByHometown(arr, loc) {
    let new_arr = arr.filter( driver => driver.hometown === loc)
    logDriverNames(new_arr)
};

function driversByRevenue(arr) {
    let newarr = [...arr]
    return newarr.sort((a, b) => a.revenue - b.revenue)
}

function driversByName(arr) {
    let newarr = [...arr]
    return newarr.sort((a, b) => a.name.localeCompare(b.name))
}

function totalRevenue(arr) {
    return arr.reduce((a, b) => {
        return a + b.revenue
    }, 0)
}

function averageRevenue(arr) {
    return totalRevenue(arr)/arr.length
}
