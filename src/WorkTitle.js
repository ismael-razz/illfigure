import React from 'react'

export default function WorkTitle() {
  return (
    <div id='resume'>
    <section>
    <div>About Me</div>

    <div className='work-title'>
        <div className='work-grid'>
        <article className='work-item'>
        <div>
                    <h3 className='title'>Google UX Design</h3>
                    </div>
                <span>2022</span>
                <hr/>
                <p>
                    "Currently undertaking the Google UX Design Course to become a UX designer, improving my design skills and to potentially work on larger projects. "
                </p>   
            </article>
            </div>


            <div>
            <article className='work-item'>
                <div>
                    <h3 className='title'>Hearst DMS</h3>
                </div>
                <span>2022</span>
                <hr/>
                <p>
                    "Worked as a web design project analyst, using front end web development and CMS builders to create responsive websites and implemented project management to ensure projects were completed on time."
                </p>

            </article>
            </div>

            <div>
            <article className='work-item'>
                <div>
                    <h3 className='title'>The Bean Visuals Studio</h3>
                </div>
                <span>2020-2022</span>
                <hr/>
                <p>
                    "Worked as a creative intern, working on multiple projects including photo, video, graphic design, and content management. "
                </p>
                
            </article>
            </div>
        </div>
      </section>
    </div>
  )
}
