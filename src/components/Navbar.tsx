import Link from "next/link";
import MaxWidthWrapper from "./maxWidthWrapper";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
	return (
		<nav className="sticky h-16 inset-x-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-16 items-center justify-between">
					<Link href={"/"} className="flex z-40 font-semibold">
						PDFInSync
					</Link>

					<div className="hidden items-center space-x-4 sm:flex">
						<>
							<Link
								href={"/pricing"}
								className={buttonVariants({
									variant: "ghost",
									size: "sm",
								})}
							>
								Pricing
							</Link>
						</>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
