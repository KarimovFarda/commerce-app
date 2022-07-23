import React from 'react'
export const Comments = () => {
  return (
    <section className="comments mt-3">
      <article className="comment">
        <a className="comment-img" href="#non">
          <img src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" width="50" height="50" />
        </a>
        <div className="comment-body">
          <div className="text">
            <p>Hello, this is an example comment</p>
          </div>
          <p className="attribution">by Joe Bloggs at 2:20pm, 4th Dec 2012</p>
        </div>
      </article>
      <article className="comment">
        <a className="comment-img" href="#non">
          <img src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" width="50" height="50" />
        </a>
        <div className="comment-body">
          <div className="text">
            <p>This is a much longer one that will go on for a few lines.</p>
            <p>It has multiple paragraphs and is full of waffle to pad out the comment. Usually, you just wish these sorts of comments would come to an end.</p>
          </div>
          <p className="attribution">by Joe Bloggs at 2:23pm, 4th Dec 2012</p>
        </div>
      </article>
      <article className="comment">
        <a className="comment-img" href="#non">
          <img src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" width="50" height="50" />
        </a>
        <div className="comment-body">
          <div className="text">
            <p>Originally from  this presentation has been updated
              to looks more precisely to the facebook timeline</p>
          </div>
          <p className="attribution">by Luky Vj at 2:44pm, 14th Apr 2012</p>
        </div>
      </article>
    </section>
  )
}

export default Comments