import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  DateField,
  NumberField,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ShowButton,
  ReferenceField,
} from 'react-admin';

export const ClinicCreate = (props) => {
  return (
    <Create title="Create a Clinic" {...props}>
      <SimpleForm>
        <TextInput source="clinicName" fullWidth />
        <TextInput multiline source="clinicBranch" fullWidth />
        <NumberInput source="clinicBranchCode" fullWidth />
        <DateTimeInput label="Created" source="createdAt" fullWidth />
        <ReferenceInput
          label="Status"
          source="clinic_status"
          reference="status"
          fullWidth
        >
          <SelectInput optionText="text" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const ClinicEdit = (props) => {
  return (
    <Edit title="Edit a Clinic" {...props}>
      <SimpleForm>
        <NumberInput source="id" disabled  fullWidth/>
        <TextInput source="clinicName"  fullWidth/>
        <TextInput multiline source="clinicBranch" fullWidth/>
        <NumberInput source="clinicBranchCode"fullWidth />
        <DateTimeInput label="Created" source="createdAt" fullWidth/>
        <ReferenceInput
          label="Status"
          source="clinic_status_id"
          reference="status"
          fullWidth
        >
          <SelectInput optionText="text" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export const ClinicList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="clinicName" />
        <NumberField source="clinicBranchCode" />
        <ReferenceField
          disabled
          label="Status"
          source="clinic_status_id"
          reference="status"
          link={false}
        >
          <TextField source="text" />
        </ReferenceField>
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
