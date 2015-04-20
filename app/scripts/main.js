
'use strict'; 

var title = function(title, author) {
	return title + author;
};

var author = function(book) {
	return book;
};

var book = function() {
	return author();
};


title();
book();