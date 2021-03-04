function Liste(props) {
    return (
        <ul>
            { props.items.map((x,i) => <li key={i}>{ x }</li>) }
        </ul>
    );
}

export default Liste;