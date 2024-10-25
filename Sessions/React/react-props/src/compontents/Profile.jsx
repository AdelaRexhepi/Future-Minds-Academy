function Profile({ img, name, age, height, weight, description, click, background }) {
    return (
        <div className={`item ${background}`}>
            <img src={img} alt="Profile" />
            <h2>Name : {name}</h2>
            <p>
                Age: {age} | Height: {height} | Weight: {weight}
            </p>
            <p>About: {description}</p>
            <button onClick={click}>Click Me</button>
        </div>
    )
}

export default Profile;