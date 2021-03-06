import React from 'react';<% if(componentHasStyles) { %>
import cssmodules from 'react-css-modules';
import styles from '<%= style.webpackPath %>';<% } %>

<% if(componentHasStyles) { %>@cssmodules(styles)
<% } %>class <%= component.className %> extends React.Component {

  render() {
    return (
      <div className="<%= style.className %>" styleName="<%= style.className %>">
        Please edit <%= component.path %><%= component.fileName %> to update this component!
      </div>
    );
  }
}

<%= component.className %>.displayName = '<%= component.displayName %>';
<%= component.className %>.propTypes = {};
<%= component.className %>.defaultProps = {};

export default <%= component.className %>;
