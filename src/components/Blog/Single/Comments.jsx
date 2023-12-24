/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'

const Comments = () => {
  return (
    <div className="comments-area">
    <div className="group-title">
        <h3>Comments 02</h3>
    </div>
    <div className="comment-box">
        <div className="comment">
            <div className="author-thumb"><Image width={60} height={60} src="/images/resource/thumb-1.jpg" alt=""/></div>
            <div className="comment-info">
                <div className="name">Kavin smith</div> -
                <div className="date">CEO CHI ART PRO</div>
            </div>
            <div className="text">Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehiculaa,Duis lacus </div>
            <a href="#" className="reply-btn theme-btn btn-style-one"><span className="btn-title">Reply</span></a>
        </div>
    </div>

    <div className="comment-box">
        <div className="comment">
            <div className="author-thumb"><Image width={60} height={60} src="/images/resource/thumb-2.jpg" alt=""/></div>
            <div className="comment-info">
                <div className="name">Lean Guimares</div> -
                <div className="date">CEO CHI ART PRO</div>
            </div>
            <div className="text">Codswallop down the pub Queens English tomfoolery the BBC owt to do with me do one Elizabeth I dont want no agro show off show?</div>
            <a href="#" className="reply-btn theme-btn btn-style-one"><span className="btn-title">Reply</span></a>
        </div>
    </div>
</div>
  )
}

export default Comments