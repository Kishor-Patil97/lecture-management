import React, { useEffect } from "react";
import "./Tabs.css";

export const Tabs = () => {
  useEffect(() => {
    const defaultOpen = document.querySelector(".defaultOpen");
    if (defaultOpen) {
      defaultOpen.click();
    }
  }, []);

  const openPage = (pageName, elmnt, color) => {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    const pageElement = document.querySelector(`.${pageName}`);
    if (pageElement) {
      pageElement.style.display = "block";
    }

    if (elmnt) {
      elmnt.style.backgroundColor = color;
    }
  };

  return (
    <div className="tab-container">
      <button
        className="tablink defaultOpen"
        onClick={() => openPage("InProgress", null, "red")}
      >
        In Progress
      </button>
      <button
        className="tablink"
        onClick={() => openPage("Completed", null, "green")}
      >
        Completed
      </button>
      <button
        className="tablink"
        onClick={() => openPage("Approved", null, "blue")}
      >
        Approved
      </button>

      <div className="tabcontent InProgress">
        <table>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://example.com/acs2022-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS 2022 - 2024
                </a>
              </td>
              <td>
                <button>Edit</button>
                <button>Complete</button>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://example.com/acs2023-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS 2023 - 2025
                </a>
              </td>
              <td>
                <button>Edit</button>
                <button>Complete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tabcontent Completed">
        <table>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://example.com/acs2022-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS 2022 - 2024
                </a>
              </td>
              <td>
                <button>Revert</button>
                <button>Approve</button>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://example.com/acs2023-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS 2023 - 2025
                </a>
              </td>
              <td>
                <button>Revert</button>
                <button>Approve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tabcontent Approved">
        <table>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://example.com/acs2022-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS 2022 - 2024
                </a>
              </td>
              <td>
                <button>Export</button>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://example.com/acs2023-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS 2023 - 2025
                </a>
              </td>
              <td>
                <button>Export</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabs;
