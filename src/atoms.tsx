import { atom } from "recoil";

export const themeChangeState = atom<boolean>({
  key: "Theme",
  default: true,
});
