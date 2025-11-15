import { SnackbarProvider } from "notistack";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Layout from "./Layout";
import routes from "./Routes";
import { store } from "./store";
import { Provider } from "react-redux";
import Testing from "./Testing";
import { createTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, setTheme] = useState(true);
  const queryClient = new QueryClient();
  const themeMode = createTheme({
    palette: {
      mode: true ? "dark" : "light",
      ...(theme && {
        background: {
          default: "#000000", // ✅ pure black
          paper: "#121212",   // ✅ card/paper thoda gray
        },
        text: {
          primary: "#ffffff", // ✅ white text
          secondary: "#aaaaaa",
        },
      }),
    },
  });
  return (
    // <ThemeProvider theme={themeMode}>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider preventDuplicate maxSnack={1}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/test" element={<Testing />} />
              <Route path="/signin" element={<SignIn />} />
              {routes.map((route) => {
                return (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={
                      <Layout
                        theme={theme}
                        setTheme={setTheme}
                        component={route.element}
                      />
                    }
                  />
                );
              })}
            </Routes>
          </BrowserRouter>
        </Provider>
      </SnackbarProvider>
    </QueryClientProvider>
    // </ThemeProvider>
  );
};

export default App;

// import { SnackbarProvider } from "notistack";
// import { useState, useMemo } from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
// import SignIn from "./Authentication/SignIn";
// import SignUp from "./Authentication/SignUp";
// import Layout from "./Layout";
// import routes from "./Routes";
// import { store } from "./store";
// import Testing from "./Testing";

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const queryClient = new QueryClient();

//   // ✅ Memoize theme so it's recreated only when `isDarkMode` changes
//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode: isDarkMode ? "dark" : "light",
//           background: {
//             default: isDarkMode ? "#000000" : "#f5f5f5",
//             paper: isDarkMode ? "#121212" : "#ffffff",
//           },
//           text: {
//             primary: isDarkMode ? "#ffffff" : "#000000",
//             secondary: isDarkMode ? "#aaaaaa" : "#333333",
//           },
//           ...(isDarkMode && {
//             primary: { main: "#f97316" }, // orange-500
//             secondary: { main: "#facc15" }, // amber-400
//           }),
//         },
//         typography: {
//           fontFamily: "Inter, sans-serif",
//         },
//       }),
//     [isDarkMode]
//   );

//   return (
//     <ThemeProvider theme={theme}>
//       {/* ✅ Makes background and text colors follow theme */}
//       <CssBaseline />
//       <QueryClientProvider client={queryClient}>
//         <SnackbarProvider preventDuplicate maxSnack={1}>
//           <Provider store={store}>
//             <BrowserRouter>
//               <Routes>
//                 <Route path="/signup" element={<SignUp />} />
//                 <Route path="/test" element={<Testing />} />
//                 <Route path="/signin" element={<SignIn />} />

//                 {routes.map((route) => (
//                   <Route
//                     key={route.id}
//                     path={route.path}
//                     element={
//                       <Layout
//                         theme={isDarkMode}
//                         setTheme={setIsDarkMode}
//                         component={route.element}
//                       />
//                     }
//                   />
//                 ))}
//               </Routes>
//             </BrowserRouter>
//           </Provider>
//         </SnackbarProvider>
//       </QueryClientProvider>
//     </ThemeProvider>
//   );
// };

// export default App;


// import { SnackbarProvider } from "notistack";
// import { useState, useMemo } from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// import SignIn from "./Authentication/SignIn";
// import SignUp from "./Authentication/SignUp";
// import Layout from "./Layout";
// import routes from "./Routes";
// import { store } from "./store";
// import Testing from "./Testing";

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const queryClient = new QueryClient();

//   // ✅ Memoized MUI theme
//   const muiTheme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode: isDarkMode ? "dark" : "light",
//           background: {
//             default: isDarkMode ? "#000000" : "#f5f5f5",
//             paper: isDarkMode ? "#121212" : "#ffffff",
//           },
//           text: {
//             primary: isDarkMode ? "#ffffff" : "#000000",
//             secondary: isDarkMode ? "#aaaaaa" : "#333333",
//           },
//           primary: {
//             main: "#f97316", // orange-500
//           },
//           secondary: {
//             main: "#facc15", // amber-400
//           },
//         },
//         typography: {
//           fontFamily: "Inter, sans-serif",
//         },
//       }),
//     [isDarkMode]
//   );

//   return (
//     <ThemeProvider theme={muiTheme}>
//       <CssBaseline />
//       <QueryClientProvider client={queryClient}>
//         <SnackbarProvider preventDuplicate maxSnack={1}>
//           <Provider store={store}>
//             <BrowserRouter>
//               <Routes>
//                 <Route path="/signup" element={<SignUp />} />
//                 <Route path="/test" element={<Testing />} />
//                 <Route path="/signin" element={<SignIn />} />

//                 {routes.map((route) => (
//                   <Route
//                     key={route.id}
//                     path={route.path}
//                     element={
//                       <Layout
//                         theme={isDarkMode}
//                         setTheme={setIsDarkMode}
//                         component={route.element}
//                       />
//                     }
//                   />
//                 ))}
//               </Routes>
//             </BrowserRouter>
//           </Provider>
//         </SnackbarProvider>
//       </QueryClientProvider>
//     </ThemeProvider>
//   );
// };

// export default App;


