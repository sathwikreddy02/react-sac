import React from "react";
import './feed.css';
(function (d, s, id) {
    var js;
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://embedsocial.com/cdn/ht.js";
    d.getElementsByTagName("head")[0].appendChild(js);
}(document, "script", "EmbedSocialHashtagScript"));

const Mediafeed = () => {
    return (
        <>
            <div class="embedsocial-hashtag" data-ref="eb79acd91948256a9cb16f40c6da4bc146e3034b"> <a class="feed-powered-by-es feed-powered-by-es-feed-new" href="https://embedsocial.com/social-media-aggregator/" target="_blank" title="Widget by EmbedSocial"> </a> </div>
            <div class="feed-container">
                <div class="instagram-post">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/acVOfFYG9X4?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="instagram-post">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5RHNmAtz_cY?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

        </>
    );
}

export default Mediafeed