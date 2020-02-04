export const NAVIGATION_EVENT = "NAVIGATION_EVENT";

export function NavigationEvent(to) {
  return {
    type: NAVIGATION_EVENT,
    to
  };
}
