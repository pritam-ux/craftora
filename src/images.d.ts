// Image queries handled in vite.config.ts.

declare module "*?photo" {
  const picture: import("@/components/Photo").PictureData;
  export default picture;
}

declare module "*?lqip" {
  const dataUrl: string;
  export default dataUrl;
}
