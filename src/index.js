class Sorter {
    constructor() {
        this.array = [];
        this.comparator = (left, right) => left - right;
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
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

        sortArray.sort(this.comparator);

        for (var i = 0; i < indices.length; i++) {
            this.array.splice(indices[i], 1, sortArray[i]);
        }
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;