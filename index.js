/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []        
    }
}

function createEmployeeRecords(employeeData) {
    const newEmployeeArray = employeeData.map(indivArray =>{
        return createEmployeeRecord(indivArray)
        })
        return newEmployeeArray
}

function createTimeInEvent(dateWithTimeIn){
    let splitDateIn = dateWithTimeIn.split(" ")
    let clockIn = {
        type: "TimeIn",
        hour: parseInt(splitDateIn[1], 10),
        date: splitDateIn[0]
    } 
    this.timeInEvents.push(clockIn)
    return this
}

function createTimeOutEvent(dateWithTimeOut){
    let splitDateOut = dateWithTimeOut.split(" ")
    let clockOut = {
        type: "TimeOut",
        hour: parseInt(splitDateOut[1], 10),
        date: splitDateOut[0]
    } 
    this.timeOutEvents.push(clockOut)
    return this
}

function hoursWorkedOnDate(date){
    let inTime = this.timeInEvents.find(element => element.date === date)
    let outTime = this.timeOutEvents.find(element => element.date === date)
    let totalHours = (outTime.hour - inTime.hour)/100
    return totalHours
}

function wagesEarnedOnDate(date){
    let manHours = hoursWorkedOnDate.call(this, date)
    let totalWage = manHours * this.payPerHour
    return totalWage
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(empArrays, empName){
    //let empArrays = [{},{}]
    //let empName = "Loki"
    //let matchName = empArrays.find(element => element === empName)
    for(const obj of empArrays){
        if(obj.firstName === empName){
            return obj
        }
    }
    return undefined    
}

function calculatePayroll(multiEmployeeArray){
    let multiPayroll = multiEmployeeArray.reduce((accumulator, record) =>{
        console.log(accumulator, record)
        return accumulator + allWagesFor.call(record)
    },0)
    console.log(multiPayroll)
    return multiPayroll
}c