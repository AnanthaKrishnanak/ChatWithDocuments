// this component is to control the spacing from left and right of the screen across all pages.

import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
				className
			)}
		>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
