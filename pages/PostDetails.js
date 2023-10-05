import {useQuery} from "react-query";
import {Link} from "react-router-dom";
import React from "react";

const PostDetails = ({ match }) => {
    const postId = match.params.id;
    const { data: post, isLoading } = useQuery(['post', postId], () =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json())
    );

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to="/">Назад</Link>
                </>
            )}
        </div>
    );
};

export default PostDetails;