import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((events) => (
        <EventItem
          key={events.id}
          id={events.id}
          title={events.title}
          location={events.location}
          date={events.date}
          image={events.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
