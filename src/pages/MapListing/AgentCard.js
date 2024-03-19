import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function AgentCard(props) {

    const { agentDetails, setAgent, agent } = props
    const { name, address } = agentDetails
    const isSelected = name === agent?.name

    return (
        <ListItem
            alignItems="flex-start"
            sx={{
                cursor: 'pointer',
                backgroundColor: isSelected ? '#eee' : null,
            }}
            onClick={() => setAgent(agentDetails)}
        >
            <ListItemAvatar>
                <Avatar alt={name} src="/static/images/avatar/1.jpg" {...stringAvatar(name)} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={address} />
        </ListItem>
    )
}

export default AgentCard;