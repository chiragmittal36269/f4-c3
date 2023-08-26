import React, { useState, useEffect } from "react";
import Standard from "../AssetsToBeUsed/Standard.svg";
import KeazoNBOOKS from "../AssetsToBeUsed/KeazoNBOOKS.svg";
import Search from "../AssetsToBeUsed/ant-design_search-outlined.svg";
import Circle from "../AssetsToBeUsed/IMG20210528181544.svg";
import Book from "../AssetsToBeUsed/bx_bx-book-heart.svg";
import Diamond from "../AssetsToBeUsed/fluent_premium-person-20-regular.svg";
import Bell from "../AssetsToBeUsed/ic_round-notifications-none.svg";
import axios from "axios";

const Navbar = () => {
	let [searchBook, setSearchBook] = useState("harry potter");
	let [books, setBooks] = useState([]);
	let [bookInfo, setBookInfo] = useState(null);
	// console.log(books);
	console.log(bookInfo);

	function fetchBooks() {
		axios
			.get("https://www.googleapis.com/books/v1/volumes", {
				params: {
					q: searchBook,
				},
			})
			.then((response) => setBooks(response.data.items))
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		fetchBooks();
	}, []);

	function showData(book) {
		console.log(book.volumeInfo.imageLinks);
	}

	return (
		<div>
			<div className="navbar">
				<div className="left">
					<img src={Standard} alt="" />
					<img src={KeazoNBOOKS} alt="" />
				</div>
				<div className="middle">
					<div className="search-bar">
						<img src={Search} alt="" />
						<input
							type="search"
							placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
							onChange={(e) => setSearchBook(e.target.value)}
						/>
					</div>
					<button onClick={fetchBooks}>Search</button>
				</div>
				<div className="right">
					<img src={Book} alt="" />
					<img src={Diamond} alt="" />
					<img src={Bell} alt="" />
					<img src={Circle} alt="" />
				</div>
			</div>

			{books.map((book) => {
				return (
					<img
						src={book.volumeInfo.imageLinks.smallThumbnail}
						alt=""
						onClick={() => setBookInfo(book)}
					/>
				);
			})}
			{bookInfo && (
				<div>
					<h1>Title: {bookInfo.volumeInfo.title}</h1>
					<h2>Authors: {bookInfo.volumeInfo.authors.join(", ")}</h2>
					<h2>Category: {bookInfo.volumeInfo.categories}</h2>
					<h2>Publisher: {bookInfo.volumeInfo.publisher}</h2>
					<h2>publishedDate : {bookInfo.volumeInfo.publishedDate}</h2>
					<h2>Rating Count : {bookInfo.volumeInfo.ratingsCount}</h2>
					<h2>Page Count : {bookInfo.volumeInfo.pageCount}</h2>
					<h2>
						Average Rating : {bookInfo.volumeInfo.averageRating}
					</h2>
					<p>Description : {bookInfo.volumeInfo.description}</p>
				</div>
			)}
		</div>
	);
};

export default Navbar;
