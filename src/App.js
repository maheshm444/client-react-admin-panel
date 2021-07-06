import React from 'react';
import { Admin, Resource, Layout, AppBar } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { ClinicCreate, ClinicEdit, ClinicList } from './components/ClinicRes';
import { StatusCreate, StatusEdit, StatusList } from './components/Status';
import { createMuiTheme, Typography, IconButton } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import { createBrowserHistory as createHistory } from 'history';
const history = createHistory();

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#0D6690', contrastText: '#fff' },
    secondary: { main: '#0D6690', contrastText: '#fff' },
  },
});
function App() {
  return (
    <Admin
      theme={theme}
      dataProvider={restProvider('http://localhost:3000')}
      layout={CustomLayout}
      title="Dr. Alkas Admin Panel"
      history={history}
    >
      <Resource
        name="clinics"
        options={{ label: 'Clinics' }}
        list={ClinicList}
        create={ClinicCreate}
        edit={ClinicEdit}
      />
      <Resource
        name="status"
        options={{ label: 'Master Status' }}
        list={StatusList}
        create={StatusCreate}
        edit={StatusEdit}
      />
    </Admin>
  );
}
const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;
const CustomAppBar = ({ ...props }) => (
  <AppBar {...props}>
    <Typography style={{ flex: 1 }}>{props.title}</Typography>
    <IconButton onClick={() => history.push('/support')}>
      <HelpOutline style={{ fill: '#fff' }} />
    </IconButton>
  </AppBar>
);

export default App;
