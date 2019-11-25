import React from 'react'
import ReactMarkdown from 'react-markdown'

const notePaperStyle = {
    width: '600px',
    padding: '2rem',
    paddintTop: 0,
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    top: '120px',
    borderRadius: '4px',
    backgroundColor: 'rgba(255,255,255,.9)',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'

}

const notes = `

# Fleetwood Young

_If you are viewing this on your phone, maybe use your computer instead! This site is not a production-ready site and not very mobile friendly._

  

### Hi! My name is Fleetwood, and this is my go at the Robots and Pencils coding challenge. You can view my code here:

  

Front-End: https://github.com/flyoungiv/astronauts-and-lentils

Back-End: https://github.com/flyoungiv/astronauts-and-lentils-server

  

#### A little about my approach...

  

I brought in as few packages/libraries as possible for this challenge because I wanted to demonstrate that I know the fundamentals. For example, I opted to

use the style tag and write css directly in the React jsx files. I am comfortable with css-in-js, styled components, css modules, etc., but I wanted to show that

I don't have to depend on those things. I specifically avoided bringing in any UI-frameworks (Material-UI, Semantic-UI) for the same reason.

  

I took a similar "bare-bones" approach with the backend. I have lots of experience working with enormous Oracle and SQL Server DB's, but I am a big believer

in choosing the right tool for the job. For this reason I chose the lowdb package... the data provided was already in a .json format, so I figured why not just lean into that. On a larger scale I would lean on a different kind of setup, like MongoDB/Firebase/some other kind of No-SQL solution, but I liked the way the
lowdb package got the job done without a bunch of overhead.

  

I hope you have as much fun going through my code as I did putting it together. There are tons of things I would like to improve about what I did, but I am eager to get my work in front of you, so thought it best to just publish this work and share some of my thoughts. Looking forward to talking more!

  

#### What I would do differently with more time...

  

- use Moment.js to work with and format dates (I took a hacky substring() shortcut to showing the date on the page)

- finish styling the checkboxes and a few other things (you will noticed I cut a few styling corners and did not fully match the spec so I could show you my work sooner)

- add a fuzzy search-as-you-type input box to automatically bring back results with each keypress. this could be easily done with several different node packages in the back end,

especially for a dataset this small. with a larger dataset we would need to consider a more scaleable approach.

- add css media queries and make the site more mobile friendly

- consider a front-end framework like Material-UI or Semantic-UI for a few little things to give the site some polish (i don't know for sure if i would do this, just something i considered)

- bring in axios and use its query params ability to form prettier GET requests

- lots of other things which i would love to chat with you about!
`

export default function DeveloperNotes(props) {

    const { visible, setVisible } = props


    return (
        <div style={notePaperStyle}>
        <ReactMarkdown source={notes} />
        </div>
    )
}