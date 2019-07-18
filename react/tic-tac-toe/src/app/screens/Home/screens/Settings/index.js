import React, { PureComponent } from 'react';

import SettingsForm from './components/SettingsForm';

export class Settings extends PureComponent {
  handleSubmit = user => console.log(user);

  render() {
    return <SettingsForm onSubmit={this.handleSubmit} />;
  }
}

export default Settings;
