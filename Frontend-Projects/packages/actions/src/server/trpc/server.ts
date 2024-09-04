import "server-only"; // Make sure you can't import this on client

import { headers } from "next/headers";
import { appRouter } from "../api/root";

export const api = appRouter.caller({
  headers: headers(),
});
