import "./App.css";

function App() {
	return (
		<main className="container">
			<h1>Hello World</h1>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Genre</th>
						<th>Stock</th>
						<th>Rate</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Terminator</td>
						<td>Action</td>
						<td>6</td>
						<td>2.5</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
}

export default App;
