// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Books = ({ searchBooks, startSearch }) => {
// 	const [query, setQuery] = useState("harry potter");

// 	function fetchBooks() {
// 		axios
// 			.get("https://www.googleapis.com/books/v1/volumes", {
// 				params: {
// 					q: searchBooks,
// 				},
// 			})
// 			.then((response) => console.log(response.data.items))
// 			.catch((err) => console.log(err));
// 	}

// 	useEffect(() => {
// 		fetchBooks();
// 	}, []);

// 	return <div>books</div>;
// };

// export default Books;
