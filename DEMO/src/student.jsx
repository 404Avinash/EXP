function student([name ,  course , marks]){
    return(
        <div classname = "card">
            <h2>Name: {name}
            </h2>
            <p>course: {course}</p>
            <p>Marks: {marks}</p>
        </div>
    )
}
export default student;
