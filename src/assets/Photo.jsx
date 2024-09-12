import Dropdown from 'react-bootstrap/Dropdown';

function Photo() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="" className='border border-warning' id="dropdown-basic">
                <img src="../.././image/download.jpeg" alt="mdo" width="40" height="40" className="rounded-circle hover" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
    );
}

export default Photo;