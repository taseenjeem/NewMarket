import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchDrawer() {
  return (
    <>
      <Button variant={"outline"} size={"icon"}>
        <Search />
      </Button>
    </>
  );
}
