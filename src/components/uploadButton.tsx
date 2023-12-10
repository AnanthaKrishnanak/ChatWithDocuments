"use client";

import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "./ui/button";

const UploadButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(visible) => {
				if (!visible) {
					setIsOpen(visible);
				}
			}}
		>
			<DialogTrigger asChild>
				<Button onClick={() => setIsOpen(true)}>Upload file</Button>
			</DialogTrigger>
			<DialogContent>
				Hello here you are going to upload your files
			</DialogContent>
		</Dialog>
	);
};

export default UploadButton;
