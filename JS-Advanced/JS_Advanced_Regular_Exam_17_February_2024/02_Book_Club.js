// class BookClub {
//     }
//     Write a class BookClub, which implements the following functionality:
//     Functionality
//     Constructor
//     Should have these 3 properties:
//     •	library – String
//     •	books – Array (empty)
//     •	members – Array (empty)
//     The constructor should accept the initial library name when the BookClub is initialized.
//     addBook (title, author)
//     Both title and author are of type string.
//     If the book is already in the books array, return:
//     "The book "{title}" by {author} is already in {library} library."
    
//     •	Otherwise, this function should add the book with the properties: title and author to the books array, and return:
//     "The book "{title}" by {author} has been added to {library} library."
    
//     addMember (memberName)
//     The memberName is of type string.
//     •	If the member is already a part of the book club, return:
//     "Member {memberName} is already a part of the book club."
//     •	Otherwise, this function should add the member  to the members array and return:
//         "Member {memberName} has been joined to the book club."
    
//     assignBookToMember (memberName, bookTitle) 
//     •	If the memberName is not found in members array, throw an Error:
//     "Member {memberName} not found."
//     •	If the bookTitle is not found in books array, throw an Error:
//     "Book "{bookTitle}" not found."
//     •	Otherwise, this function should remove the book from the books array, and return: 
//     "Member {memberName} has been assigned the book "{assignedBook}" by {author}."
    
//     generateReadingReport ()
//     This method should return the complete information about the book club: 
//     •	If the club does not have any members, return:
//         "No members in the book club."
//     •	If there are no available books, return:
//     "No available books in the library."
    
//     •	Otherwise return:
//     "Available Books in {library} library:"
//     •	And on the new line, display information about each book in the club library:
//     ""{book}" by {author}"




class BookClub {
    constructor(library) {
        this.library = library;
        this.books = new Map();
        this.members = new Set();
    }

    addBook(title, author) {
        if (this.books.has(title)) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }
        this.books.set(title, author);
        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember(memberName) {
        if (this.members.has(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        }
        this.members.add(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.has(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }
        if (!this.books.has(bookTitle)) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }
        const author = this.books.get(bookTitle);
        this.books.delete(bookTitle);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${author}.`;
    }

    generateReadingReport() {
        if (this.members.size === 0) {
            return `No members in the book club.`;
        }
        if (this.books.size === 0) {
            return `No available books in the library.`;
        }
        const booksInfo = Array.from(this.books, ([title, author]) => `"${title}" by ${author}`).join('\n');
        return `Available Books in ${this.library} library:\n${booksInfo}`;
    }
}


    



// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

//Output

// The book "The Great Gatsby" by F. Scott Fitzgerald has been added to The Bookaholics library.
// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Peter has been joined to the book club.
// Uncaught Error Error: Member Mary not found.


const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());

//Output

// The book "The Great Gatsby" by F. Scott Fitzgerald has been added to The Bookaholics library.
// The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.
// The book "1984" by George Orwell has been added to The Bookaholics library.
// Member Alice has been joined to the book club.
// Member Alice is already a part of the book club.
// Member Alice has been assigned the book "The Great Gatsby" by F. Scott Fitzgerald.
// Available Books in The Bookaholics library:
// "To Kill a Mockingbird" by Harper Lee
// "1984" by George Orwell


// 100 / 100