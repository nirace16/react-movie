import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import { getMovies } from "../services/moviesData";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/genresData";
import Pagination from "./common/pajination";
import { paginate } from "../utils/paginate";
import NavBar from "./common/navBar";
// import { getByTitle } from "@testing-library/react";
import _ from "lodash";

class Movies extends Component {
	state = {
		movie: [],
		genres: [],
		pageSize: 5,
		currentPage: 1,
		sortColumn: { path: "title", order: "asc" },
	};

	componentDidMount() {
		const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
		this.setState({ movie: getMovies(), genres: genres });
	}

	handleDelete = (singleMovie) => {
		const movies = this.state.movie.filter((m) => m.id !== singleMovie.id);
		this.setState({ movie: movies });
	};

	handlelike = (movie) => {
		const movies = [...this.state.movie];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		console.log({ ...movies[index] });
		movies[index].liked = !movies[index].liked;
		this.setState({ movie: movies });
	};

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handleGenreSelect = (genre) => {
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	handleSort = (sortColumn) => {
		this.setState({ sortColumn });
	};

	getPagedData = () => {
		const { pageSize, currentPage, movie, selectedGenre, sortColumn } =
			this.state;
		const filtered =
			selectedGenre && selectedGenre._id
				? movie.filter((m) => m.genre._id === selectedGenre._id)
				: movie;

		const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

		const moviesPaginated = paginate(sorted, currentPage, pageSize);

		return { totalCount: filtered.length, data: moviesPaginated };
	};

	render() {
		const { length: count } = this.state.movie;
		const { pageSize, currentPage, sortColumn } = this.state;
		if (count === 0) return <p>There are no movies</p>;

		const { totalCount, data: moviesPaginated } = this.getPagedData();

		return (
			<main className="container">
				<NavBar />
				<div className="row">
					<div className="col-2">
						<ListGroup
							items={this.state.genres}
							selectedItem={this.state.selectedGenre}
							onItemSelect={this.handleGenreSelect}
						/>
					</div>
					<div className="col">
						There are total {totalCount} records in the database.
						<MoviesTable
							movie={moviesPaginated}
							sortColumn={sortColumn}
							onLike={this.handlelike}
							onDelete={this.handleDelete}
							onSort={this.handleSort}
						/>
						<Pagination
							itemsCount={totalCount}
							pageSize={pageSize}
							currentPage={currentPage}
							onPageChange={this.handlePageChange}
						/>
					</div>
				</div>
			</main>
		);
	}
}

export default Movies;
