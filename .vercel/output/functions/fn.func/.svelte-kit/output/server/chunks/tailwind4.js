import { s as subscribe } from "./utils.js";
import { c as create_ssr_component, a as spread, e as escape_object, v as validate_component } from "./ssr.js";
import { c as createCollapsible, C as Chevrons_up_down } from "./chevrons-up-down.js";
import { X } from "./x.js";
const tailwind_svelte_svelte_type_style_lang = "";
const css = {
  code: ".abs-center.svelte-jcqlhs{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}",
  map: null
};
const Tailwind = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $root, $$unsubscribe_root;
  let $trigger, $$unsubscribe_trigger;
  let $open, $$unsubscribe_open;
  let $content, $$unsubscribe_content;
  const { open, root, content, trigger } = createCollapsible();
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  $$result.css.add(css);
  $$unsubscribe_root();
  $$unsubscribe_trigger();
  $$unsubscribe_open();
  $$unsubscribe_content();
  return `<div${spread([escape_object($root), { class: "mx-auto w-full max-w-md" }], { classes: "svelte-jcqlhs" })}><div class="flex items-center justify-between"><span class="text-sm leading-6 text-white" data-svelte-h="svelte-1bephm5">@thomasglopes starred 3 repositories</span> <button${spread(
    [
      escape_object($trigger),
      {
        class: "relative h-6 w-6 place-items-center rounded-full bg-white text-sm text-magnum-700 shadow-lg hover:opacity-75 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-75"
      }
    ],
    { classes: "svelte-jcqlhs" }
  )}><div class="abs-center svelte-jcqlhs">${$open ? `${validate_component(X, "X").$$render($$result, {}, {}, {})}` : `${validate_component(Chevrons_up_down, "ChevronsUpDown").$$render($$result, {}, {}, {})}`}</div></button></div> <div class="my-2 rounded bg-white p-3 shadow-lg" data-svelte-h="svelte-1gagj1j"><span class="text-base leading-[25px] text-magnum-800">melt-ui/melt-ui</span></div> ${$open ? `<div${spread([escape_object($content)], { classes: "svelte-jcqlhs" })}><div class="flex flex-col gap-2" data-svelte-h="svelte-l2gaap"><div class="rounded bg-white p-3 shadow-lg"><span class="text-base leading-[25px] text-magnum-800">sveltejs/svelte</span></div> <div class="rounded bg-white p-3 shadow-lg"><span class="text-base leading-[25px] text-magnum-800">sveltejs/kit</span></div></div></div>` : ``} </div>`;
});
export {
  Tailwind as default
};
