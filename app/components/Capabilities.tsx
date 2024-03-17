import { Sidebar } from "../components/sidebar-cap";
import FrameWork from "../components/Framework";
import { Button } from "../components/ui/button";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
export const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
];

export default function Capabilities() {
  return (
    <div>
      <div className="grid lg:grid-cols-5">
        <Sidebar playlists={playlists} className="hidden lg:block" />
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8 text-white">
            <FrameWork />
          </div>
        </div>
      </div>
    </div>
  );
}
