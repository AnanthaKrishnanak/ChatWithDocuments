import React from "react";
import UploadButton from "./uploadButton";

const Dashboard = () => {
	return (
		<main className="mx-auto max-w-7xl md:pd-10">
			<div className="flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
				<h3>My files</h3>
				<UploadButton />
			</div>
		</main>
	);
};

export default Dashboard;
