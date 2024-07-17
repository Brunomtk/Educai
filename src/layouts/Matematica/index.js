import React from 'react';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Cards from "components/Cards";


// Data

function CompanyTable() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox pt={2}>
            <Cards />
      </ArgonBox>
    </DashboardLayout>
  );
}

export default CompanyTable;
