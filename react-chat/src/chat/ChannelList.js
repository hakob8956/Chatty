import React from 'react';
import { Channel } from './Channel';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';



export class ChannelList extends React.Component {

    handleClick = id => {
        this.props.onSelectChannel(id);
    }
    handleCreate = c => {
        let name = document.getElementById("myRoomName").value;
        this.props.onCreateChannel(name);
    }

    render() {

        let list = <div className="no-content-message">There is no channels to show</div>;
        if (this.props.channels && this.props.channels.map) {
            list = this.props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} participants={c.participants} onClick={this.handleClick} />);
        }
        return (
            <div className='channel-list'>
                {list}
                <div  className="roomCreate">
                    <div className = "form-group">
                        <label>Room name</label>
                        <input type="text" id="myRoomName" className="form-control"></input>
                    </div>
                    <button type="button" className="btn btn-light" style={{margin:"2px"}} onClick={this.handleCreate}>Create Room</button>
                </div>
            </div>);
    }

}