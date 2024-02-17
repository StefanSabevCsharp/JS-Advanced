class BookClub{

    books = [];
    members = [];

    constructor(library){
        this.library = library;
    }
    addBook (title, author){
        let searchedBook = this._findBook(title);
        if(searchedBook){
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }else{
            let newBook = {
                title,
                author
            }
            this.books.push(newBook);
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }

    }
    addMember (memberName){
        let searchedMember = this._findMember(memberName);
        if(searchedMember){
            return `Member ${memberName} is already a part of the book club.`
        }else{
            this.members.push({memberName});
            return `Member ${memberName} has been joined to the book club.`
        }
        
    }
    assignBookToMember (memberName, bookTitle) {
        let member = this._findMember(memberName);
        let book = this._findBook(bookTitle);
        if(!member){
            throw new Error(`Member ${memberName} not found.`);
        }
        if(!book){
            throw new Error(`Book "${bookTitle}" not found.`);
        }
        this.books.splice(this.books.indexOf(book), 1);
        return `Member ${memberName} has been assigned the book "${book.title}" by ${book.author}.`
    }

    generateReadingReport (){
        if(this.members.length === 0){
            return `No members in the book club.`
        }
        if(this.books.length === 0){
            return `No available books in the library.`
        }
        let report = `Available Books in ${this.library} library:\n`;
        this.books.forEach(book => {
            report += `"${book.title}" by ${book.author}\n`;
        });
        return report.trim();
    }


    _findBook (title){
        return this.books.find(book => book.title === title);
    }
    _findMember (memberName){
        return this.members.find(member => member.memberName === memberName);
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());
