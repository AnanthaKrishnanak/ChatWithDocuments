import Link from "next/link";
import MaxWidthWrapper from "./maxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

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
							<LoginLink
								className={buttonVariants({
									variant: "ghost",
									size: "sm",
								})}
							>
								Sign in
							</LoginLink>
							<RegisterLink
								className={buttonVariants({
									size: "sm",
								})}
							>
								Get started
								<ArrowRight className="ml-2 h-5 w-5" />
							</RegisterLink>
						</>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
