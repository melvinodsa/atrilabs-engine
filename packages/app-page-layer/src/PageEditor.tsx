import {
  agastyaLine,
  gray200,
  gray300,
  gray500,
  gray700,
  gray900,
  h1Heading,
  h4Heading,
  smallText,
} from "@atrilabs/design-system";
import { useState } from "react";
import { Cross } from "./icons/Cross";
import { DownArrow } from "./icons/DownArrow";
import { Folder } from "./icons/Folder";
import { Maginfier } from "./icons/Magnifier";
import { PageIcon } from "./icons/PageIcon";
import { Setting } from "./icons/Setting";

const styles: { [key: string]: React.CSSProperties } = {
  // ============pageCont================
  pageCont: {
    height: `100%`,
    backgroundColor: gray700,
  },
  pageContHeader: {
    padding: `0.5rem 1rem`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  pageContHeaderH4: {
    ...h1Heading,
    color: gray300,
  },
  searchBox: {
    ...smallText,
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    color: gray300,
    outline: "none",
  },
  // =============icons====================
  icons: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  iconsSpan: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: "1.3rem",
    height: "100% !important",
  },
  // ==============.search-container===================
  searchContainer: {
    backgroundColor: gray500,
    margin: "0.8rem 1rem",
    padding: "0.2rem 0.5rem",
    display: "flex",
    borderRadius: "2px",
  },
  // ==================folder======================
  folder: {
    width: "100%",
  },
  folderHeader: {
    width: "100%",
    padding: "0.75rem 1rem",
    backgroundColor: gray900,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  folderHeaderSpan: {
    display: "flex",
    marginRight: "0.5rem",
    cursor: "pointer",
  },
  folderHeaderP: {
    ...h4Heading,
    color: gray300,
  },
  // ================page===============
  page: {
    display: "flex",
    padding: "0.5rem 1rem",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${agastyaLine}`,
  },
};

export const PageEditor = () => {
  const [showPages, setShowPages] = useState<boolean>(true);
  return (
    <div style={styles.pageCont}>
      <header style={styles.pageContHeader}>
        <h4 style={styles.pageContHeaderH4}>Pages</h4>
        <div style={styles.icons}>
          <span style={styles.iconsSpan}>
            <Folder />
          </span>
          <span style={styles.iconsSpan}>
            <PageIcon />
          </span>
          <span style={styles.iconsSpan}>
            <Cross />
          </span>
        </div>
      </header>
      <div style={styles.searchContainer}>
        <div
          style={{
            border: `1px solid transparent`,
          }}
        >
          <Maginfier />
        </div>
        <input
          type="text"
          className="search-box"
          style={styles.searchBox}
          placeholder="Search Pages"
        />
      </div>
      <section
        style={{
          display: "flex",
        }}
      >
        <main style={styles.folder}>
          <header style={styles.folderHeader}>
            <span
              style={styles.folderHeaderSpan}
              onClick={() => setShowPages((prev) => !prev)}
            >
              <DownArrow />
            </span>
            <p style={styles.folderHeaderP}>Folder-1</p>
          </header>
          {showPages && (
            <div>
              <main style={styles.page} className="__page">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <span
                    style={{
                      marginRight: `0.5rem`,
                      display: "flex",
                    }}
                  >
                    <PageIcon />
                  </span>
                  <p
                    style={{
                      ...smallText,
                      color: gray200,
                    }}
                  >
                    Page Name
                  </p>
                </div>
                <div className="__end">
                  <span className="__hoverIcon">
                    <Setting />
                  </span>
                </div>
              </main>
            </div>
          )}
        </main>
      </section>
    </div>
  );
};