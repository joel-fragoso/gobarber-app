import React, { FunctionComponent } from 'react';

import { AuthProvider } from './auth';

const AppProvider: FunctionComponent = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
