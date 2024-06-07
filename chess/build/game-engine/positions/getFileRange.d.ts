import { ChessFile } from "./index";
/** @param `inclusive` - informs whether from and to should be included in returned file range */
export declare const getFileRange: (from: ChessFile, to: ChessFile, { inclusive }?: {
    inclusive?: boolean | undefined;
}) => ChessFile[];
