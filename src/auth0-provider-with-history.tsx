import React, { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { customHistory } from "./history/history";

interface IProps {
  children: ReactNode;
}

export const Auth0ProviderWithHistory = ({ children }: IProps) => {
  const onRedirectCallback = (appState: any) => {
    customHistory.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
      clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
      redirectUri="https://livewell-app.netlify.app/user/tacklebox"
      onRedirectCallback={onRedirectCallback}
      audience={`${process.env.REACT_APP_AUTH0_AUDIENCE}`}
    >
      {children}
    </Auth0Provider>
  );
};
