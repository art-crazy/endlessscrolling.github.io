import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Route exact path="/home" component={PostList} />
                <Route exact path="/" component={PostList} />
                <Route path="/post/:id" component={PostDetails} />
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;