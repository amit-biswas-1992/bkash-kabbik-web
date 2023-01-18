export default function ProfileComponent() {
    return (
        <form>
            <div className="htmlForm-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="htmlForm-text text-muted">Well never share your email with anyone else.</small>
            </div>
            <div className="htmlForm-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="htmlForm-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="htmlForm-group htmlForm-check">
                <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
                <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}