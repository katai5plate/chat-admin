import React from "react";

import {
  List as RAList,
  Datagrid,
  TextField,
  DateField,
  Edit as RAEdit,
  SimpleForm,
  TextInput
} from "react-admin";

export const List: React.FC = props => (
  <RAList {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="comment" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </RAList>
);

export const Edit: React.FC = props => (
  <RAEdit {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="comment" />
    </SimpleForm>
  </RAEdit>
);
