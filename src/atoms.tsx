import { atom } from "recoil";

export const isDarkAtom = atom<boolean>({
  key: "Theme",
  default: false,
});
