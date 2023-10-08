// import {useQuery} from "react-query";
import React, {useState} from "react";
// import {Link} from "react-router-dom";
// import {InfiniteLoader, List, WindowScroller} from "react-virtualized";

// const fetchPosts = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return await response.json();
// };
const PostList = () => {
    alert(1)
    // const { data: posts, isLoading } = useQuery('posts', fetchPosts);
    //
    // const [startIndex, setStartIndex] = useState(0);
    // const [endIndex, setEndIndex] = useState(10);
    //
    // const loadMoreRows = ({ startIndex, stopIndex }) => {
    //     setStartIndex(startIndex);
    //     setEndIndex(stopIndex);
    // };
    //
    // const isRowLoaded = ({ index }) => {
    //     return !!posts[index];
    // };
    //
    // const rowRenderer = ({ index, key, style }) => {
    //     const post = posts[index];
    //
    //     return (
    //         <div key={key} style={style}>
    //             <h3>{post.id}</h3>
    //             <h2>{post.title}</h2>
    //             <p>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
    //             <Link to={`/post/${post.id}`}>Просмотр</Link>
    //         </div>
    //     );
    // };

    return (
    //     <InfiniteLoader
    //         isRowLoaded={isRowLoaded}
    //         loadMoreRows={loadMoreRows}
    //         rowCount={posts ? posts.length : 0}
    //     >
    //         {({ onRowsRendered, registerChild }) => (
    //             <WindowScroller>
    //                 {({ height, isScrolling, scrollTop }) => (
    //                     <List
    //                         autoHeight
    //                         height={height}
    //                         isScrolling={isScrolling}
    //                         onRowsRendered={onRowsRendered}
    //                         ref={registerChild}
    //                         rowCount={posts ? posts.length : 0}
    //                         rowHeight={220}
    //                         rowRenderer={rowRenderer}
    //                         scrollTop={scrollTop}
    //                         width={window.innerWidth}
    //                         startIndex={startIndex}
    //                         endIndex={endIndex}
    //                     />
    //                 )}
    //             </WindowScroller>
    //         )}
    //     </InfiniteLoader>
    // );

    <div className="testtest"> test test </div>
    )
};

export default PostList;