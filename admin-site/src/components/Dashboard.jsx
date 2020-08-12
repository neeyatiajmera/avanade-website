import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="dashboard">
      <div class="container box2">
      <div class="row align-items-center">
      <div class="col-lg-12">
            <h1 class="font-weight-light">Dashboard</h1>
            <AppBar position = "static">
              <Tabs value={value} onChange={handleChange} aria-label="simple-tabs" centered>
                <Tab label = "View 1" {...a11yProps(0)}/>
                <Tab label = "View 2" {...a11yProps(1)}/>
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <iframe src = "https://app.powerbi.com/reportEmbed?reportId=9b5704da-4cc4-41f1-8281-2c0262a190f8&groupId=9606f938-1f8a-4601-bd8e-660039edae4e&autoAuth=true&ctid=cf36141c-ddd7-45a7-b073-111f66d0b30c&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" width="950" height="600"> Loading... </iframe>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <iframe src = "https://app.powerbi.com/reportEmbed?reportId=9b5704da-4cc4-41f1-8281-2c0262a190f8&groupId=9606f938-1f8a-4601-bd8e-660039edae4e&autoAuth=true&ctid=cf36141c-ddd7-45a7-b073-111f66d0b30c&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" width="950" height="600"> Loading... </iframe>
            </TabPanel>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;