import React from "react";
import DocumentTitle from "react-document-title";

import { Container } from "../../components/layout";

export default class extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title="@36node - Template React Redux">
        <Container>安利</Container>
      </DocumentTitle>
    );
  }
}
