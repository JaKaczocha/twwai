function yearSum(books) {
    var sum = 0;
    for (var i = 0; i < books.length; i++) {
        sum += books[i].publicationYear;
    }
    return sum;
}
var arr = [{
        title: "k",
        author: "k",
        publicationYear: 123
    }, {
        title: "a",
        author: "b",
        publicationYear: 1
    }];
console.log("years sum: ", yearSum(arr));
