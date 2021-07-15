import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = () => {
	const { columns, sortColumn, onSort, data } = this.props;
	return (
		<table className="table">
			<TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody data={data} columns={this.columns} />
		</table>
	);
};

export default Table;
