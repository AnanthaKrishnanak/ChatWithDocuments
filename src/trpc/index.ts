import { publicProcedure, router } from "./trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
	authCallback: publicProcedure.query(async () => {
		const { getUser } = getKindeServerSession();
		const user = await getUser();

		//Throw an unauthorized error if the user is not authenticated
		if (!user || !user.id) throw new TRPCError({ code: "UNAUTHORIZED" });

		//Check if the user is in the database

		return { success: true };
	}),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
