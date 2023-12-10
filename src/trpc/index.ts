import { db } from "@/db";
import { publicProcedure, router } from "./trpc";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";
import { PrismaClient } from "@prisma/client";

export const appRouter = router({
	authCallback: publicProcedure.query(async () => {
		const { getUser } = getKindeServerSession();
		const user = await getUser();

		//Throw an unauthorized error if the user is not authenticated
		if (!user?.id || !user?.email)
			throw new TRPCError({ code: "UNAUTHORIZED" });

		//Check if the user is already in the data base the database
		const p = new PrismaClient();
		const dbUser = await p.user.findFirst({
			where: { id: user.id },
		});

		//if no user is found in db, add the user to the database if the user is authenticated
		if (!dbUser) {
			await db.user.create({
				data: {
					id: user.id,
					email: user.email,
				},
			});
		}

		return { success: true };
	}),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
