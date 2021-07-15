import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a className="nav-link" href="#">
						Home <span class="sr-only">(current)</span>
					</a>
				</li>
				<li class="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
