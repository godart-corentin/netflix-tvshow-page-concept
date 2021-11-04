import { shows } from "./data";
import { Show } from "./types";

export class ShowService {
  static getShow(index: number): Show | null {
    if (typeof shows[index] === "undefined") {
      return null;
    }
    return shows[index];
  }
}
