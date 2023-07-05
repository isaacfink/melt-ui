import { s as subscribe } from "./utils.js";
import { c as create_ssr_component, a as spread, e as escape_object, v as validate_component, b as each, d as escape } from "./ssr.js";
import { w as writable } from "./index2.js";
import "./clickOutside.js";
import { c as createDropdownMenu, A as Align_justify } from "./align-justify.js";
import { C as Chevron_right } from "./chevron-right.js";
import { C as Check } from "./check.js";
const tailwind_svelte_svelte_type_style_lang = "";
const css = {
  code: ".menu.svelte-12wd4zl{z-index:10;display:flex;max-height:300px;min-width:220px;flex-direction:column;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(23 23 23 / 0.3);--tw-shadow:var(--tw-shadow-colored);border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.25rem\n}@media(min-width: 1024px){.menu.svelte-12wd4zl{max-height:none\n		}}.menu.svelte-12wd4zl{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important\n}.subMenu.svelte-12wd4zl{min-width:220px;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(23 23 23 / 0.3);--tw-shadow:var(--tw-shadow-colored)\n}.item.svelte-12wd4zl{position:relative;height:25px;min-height:25px;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:0.125rem;padding-left:1.5rem;padding-right:0.25rem;z-index:20;--tw-text-opacity:1;color:rgb(121 58 21 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px\n}.item[data-highlighted].svelte-12wd4zl{--tw-bg-opacity:1;background-color:rgb(252 224 172 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(121 58 21 / var(--tw-text-opacity))\n}.item[data-disabled].svelte-12wd4zl{--tw-text-opacity:1;color:rgb(212 212 212 / var(--tw-text-opacity))\n}.item.svelte-12wd4zl{display:flex;align-items:center;font-size:0.875rem;line-height:1.25rem;line-height:1;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important\n}.trigger.svelte-12wd4zl{display:inline-flex;height:2.25rem;width:2.25rem;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0px;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgb(121 58 21 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.trigger.svelte-12wd4zl:hover{background-color:rgb(255 255 255 / 0.9)\n}.trigger[data-highlighted].svelte-12wd4zl{outline:2px solid transparent;outline-offset:2px;--tw-ring-opacity:1 !important;--tw-ring-color:rgb(247 177 85 / var(--tw-ring-opacity)) !important;--tw-ring-offset-width:2px !important\n}.trigger.svelte-12wd4zl:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}.check.svelte-12wd4zl{position:absolute;left:0.5rem;top:50%;--tw-text-opacity:1;color:rgb(243 141 28 / var(--tw-text-opacity));translate:0 calc(-50% + 1px)\n}.dot.svelte-12wd4zl{height:4.75px;width:4.75px;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(121 58 21 / var(--tw-bg-opacity))\n}.separator.svelte-12wd4zl{margin:5px;height:1px;--tw-bg-opacity:1;background-color:rgb(252 224 172 / var(--tw-bg-opacity))\n}.rightSlot.svelte-12wd4zl{margin-left:auto;padding-left:1.25rem\n}.icon.svelte-12wd4zl{height:13px;width:13px\n}.check.svelte-12wd4zl{position:absolute;left:0px;display:inline-flex;width:25px;align-items:center;justify-content:center\n}.text.svelte-12wd4zl{padding-left:1.5rem;font-size:0.75rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(82 82 82 / var(--tw-text-opacity))\n}",
  map: null
};
const Tailwind = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $trigger, $$unsubscribe_trigger;
  let $menu, $$unsubscribe_menu;
  let $item, $$unsubscribe_item;
  let $separator, $$unsubscribe_separator;
  let $checkboxItem, $$unsubscribe_checkboxItem;
  let $settingsSync, $$unsubscribe_settingsSync;
  let $subTriggerA, $$unsubscribe_subTriggerA;
  let $subMenuA, $$unsubscribe_subMenuA;
  let $radioGroup, $$unsubscribe_radioGroup;
  let $radioItem, $$unsubscribe_radioItem;
  let $isChecked, $$unsubscribe_isChecked;
  let $hideMeltUI, $$unsubscribe_hideMeltUI;
  let $arrow, $$unsubscribe_arrow;
  const { trigger, menu, item, checkboxItem, arrow, separator, createSubMenu, createMenuRadioGroup } = createDropdownMenu();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  $$unsubscribe_menu = subscribe(menu, (value) => $menu = value);
  $$unsubscribe_item = subscribe(item, (value) => $item = value);
  $$unsubscribe_checkboxItem = subscribe(checkboxItem, (value) => $checkboxItem = value);
  $$unsubscribe_arrow = subscribe(arrow, (value) => $arrow = value);
  $$unsubscribe_separator = subscribe(separator, (value) => $separator = value);
  const { subMenu: subMenuA, subTrigger: subTriggerA } = createSubMenu();
  $$unsubscribe_subMenuA = subscribe(subMenuA, (value) => $subMenuA = value);
  $$unsubscribe_subTriggerA = subscribe(subTriggerA, (value) => $subTriggerA = value);
  const { radioGroup, radioItem, isChecked } = createMenuRadioGroup({ value: "Hunter Johnston" });
  $$unsubscribe_radioGroup = subscribe(radioGroup, (value) => $radioGroup = value);
  $$unsubscribe_radioItem = subscribe(radioItem, (value) => $radioItem = value);
  $$unsubscribe_isChecked = subscribe(isChecked, (value) => $isChecked = value);
  const personsArr = ["Hunter Johnston", "Thomas G. Lopes", "Adrian Gonz", "Franck Poingt"];
  const settingsSync = writable(true);
  $$unsubscribe_settingsSync = subscribe(settingsSync, (value) => $settingsSync = value);
  const hideMeltUI = writable(false);
  $$unsubscribe_hideMeltUI = subscribe(hideMeltUI, (value) => $hideMeltUI = value);
  $$result.css.add(css);
  $$unsubscribe_trigger();
  $$unsubscribe_menu();
  $$unsubscribe_item();
  $$unsubscribe_separator();
  $$unsubscribe_checkboxItem();
  $$unsubscribe_settingsSync();
  $$unsubscribe_subTriggerA();
  $$unsubscribe_subMenuA();
  $$unsubscribe_radioGroup();
  $$unsubscribe_radioItem();
  $$unsubscribe_isChecked();
  $$unsubscribe_hideMeltUI();
  $$unsubscribe_arrow();
  return `<div class="flex w-full items-center justify-center"><button${spread(
    [
      { type: "button" },
      { class: "trigger" },
      escape_object($trigger),
      { "aria-label": "Update dimensions" }
    ],
    { classes: "svelte-12wd4zl" }
  )}>${validate_component(Align_justify, "AlignJustify").$$render($$result, { class: "h-4 w-4" }, {}, {})} <span class="sr-only" data-svelte-h="svelte-joms16">Open Popover</span></button> <div${spread([{ class: "menu" }, escape_object($menu)], { classes: "svelte-12wd4zl" })}><div${spread([{ class: "item" }, escape_object($item)], { classes: "svelte-12wd4zl" })}>About Melt UI</div> <div${spread([{ class: "item" }, escape_object($item)], { classes: "svelte-12wd4zl" })}>Check for Updates...</div> <div${spread([{ class: "separator" }, escape_object($separator)], { classes: "svelte-12wd4zl" })}></div> <div${spread([{ class: "item" }, escape_object($checkboxItem)], { classes: "svelte-12wd4zl" })}><div class="check svelte-12wd4zl">${$settingsSync ? `${validate_component(Check, "Check").$$render($$result, { class: "icon" }, {}, {})}` : ``}</div>
			Settings Sync is On</div> <div${spread([{ class: "item" }, escape_object($subTriggerA)], { classes: "svelte-12wd4zl" })}>Profiles
			<div class="rightSlot svelte-12wd4zl">${validate_component(Chevron_right, "ChevronRight").$$render($$result, { class: "icon" }, {}, {})}</div></div> <div${spread([{ class: "menu subMenu" }, escape_object($subMenuA)], { classes: "svelte-12wd4zl" })}><div class="text svelte-12wd4zl" data-svelte-h="svelte-1l1m1yr">People</div> <div${spread([escape_object($radioGroup)], { classes: "svelte-12wd4zl" })}>${each(personsArr, (person) => {
    return `<div${spread([{ class: "item" }, escape_object($radioItem({ value: person }))], { classes: "svelte-12wd4zl" })}><div class="check svelte-12wd4zl">${$isChecked(person) ? `<div class="dot svelte-12wd4zl"></div>` : ``}</div> ${escape(person)} </div>`;
  })}</div></div> <div${spread([escape_object($separator), { class: "separator" }], { classes: "svelte-12wd4zl" })}></div> <div${spread([{ class: "item" }, escape_object($checkboxItem)], { classes: "svelte-12wd4zl" })}><div class="check svelte-12wd4zl">${$hideMeltUI ? `${validate_component(Check, "Check").$$render($$result, { class: "icon" }, {}, {})}` : ``}</div>
			Hide Melt UI
			<div class="rightSlot svelte-12wd4zl" data-svelte-h="svelte-o3yf3r">⌘H</div></div> <div${spread([{ class: "item" }, escape_object($item), { "aria-disabled": "true" }], { classes: "svelte-12wd4zl" })}>Show All Components
			<div class="rightSlot svelte-12wd4zl" data-svelte-h="svelte-adhnky">⇧⌘N</div></div> <div${spread([escape_object($separator), { class: "separator" }], { classes: "svelte-12wd4zl" })}></div> <div${spread([{ class: "item" }, escape_object($item)], { classes: "svelte-12wd4zl" })}>Quit Melt UI
			<div class="rightSlot svelte-12wd4zl" data-svelte-h="svelte-cnmoo2">⌘Q</div></div> <div${spread([escape_object($arrow)], { classes: "svelte-12wd4zl" })}></div></div> </div>`;
});
export {
  Tailwind as default
};
