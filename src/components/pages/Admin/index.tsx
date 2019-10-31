import React from "react";

import { Admin, Resource } from "react-admin";

import { List as PostList, Edit as PostEdit } from "./Posts";

type Props = {
  dataProvider: any;
};

class Page extends React.Component<Props> {
  render() {
    return (
      <Admin dataProvider={this.props.dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} />
      </Admin>
    );
  }
}

export default Page;
