// hack that fixes TS errors but loses all type safety for imported sid files
// https://stackoverflow.com/a/73026268
// TODO: there is definitely a better way similar to however the svelte plugin stuff is handled.

declare module "*.sid" {
  import type { ComponentType } from "svelte";
  const component: ComponentType;
  export default component;
}
