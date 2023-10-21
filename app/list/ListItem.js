"use client";

import Link from "next/link";

export default function ListItem({ result, session }) {
  return (
    <div>
      {result.map((post, index) => {
        return (
          <div className="list-item" key={index}>
            <Link href={"/detail/" + post._id.toString()} prefetch={false}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </Link>
            <Link href={"/edit/" + post._id.toString()}>
              <button>수정</button>
            </Link>
            <button
              onClick={(e) => {
                console.log(session);
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: post._id.toString(),
                }).then(() => {
                  if (post.author == session.user.email) {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  } else {
                    alert("현재유저와 작성자 불일치");
                  }
                });
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}
