import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Head from "next/head";

function EventDetailsPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No Event</p>;
  }

  return (
    <Fragment>
      {/* ----- Static head content ------
      <Head>
        <title>Next Js Events</title>
         <meta
           name="description" 
           content = "There are several Event lists"
        />
      </Head> */}

      {/* -------Dynamic Head content ---- */}
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.imageAlt}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailsPage;
