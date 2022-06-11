const availableTimings = [   //June 3rd
    {
        time: "10:00",
        available: true
    },
    {
        time: "19:30",
        available: true
    },
    {
        time: "20:30",
        available: false
    },
    {
        time: "21:30",
        available: true
    }
]

const tableAvailabilityData = [
    {
        time: "10:00",
        tableSize: 6,
        seatsAvailable: 4,
        tableName: "Big Table"
    }
]

export default {
    availableTimings,
    tableAvailabilityData
}