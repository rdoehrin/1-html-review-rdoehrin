DROP TABLE IF EXISTS records;
CREATE TABLE records (
	book_id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(255),
	author VARCHAR(100),
	year_published INT,
	publisher VARCHAR(100),
	page_count INT,
	msrp INT,
	PRIMARY KEY (book_id)
);

INSERT INTO records (book_id, title, author, year_published , publisher, page_count, msrp) VALUES 
(1, 'The Hobbit', 'J.R.R. Tolkien', '1937', 'Allen & Unwin', 563, 21.99),
(2, 'The Little Prince', 'Antonie de Saint-Exupery', '1943', 'Reynold & Hitchcock', 842, 29.99),
(3, 'The Da Vinci Code', 'Dan Brown', '2003', 'Redberry Prod', 298, 9.99),
(4, 'The Catcher in the Rye', 'J.D. Salinger', '1951', 'Louise & Wallace', 450, 12.99),
(5, 'You Can Heal Your Life', 'Louise Hay', '1984', 'Brownston', 145, 5.99),
(6, 'Heidi', 'Johanna Spyri', '1880', 'Maud', 1219, 38.99);