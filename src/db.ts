import { Database, LocalDest } from "@subsquid/file-store";
import { Transfers, Approvals } from "./tables";

export const db = new Database({
  tables: {
    Transfers,
    Approvals,
  },
  dest: new LocalDest("./indexed_data"),
  chunkSizeMb: 100,
  syncIntervalBlocks: 10000,
});
