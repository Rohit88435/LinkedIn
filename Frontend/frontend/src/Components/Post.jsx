import React, { useState } from "react";
import profile from "../assets/profile.png";
import moment from "moment";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";

function Post({ id, author, like, comment, description, image, createdAt }) {
  let [more, setMore] = useState(false);
  return (
    <div className=" w-full min-h-[200px] bg-white rounded-lg shadow-lg p-[20px] flex flex-col gap-[10px]">
      <div>
        <div className="flex justify-start items-center gap-[10px] ">
          <div className=" w-[50px] h-[50px] rounded-full  overflow-hidden flex justify-center items-center ">
            <img
              src={author.profileImage || profile}
              alt=""
              className="h-full"
            />
          </div>

          <div>
            <div className="  font-semibold text-gray-700 text-[18px]">{`${author.firstName} ${author.lastName}`}</div>
            <div className="  text-gray-600 text-[15px]">{author.headline}</div>
            <div className="  text-gray-700 text-[15px]">
              {moment(createdAt).fromNow()}
            </div>
          </div>
        </div>
        <div>{/* button */}</div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div
          className={`w-full ${
            !more ? "max-h-[100px] overflow-hidden" : ""
          } font-semibold text-gray-700   pl-[30px]`}
        >
          {description}
          <div
            className=" font-medium text-gray-700  cursor-pointer"
            onClick={() => {
              setMore((prev) => !prev);
            }}
          >
            {!more ? " read more.." : "read less.."}
          </div>
        </div>

        {image && (
          <div className="w-[400px] h-[400px] overflow-hidden rounded-lg  flex justify-center items-center">
            <img src={image} alt="" />
          </div>
        )}

        <div className=" w-full">
          <div className="w-full flex justify-between   items-center p-[20px] pb-[10px]">
            <div className="flex items-center justify-center gap-[5px] text-[18px]">
              <BiLike className="text-[#1ebbff]  h-[20px] w-[20px] " />
              <span>{like.length}</span>
            </div>
            <div className="flex items-center justify-center gap-[5px] text-[18px]">
              <span>{comment.length}</span>
              <span>comments</span>
            </div>
          </div>
          <div className="w-full border-b-2  border-gray-500"></div>
          <div className="w-full flex justify-start  items-center p-[20px] gap-[20px] ">
            <div className=" flex justify-center items-center gap-[10px] cursor-pointer">
              <BiLike className="text-[#1ebbff]  w-[24px] h-[24px]" />
              <span>Like</span>
            </div>
            <div className="flex justify-center items-center gap-[10px] cursor-pointer">
              <FaRegCommentDots className="  w-[24px] h-[24px]" />
              <span>Comment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
