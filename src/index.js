class Sorter {
    constructor() {
        // your implementation
        this.array = [];

    }

    add(element) {
        // your implementation
        this.array.push(element);
    }

    at(index) {
        // your implementation
        return this.array[index];
    }

    get length() {
        // your implementation
        return this.array.length;
    }

    toArray() {
        // your implementation
        return this.array;
    }

    sort(indices) {
        var sortArray = [];
        indices.sort(function(a, b) {
            return a - b;
        });
        for (var i = 0; i < this.array.length; i++) {
            if (indices.includes(i)) {
                sortArray.push(this.array[i]);
            }
        }
        sortArray.sort(function(a, b) {
            return a - b;
        });
        for (var i = 0; i < indices.length; i++) {
            this.array.splice(indices[i], 1, sortArray[i]);
        }

    }

    setComparator(compareFunction) {
        // your implementation
    }
}

module.exports = Sorter;