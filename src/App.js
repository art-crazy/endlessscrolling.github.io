import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch,} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
// import {
//     // BrowserRouter as Router,
//     HashRouter as Router,
//     Redirect, Route, Switch,
// } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
    return (
        // <QueryClientProvider client={queryClient}>
        //     <Switch>
        //         <Router>
        //             <Route exact path="/home" component={PostList} />
        //             <Route exact path="/" component={PostList} />
        //             {/*<Route path="/post/:id" component={PostDetails} />*/}
        //         </Router>
        //     </Switch>
        //     {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        // </QueryClientProvider>
        // 111
        <Router
            // basename="/promo/web/"
        >
            <Switch>
                <Route path="/post/:id" component={PostDetails} />
                <Route path="/redirect" component={PostList} />
                <Route exact path="" component={PostList} />
                <Redirect to="" />
            </Switch>
        </Router>
    );
};

export default App;