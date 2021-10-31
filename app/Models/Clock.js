



export class Clock {
    constructor(data) {
        this.hours = data.hours
        this.minutes = data.minutes
        this.date = data.date
        this.day = data.day
        this.year = data.year
        this.month = data.month
    }


    get Template() {
        return `
        <div class="card bg-primary text-white">
        <h3>${this.hours}:${this.minutes}</h3>
        <p>${this.getDayString()}, the ${this.date} of ${this.getMonthString()}, ${this.year}</p>
        <button onclick="app.clocksController.toggleClock()" id="toggle-button">24</button>
        </div>
        `
    }

    getDayString() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return daysOfWeek[this.day]
    }

    getMonthString() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        return monthNames[this.month]
    }

}