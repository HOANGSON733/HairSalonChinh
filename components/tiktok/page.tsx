import React from "react";

export const TikTokEmbed = ({ videoId }:any) => {
  return (
    <iframe
      src={`https://www.tiktok.com/embed/${videoId}`}
      width="325"
      height="605"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title="TikTok Video"
      style={{ border: "none", maxWidth: "605px", minWidth: "325px" }}
    ></iframe>
  );
};