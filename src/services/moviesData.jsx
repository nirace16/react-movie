// import React, { Component } from "react";

const movies = [
	{
		id: "1",
		title: "ABCD",
		genre: { _id: "g_22222222", name: "Ghost" },
		numberInStock: 5,
		dailyRentalRate: 2.5,
		publishDate: "2018-01-03T19:04:25.809Z",
		liked: true,
	},
	{
		id: "2",
		title: "Nepal",
		genre: { _id: "g_22222222", name: "Ghost" },
		numberInStock: 1,
		dailyRentalRate: 211.5,
		publishDate: "2018-01-11T19:04:25.809Z",
	},
	{
		id: "3",
		title: "India",
		genre: { _id: "g_22222222", name: "Ghost" },
		numberInStock: 2,
		dailyRentalRate: 21.5,
		publishDate: "2018-01-13T19:04:25.809Z",
	},
	{
		id: "5",
		title: "Greece",
		genre: { _id: "g_22222222", name: "Ghost" },
		numberInStock: 2,
		dailyRentalRate: 211.5,
		publishDate: "2018-01-13T19:04:25.809Z",
	},
	{
		id: "6",
		title: "Dongol",
		genre: { _id: "g_22222222", name: "Ghost" },
		numberInStock: 2,
		dailyRentalRate: 211.5,
		publishDate: "2018-01-13T19:04:25.809Z",
	},
	{
		id: "7",
		title: "Moroco",
		genre: { _id: "g_22222222", name: "Ghost" },
		numberInStock: 2,
		dailyRentalRate: 211.5,
		publishDate: "2018-01-13T19:04:25.809Z",
	},
	{
		id: "8",
		title: "Indo",
		genre: { _id: "g_22222222", name: "Ghost" },
		numberInStock: 2,
		dailyRentalRate: 211.5,
		publishDate: "2018-01-13T19:04:25.809Z",
	},
	{
		id: "9",
		title: "Mbc",
		genre: { _id: "g_22222222", name: "Ghost" },
		numberInStock: 2,
		dailyRentalRate: 211.5,
		publishDate: "2018-01-13T19:04:25.809Z",
	},
];

export function getMovies() {
	return movies;
}

export default getMovies;
