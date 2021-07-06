import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateField,
  NumberField,
  NumberInput,
  ShowButton,
  DateTimeInput,
} from 'react-admin';

export const StatusCreate = (props) => {
  return (
    <Create title="Create a Clinic" {...props}>
      <SimpleForm>
        <TextInput source="text" />
        <DateTimeInput label="Created" source="createdAt" />
      </SimpleForm>
    </Create>
  );
};

export const StatusEdit = (props) => {
  return (
    <Edit title="Edit a Clinic" {...props}>
      <Create title="Create a Clinic" {...props}>
        <SimpleForm>
          <NumberInput source="id" />
          <TextInput source="text" />
          <DateTimeInput label="Created" source="createdAt" />
        </SimpleForm>
      </Create>
    </Edit>
  );
};

export const StatusList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="text" />
        <DateField
          source="createdAt"
          options={{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }}
        />
        <ShowButton label="" />
      </Datagrid>
    </List>
  );
};
