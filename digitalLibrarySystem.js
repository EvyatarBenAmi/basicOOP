class MediaItem {
    constructor(title, year, genre) {
        this.title = title
        this.year = year
        this.genre = genre
    }
    getSummary() {
        return (`title: ${this.title}, year: ${this.year}, genre: ${this.genre}`)
    }
}
class Book extends MediaItem {
    constructor(title, year, genre, author, pageCount) {
        super(title, year, genre)
        this.author = author
        this.pageCount = pageCount
    }
    getSummary() {
        return (`Book: ${this.title} by ${this.author} ${this.pageCount} pages`)
    }
}
class Movie extends MediaItem {
    constructor(title, year, genre, director, durationMinutes) {
        super(title, year, genre)
        this.director = director
        this.durationMinutes = durationMinutes
    }
    getSummary() {
        return (`Movie: ${this.title} director by ${this.director} ${this.durationMinutes} min`)
    }
}
class Library {
    constructor(items) {
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }
    search(term) {
        const res = this.items.filter((item) =>  item.title.includes(term) )
        return res
    }
    listByGenre(genre) {
        const res = this.items.filter((item) =>  item.genre === genre )
        return res
    }
}

// const lib = new Library();
// lib.addItem(new Book('dune',1965,"Sci-Fi", "Frank Herbert", 412));
// lib.addItem(new Movie("dune", "Denis Villeneuve", 2021, "Sci-Fi", 155));
// console.log(lib.search("dune"));
// console.log(lib.listByGenre("Sci-Fi"));