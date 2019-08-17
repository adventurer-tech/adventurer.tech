import React from "react";
import DocumentTitle from "react-document-title";
import { withRouter } from "react-router";

import { Container } from "../components/layout";
import Title from "../components/title";

@withRouter
export default class extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title="Adventure - 首页">
        <Container>
          <Title title="我们是冒险者" eng="We are Adventure" />
        </Container>
      </DocumentTitle>
    );
  }
}
