import React, { useEffect , useState} from "react";
import "./Tabs.css";
import {Navbar} from '../NavigationBar/Navbar'
import { Link } from "react-router-dom";
import { Popup } from "../popup/Popup";
import { Revertpopup } from "../revertreasonpopup/Revertpopup";

export const Tabs = () => {
  const [showRevert, setShowRevert] = useState(false);

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

  const handleClick = () => {     
    setShowRevert(true);   
  };

  return (
    <div className="status-main">
      <Popup/>
      <Navbar/>
      <div className="status-tabs">
    
      <div className="tab-container">
      <button
        className="tablink defaultOpen"
        onClick={() => openPage("InProgress",null, "red")}
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
              <th>
                <Link
                  href="ACS_2023-25_Block6_UX Design and Implementation"
                  to='/schedule'
                  rel="noopener noreferrer"
                >
                  ACS_2023-25_Block6_UX Design and Implementation_Sem3
                </Link>
              </th>
              <th>
                <button>Edit</button>
                <button onClick={()=>openPage("Completed")}>Complete</button>
              </th>
            </tr>
            <tr>
              <th>
                <a
                  href="https://example.com/acs2023-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS_2023-25_Block5_IT_Security_Sem3
                </a>
              </th>
              <th>
                <button>Edit</button>
                <button>Complete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tabcontent Completed">
        <table>
          <tbody>
            <tr>
              <th>
              <a
                  href="ACS_2023-25_Block6_UX Design and Implementation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS_2023-25_Block6_UX Design and Implementation_Sem3
                </a>
              </th>
              <th>
                <button onClick={handleClick}>Revert</button>
                {showRevert && <Revertpopup />}
                <button>Approve</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tabcontent Approved">
        <table>
          <tbody>
            <tr>
              <th>
              <a
                  href="ACS_2023-25_Block6_UX Design and Implementation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ACS_2023-25_Block6_UX Design and Implementation_Sem3
                </a>
              </th>
              <th>
                <button>Export</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </div>

  
  );
};

export default Tabs;
