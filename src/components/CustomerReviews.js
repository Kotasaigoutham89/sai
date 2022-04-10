import Paper from '@mui/material/Paper';
const data = [
    {
        Review: "I am very kind of you for attending online classes at home despite of circumstances due to corona virus.Online class enhances more comfortable learing environment to the children.",
        Name: "Kishore(Student Father)"
    },
    {
        Review: "This was the great initiative taken by the teachers to provide education at home .The experience in our english class is very nice mam explains each n every topic clearly providing each n every information about whatever the topic is going on she also   put up question after explaining. ",
        Name: "Nanditha(Student Mother)"
    },
    {
        Review: "The online classes helps a lot for the students and the students also  able to ask her/his doubts  in any subject. Earlier, the students roam here and there because they are free. However, classes were made and the students do homework and busy in their study",
        Name: "Rahul(Student Father)"
    },
    {
        Review: "I am fully satisfied to these online classes and appreciated ur hard work regarding this and also not giving so much homework and thank u for supporting me….Thnkuhh mam for your hard work to supporting us",
        Name: "Roshini(Student Mother)"
    }
]


export default function CustomerReviews() {
    return (
        <>
            <div className="customer-review">
                <div className="title">Parents Review</div>
                <div className="tutoring-subjects-items">
                    {data.map((ele) => (
                        <Paper elevation={1} className="customer-review-card" style={{ padding: "12px" }} >
                            <div className='customer-review-text'>
                                {ele.Review}
                            </div>
                            <div className='customer-review-name'>- {ele.Name}</div>
                        </Paper>
                    ))
                    }
                </div>


            </div>
        </>
    )
}