import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useState } from "react";
const Page = () => {
	const { getUser } = getKindeServerSession();

};

export default Page;
