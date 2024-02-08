import { useState } from "react";
import ExpandedSidebar from "./expandedSidebar";
import CollapsedSidebar from "./collapsedSidebar";

const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      {expanded ? (
        <ExpandedSidebar expanded={expanded} setExpanded={setExpanded} />
      ) : (
        <CollapsedSidebar expanded={expanded} setExpanded={setExpanded} />
      )}
    </>
  );
};

export default Sidebar;
