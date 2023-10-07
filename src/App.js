import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Switch>
                <Router>
                    <Route exact path="/home" component={PostList} />
                    <Route exact path="/" component={PostList} />
                    {/*<Route path="/post/:id" component={PostDetails} />*/}
                </Router>
            </Switch>
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        </QueryClientProvider>
    );
};

export default App;