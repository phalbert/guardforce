
export default function Contact() {
    return (
        <main className="max-w-xl mx-auto">
            <h1 className="text-left text-xl font-semibold">Contact Us</h1>
            <p className="text-left text-base">
                Please fill out the form below.
            </p>
            <div className="divider"></div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <label className="label">
                    <span className="label-text">Subject</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <label className="label">
                    <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                <button className="btn btn-primary btn-sm mt-4 w-20">Send</button>
            </div>
        </main>
    );
}
