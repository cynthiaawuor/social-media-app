import React from "react";
import Stories from "../../components/Stories/stories";
import Posts from "../../components/Posts/posts";


function Home(){
    return(
<div className="Home">
    <Stories />
    <Posts />
</div>
    )
}
export default Home;