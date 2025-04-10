export type IntervalType = "manual" | "automatic";

export interface ThumbnailOptions {
  numSnapshots?: number;
  format?: "png" | "jpg";
  method?: "auto" | "native" | "ffmpeg";
  thumbnailInterval?: number;
  intervalType?: IntervalType;
}

export interface Thumbnail {
  blobUrl: string;
  blob: Blob;
  arrayBuffer: ArrayBuffer;
  timestamp: number;
  videoDuration: number;
  width?: number;
  height?: number;
  isBlack?: boolean;
  method: "native" | "ffmpeg";
}

export interface CapturedFrame {
  blob: Blob;
  canvas: HTMLCanvasElement;
  timestamp: number;
  width: number;
  height: number;
}

export type ThumbnailGenerationStatus =
  | "initializing"
  | "generatingThumbnails"
  | "completed"
  | "errorGeneratingThumbnails"
  | "thumbnailsGenerated";

