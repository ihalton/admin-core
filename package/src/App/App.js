import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core";
import { defaultTheme } from "@reactioncommerce/catalyst";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationProvider, OidcSecure } from "@axa-fr/react-oidc-context";
import { ApolloProvider } from "react-apollo";
import { SnackbarProvider } from "notistack";
import Dashboard from "../Dashboard";

/**
 * BAse application component containing providers for theme, auth, routing and more
 * @param {Object} props Props for configuring various providers and base components
 * @returns {React.ReactElement} App
 */
function App(props) {
  const {
    DashboardComponent: DashboardComponentProp,
    apolloClient,
    authenticationProviderProps,
    dashboardComponentProps,
    plugins,
    snackbarProviderProps: snackbarProps
  } = props;

  const DashboardComponent = DashboardComponentProp || Dashboard;

  const snackbarProviderProps = {
    maxSnack: 3,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    ...snackbarProps
  };

  return (
    <Suspense fallback={null}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <AuthenticationProvider {...authenticationProviderProps}>
            <ThemeProvider theme={defaultTheme}>
              <SnackbarProvider {...snackbarProviderProps}>
                <OidcSecure>
                  <DashboardComponent
                    {...dashboardComponentProps}
                    plugins={plugins}
                  />
                </OidcSecure>
              </SnackbarProvider>
            </ThemeProvider>
          </AuthenticationProvider>
        </BrowserRouter>
      </ApolloProvider>
    </Suspense>
  );
}

App.propTypes = {
  DashboardComponent: PropTypes.elementType,
  apolloClient: PropTypes.object,
  authenticationProviderProps: PropTypes.object,
  dashboardComponentProps: PropTypes.object,
  plugins: PropTypes.arrayOf(PropTypes.object),
  snackbarProviderProps: PropTypes.object
};

export default App;
