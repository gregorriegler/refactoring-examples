// redundant comment

/**
 * adds a and b and returns the result
 * @param a
 * @param b
 * @returns {*}
 */
function addition(a, b) {
    return a + b;
}

// ---------------------------------------------------------------------------------------------------------------------
// redundant comment

class Lift {
    _floor;

    /**
     * returns the floor
     * @returns {*}
     */
    get floor() {
        return this._floor;
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// commented WHAT it is doing

class Lift {
    floor;
    stops;


    constructor(floor, stops) {
        this.floor = floor;
        this.stops = stops;
        this.call(1, "up");
    }

    call(floor, direction) {
        if (direction === "up" && floor >= this.floor || direction === "down" && floor <= this.floor) { // on my way
            // adds an intermediate stop
            let index = 0;
            while (index < this.stops.length) {
                if (this.goingUp() && this.stops[index] > floor ||
                    this.goingDown() && this.stops[index] < floor) break
                index++
            }
            this.stops.splice(index, 0, floor)
        } else {
            this.stops.push(floor);
        }
    }

    goingUp() {
        // ...
    }

    goingDown() {
        // ...
    }
}

// --> extract method and remove comment

class BetterLift {
    floor;
    stops;

    constructor(floor, stops) {
        this.floor = floor;
        this.stops = stops;
        this.call(1, "up");
    }

    call(floor, direction) {
        if (direction === "up" && floor >= this.floor || direction === "down" && floor <= this.floor) { // on my way
            this.addIntermediateStop(floor);
        } else {
            this.stops.push(floor);
        }
    }

    addIntermediateStop(floor) {
        let index = 0;
        while (index < this.stops.length) {
            if (this.goingUp() && this.stops[index] > floor ||
                this.goingDown() && this.stops[index] < floor) break
            index++
        }
        this.stops.splice(index, 0, floor)
    }

    goingUp() {
        // ...
    }

    goingDown() {
        // ...
    }
}

// --> extract another method, reads nice!

class EvenBetterLift {
    floor;
    stops;

    constructor(floor, stops) {
        this.floor = floor;
        this.stops = stops;
        this.call(1, "up");
    }

    call(floor, direction) {
        if (this.isOnMyWay(direction, floor)) {
            this.addIntermediateStop(floor);
        } else {
            this.stops.push(floor);
        }
    }

    isOnMyWay(direction, floor) {
        return direction === "up" && floor >= this.floor || direction === "down" && floor <= this.floor;
    }

    addIntermediateStop(floor) {
        let index = 0;
        while (index < this.stops.length) {
            if (this.goingUp() && this.stops[index] > floor ||
                this.goingDown() && this.stops[index] < floor) break
            index++
        }
        this.stops.splice(index, 0, floor)
    }

    goingUp() {
        // ...
    }

    goingDown() {
        // ...
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// commented out code

function something(it) {
    it = it * 2 + it;
    // it += other

    return it;
}

// ---------------------------------------------------------------------------------------------------------------------
// commented out code somebody wants to keep

/**
 * TODO maybe we need this later
 function roman(number) {
    let result = '';

    for (let [numeral, numeralValue] of numerals) {
        while (number >= numeralValue) {
            result += numeral
            number -= numeralValue
        }
    }

    return result
}
 */

// ---------------------------------------------------------------------------------------------------------------------
// unused code

let myLift = new UnusedLift(1, 1);
myLift.call(1, "up");

class UnusedLift {
    floor;
    stops;

    constructor(floor, stops) {
        this.floor = floor;
        this.stops = stops;
        this.call(1, "up");
    }

    call(floor, direction) {
        if (this.isOnMyWay(direction, floor)) {
            this.addIntermediateStop(floor);
        } else {
            this.stops.push(floor);
        }
    }

    isOnMyWay(direction, floor) {
        return direction === "up" && floor >= this.floor || direction === "down" && floor <= this.floor;
    }

    oldFunction(direction, floor) {
        return direction === "up" && floor >= this.floor;
    }

    addIntermediateStop(floor) {
        let index = 0;
        while (index < this.stops.length) {
            if (this.goingUp() && this.stops[index] > floor ||
                this.goingDown() && this.stops[index] < floor) break;
            index++
        }
        this.stops.splice(index, 0, floor)
    }

    goingUp() {
        // ...
    }

    goingDown() {
        // ...
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// unreachable code

addPositive(1, -1);

function addPositive(a, b) {
    let sum = Math.abs(a) + Math.abs(b);
    if (sum < 0) {
        return sum * -1;
    } else {
        return sum;
    }
}