import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// import cache from 'react'

import { ClearHistory } from "~/components/clear-history";
import { SidebarItems } from "~/components/sidebar-items";
import { ThemeToggle } from "~/components/theme-toggle";
import { type JsonifyChat } from "~/lib/types";
// import { clearChats, getChats } from "~/models/chat.server";

interface SidebarListProps {
  userId?: string;
  children?: React.ReactNode;
}

// const loadChats = cache(async (userId?: string) => {
//   return await getChats(userId)
// })

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const userId = await requireUserId(request);
//   const chats = await getChats(userId);
//   return json({chats})
// };

export function SidebarList({ userId }: SidebarListProps) {
  const { chats } = useLoaderData<typeof loader>();
  // console.log("Inside sidebar list", chats);

  
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        {chats?.length ? (
          <div className="space-y-2 px-2">
            <SidebarItems chats={chats as JsonifyChat[]} />
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <ThemeToggle />
        <ClearHistory isEnabled={chats?.length > 0} />
      </div>
    </div>
  );
}
