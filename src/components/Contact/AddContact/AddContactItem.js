import "./style.css";

export const AddContact = () => {
    return <div className="add__contact">
        <div className="add__contact-list">
            
                <label for="Name">Name:</label>
                <input type="text" className="contact-list" />
                <label for="Email">Email:</label>
                <input type="text" className="contact-list" />
                <label for="Phone">Phone:</label>
                <input type="text" className="contact-list" />
            
        </div>

        <button className="add__contact__add-btn">Submit</button>
    </div>
}