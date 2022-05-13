interface ListItemProps {
    name: string;
}

const ListItem: React.FunctionComponent<ListItemProps> = (props) => {
    return (
        <li key={props.name}>{props.name}</li>
    )
};

export default ListItem;