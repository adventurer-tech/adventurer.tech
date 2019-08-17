import React from "react";
import DocumentTitle from "react-document-title";
import { withRouter } from "react-router";

import { Container } from "../../components/layout";

@withRouter
export default class extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title="@36node - Template React Redux">
        <Container>关于</Container>
      </DocumentTitle>
    );
  }
}
