function Books({b}){
    return(
        <div className="Book-Card">
            <div className="The-Books">
                <h3>{b.title}</h3>
                <h4>{b.author}</h4>
            </div>
        </div>
    )
}
export default Books;