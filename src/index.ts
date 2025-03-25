export { default as ThumbnailGenerator } from "./modules/thumbnail/ThumbnailGenerator";
export { default as UploadManager } from "./modules/upload/UploadManager";
export * from "./modules/upload/types";
export * from "@/utils/helpers";

import subelo from "./subelo";
export { subelo };

// Exportar la instancia como exportación predeterminada
export default subelo;
