export default function News() {
  return(
    <div className="news">
      <h1 class="heading">News</h1>
      <div className="news__card">
        <div className="news__divider">
          <div>
            <h2 className="news__title">School News</h2>
            <div className="news__content">The Yale School of Art mourns the passing of Greg Tate</div>
          </div>
          <div className="news__timestamp ">December 8, 2021</div>
          </div>
        <div className="news__card__image">
        <img
            className="news__image"
						src="https://media.discordapp.net/attachments/780471839193432104/933742738590023800/image_14.png"
						alt=""
					/>
        </div>
      </div>
      <div className="news__cards">
        <div className="news__smallcard">
          <div>
            <h2 className="news__title">Heading</h2>
            <div className="news__content">all members of the School of Art community have the ability to add new, and edit most existing content.</div>
          </div>
          <div className="news__timestamp">Timestamp</div>
        </div>
        <div className="news__smallcard">
          <div>
            <h2 className="news__title">Heading</h2>
            <div className="news__content">all members of the School of Art community have the ability to add new, and edit most existing content.</div>
          </div>
          <div className="news__timestamp">Timestamp</div>
        </div>
        <div className="news__smallcard">
          <div>
            <h2 className="news__title">Heading</h2>
            <div className="news__content">all members of the School of Art community have the ability to add new, and edit most existing content.</div>
          </div>
          <div className="news__timestamp">Timestamp</div>
        </div>
      </div>
    </div>
  )
}