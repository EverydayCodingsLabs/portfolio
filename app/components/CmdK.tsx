"use client";
import "./cmdk.css";
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { config } from "../config/config";

const iconMap: Record<string, any> = {
  "/": "HomeIcon",
  "/projects": "CodeBracketSquareIcon",
  "/resume": "BriefcaseIcon",
  "/contact": "PhoneIcon",
};

export default function Cmdk() {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useHandleOpenCommandPalette(setOpen);

  const filteredItems = filterItems(
    [
      {
        heading: "Navigate",
        id: "navigation",
        items: config.navigation.map(({ path, name }) => ({
          id: path,
          children: name,
          icon: iconMap[path] || ("DocumentIcon" as any),
          onClick: () => router.push(path),
        })),
      },
    ],
    search,
  );

  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={"root"}
      placeholder="Go to a page"
    >
      <CommandPalette.Page id="root" onEscape={() => setOpen(false)}>
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  showType={false}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <p className="px-3.5 py-4 text-sm text-neutral-500 dark:text-neutral-400">
            No page matches “{search}”.
          </p>
        )}
      </CommandPalette.Page>
    </CommandPalette>
  );
}
