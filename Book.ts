interface Book {
    title: string;
    author: string;
    publicationYear: number;
}

function yearSum(books: Book[]):number{

    let sum: number = 0;
    for(let i = 0; i < books.length; i++) {
        sum += books[i].publicationYear;
    }
    return sum;
}

let arr: Book[] = [{
    title: "k",
    author: "k",
    publicationYear: 123
},{
    title: "a",
    author: "b",
    publicationYear: 1
}];
console.log("years sum: ", yearSum(arr));